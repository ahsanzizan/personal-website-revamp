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
        `pointer-events-none fixed left-0 top-0 z-[9999] hidden border bg-white bg-opacity-50 border-white drop-shadow-glow md:inline-block -translate-x-1/2 -translate-y-1/2 rounded-full transition-[width,height,background-color] duration-500`,
        isHovering ? "h-10 w-10" : "h-5 w-5"
      )}
      style={{
        transform: `translate(${x}px, ${y}px)`,
        willChange: "transform, width, height, background-color",
      }}
    ></div>
  );
}
