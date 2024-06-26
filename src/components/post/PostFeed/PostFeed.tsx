"use client";

import styles from "./PostFeed.module.css";

import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import {
  getNextSavedPosts,
  getNextWatchedPosts,
  getNextUserPosts,
} from "@/actions/post/getNextPosts";
import { PostFeedControls } from "../PostFeedControls/PostFeedControls";
import { PostCard } from "@/components/post/PostCard/PostCard";
import { Banner } from "@/components/basic/Banner/Banner";
import { MainLayout } from "@/components/main/MainLayout/MainLayout";
import { Filters } from "@/components/search/Filters/Filters";
import { Tag } from "@prisma/client";
import { CardSkeleton } from "@/components/basic/CardSkeleton/CardSkeleton";
import { MediaQueryMobile } from "@/components/tools/MediaQuery/MediaQueryDynamic";

interface PostFeedProps {
  postsType?: "watched" | "saved" | "user";
  title?: string;
  showControls?: boolean;
  showFilters?: boolean;
  tags?: Tag[];
  watchedTags?: Tag[];
}

export const PostFeed = (props: PostFeedProps) => {
  const {
    showControls = false,
    title,
    postsType = "watched",
    tags,
    watchedTags,
    showFilters = false,
  } = props;

  let getNextPosts;

  switch (postsType) {
    case "saved":
      getNextPosts = getNextSavedPosts;
      break;
    case "user":
      getNextPosts = getNextUserPosts;
      break;
    case "watched":
      getNextPosts = getNextWatchedPosts;
      break;
    default:
      getNextPosts = getNextWatchedPosts;
      break;
  }

  const { data, fetchNextPage, hasNextPage, isLoading, refetch, isRefetching } =
    useInfiniteQuery({
      queryKey: ["posts"],
      queryFn: async ({ pageParam }: { pageParam: number | undefined }) => {
        const posts = await getNextPosts(pageParam);

        return posts;
      },
      refetchOnMount: "always",
      getNextPageParam: (lastPage) => lastPage.nextCursor,
      initialPageParam: undefined,
    });

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView]);

  let classname = [styles["PostFeed"]].filter((cls) => cls.length).join(" ");

  return (
    <MainLayout
      rightSidebarContent={
        showFilters ? (
          <Filters
            tags={tags}
            watchedTags={watchedTags}
            refetchPosts={refetch}
          ></Filters>
        ) : null
      }
    >
      <div className={classname}>
        <div className={styles["Header"]}>
          {title && <div className={styles["Title"]}>{title}</div>}
          {showControls && <PostFeedControls />}
        </div>
        {showFilters && (
          <MediaQueryMobile>
            <div className={styles["FiltersMobile"]}>
              <Filters
                tags={tags}
                watchedTags={watchedTags}
                refetchPosts={refetch}
              ></Filters>
            </div>
          </MediaQueryMobile>
        )}
        <div className={styles["PostsList"]}>
          {!(isLoading || isRefetching)
            ? data?.pages.map((page) => {
                return page.posts.map((post) => {
                  return <PostCard post={post} key={post.id} />;
                });
              })
            : (isLoading || isRefetching) && (
                <>
                  <CardSkeleton />
                  <CardSkeleton />
                  <CardSkeleton />
                </>
              )}
          {!(isLoading || isRefetching) && !data?.pages[0].posts.length ? (
            <Banner>No posts found</Banner>
          ) : null}
        </div>
        <span ref={ref} style={{ visibility: "hidden" }}></span>
      </div>
    </MainLayout>
  );
};
