import dynamic from "next/dynamic";

export const MediaQueryDesktop = dynamic(
  () =>
    import("@/components/tools/MediaQuery/MediaQuery").then(
      (mod) => mod.MediaQueryDesktop
    ),
  { ssr: false }
);

export const MediaQueryTablet = dynamic(
  () =>
    import("@/components/tools/MediaQuery/MediaQuery").then(
      (mod) => mod.MediaQueryTablet
    ),
  { ssr: false }
);

export const MediaQueryMobile = dynamic(
  () =>
    import("@/components/tools/MediaQuery/MediaQuery").then(
      (mod) => mod.MediaQueryMobile
    ),
  { ssr: false }
);

export const MediaQueryTabletAndBelow = dynamic(
  () =>
    import("@/components/tools/MediaQuery/MediaQuery").then(
      (mod) => mod.MediaQueryTabletAndBelow
    ),
  { ssr: false }
);

export const MediaQueryTabletAndOver = dynamic(
  () =>
    import("@/components/tools/MediaQuery/MediaQuery").then(
      (mod) => mod.MediaQueryTabletAndOver
    ),
  { ssr: false }
);
