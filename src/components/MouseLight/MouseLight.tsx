"use client";

import { useEffect } from "react";

export const MouseLight = () => {
  useEffect(() => {
    let targetX = 0;
    let targetY = 0;

    let currentX = 0;
    let currentY = 0;

    const speed = 0.08; // 小さいほど遅れる

    const update = () => {
      currentX += (targetX - currentX) * speed;
      currentY += (targetY - currentY) * speed;

      document.documentElement.style.setProperty("--mouse-x", `${currentX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${currentY}px`);

      requestAnimationFrame(update);
    };

    const handleMove = (e: PointerEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    window.addEventListener("pointermove", handleMove);

    requestAnimationFrame(update);

    return () => {
      window.removeEventListener("pointermove", handleMove);
    };
  }, []);

  return null;
};
