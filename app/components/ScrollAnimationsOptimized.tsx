"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollAnimationsOptimized() {
  const pathname = usePathname();

  useEffect(() => {
    let scrollFrame = 0;

    const bar = document.createElement("div");
    Object.assign(bar.style, {
      position: "fixed",
      top: "0",
      left: "0",
      height: "2px",
      width: "0%",
      background: "linear-gradient(90deg,#0ABAB5,#00fff5)",
      zIndex: "9999",
      pointerEvents: "none",
      boxShadow: "0 0 8px rgba(10,186,181,0.6)",
      willChange: "width",
      transition: "width 0.05s linear",
    });
    document.body.appendChild(bar);

    const updateBar = () => {
      scrollFrame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = max > 0 ? `${(window.scrollY / max) * 100}%` : "0%";
    };

    const onScroll = () => {
      if (scrollFrame) return;
      scrollFrame = requestAnimationFrame(updateBar);
    };

    updateBar();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      if (scrollFrame) cancelAnimationFrame(scrollFrame);
      window.removeEventListener("scroll", onScroll);
      bar.remove();
    };
  }, [pathname]);

  return null;
}
