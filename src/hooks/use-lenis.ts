"use client";

import Lenis from "lenis";
import { useEffect } from "react";

export function useLenisScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Animation duration
      easing: (t) => t, // Easing function
      smoothWheel: true, // Enable smooth scrolling
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
}

export default useLenisScroll;
