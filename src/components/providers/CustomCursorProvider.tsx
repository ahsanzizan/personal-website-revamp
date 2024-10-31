"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import useMousePosition from "../../hooks/use-mouse-position";

const dampingFactor = 0.1;

export default function CustomCursor() {
  const { x: mouseX, y: mouseY } = useMousePosition();
  const [x, setX] = useState(mouseX ?? 0);
  const [y, setY] = useState(mouseY ?? 0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let animationFrameId: number;

    const updateCursorPosition = () => {
      setX((prevX) => prevX + ((mouseX ?? 0) - prevX) * dampingFactor);
      setY((prevY) => prevY + ((mouseY ?? 0) - prevY) * dampingFactor);
      animationFrameId = requestAnimationFrame(updateCursorPosition);
    };

    updateCursorPosition();

    return () => cancelAnimationFrame(animationFrameId);
  }, [mouseX, mouseY]);

  useEffect(() => {
    // Select all anchor and button elements
    const hoverTargets = document.querySelectorAll("a, button");

    const handleMouseOver = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    hoverTargets.forEach((target) => {
      target.addEventListener("mouseover", handleMouseOver);
      target.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      hoverTargets.forEach((target) => {
        target.removeEventListener("mouseover", handleMouseOver);
        target.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      className={cn(
        `pointer-events-none fixed left-0 top-0 z-[9999] hidden backdrop-blur-sm border border-white bg-opacity-50 drop-shadow-glow md:inline-block -translate-x-1/2 -translate-y-1/2 rounded-full transition-[width,height,background-color] duration-500`,
        isHovering ? "h-14 w-14 bg-background" : "h-5 w-5 bg-white"
      )}
      style={{
        left: `${x}px`,
        top: `${y}px`,
        willChange: "width, height, border",
      }}
    ></div>
  );
}
