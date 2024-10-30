"use client";

import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // scroll duration
      easing: (t) => t * t, // easing function
      smoothWheel: true, // smooth scroll on mouse wheel
      syncTouch: false,
    });

    const animate = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    return () => lenis.destroy();
  }, []);
}
