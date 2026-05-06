"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollAnimationsOptimized() {
  const pathname = usePathname();

  // Scroll progress bar
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

  // Text reveal on scroll — desktop only
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );
    if (!elements.length) return;

    elements.forEach((el) => {
      const delay = el.dataset.revealDelay ?? "0";
      el.style.opacity = "0";
      el.style.transform = "translateY(28px)";
      el.style.transition = `opacity 0.75s cubic-bezier(0.25,0.4,0.25,1) ${delay}s, transform 0.75s cubic-bezier(0.25,0.4,0.25,1) ${delay}s`;
      el.style.willChange = "opacity, transform";
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          setTimeout(() => { el.style.willChange = "auto"; }, 800);
          observer.unobserve(el);
        });
      },
      { rootMargin: "0px 0px -40px 0px", threshold: 0.12 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      elements.forEach((el) => {
        el.style.opacity = "";
        el.style.transform = "";
        el.style.transition = "";
        el.style.willChange = "";
      });
    };
  }, [pathname]);

  return null;
}
