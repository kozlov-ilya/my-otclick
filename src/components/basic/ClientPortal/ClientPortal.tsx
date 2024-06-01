"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface ClientPortalProps {
  show?: boolean;
  selector: string;
  children?: React.ReactNode;
}

export const ClientPortal = (props: ClientPortalProps) => {
  const { children, show, selector } = props;

  const ref = useRef<Element | null>(null);

  useEffect(() => {
    ref.current = document.querySelector(selector);
  }, [selector]);

  return show && ref.current ? createPortal(children, ref.current) : null;
};
