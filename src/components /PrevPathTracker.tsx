"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";

export default function PrevPathTracker() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const lastCurrent = sessionStorage.getItem("currentPath");

    if (lastCurrent) {
      sessionStorage.setItem("prevPath", lastCurrent);
    } else {
      sessionStorage.removeItem("prevPath");
    }

    sessionStorage.setItem("currentPath", pathname);
  }, [pathname]);

  return null;
}