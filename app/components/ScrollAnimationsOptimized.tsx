"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollAnimationsOptimized() {
  const pathname = usePathname();

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    let disposed = false;
    let scrollFrame = 0;

    // ── Прогресс-бар ──────────────────────────────────────────────────────────
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

    // ── Анимация текста (только h2) — IntersectionObserver + CSS transition ──
    // Не трогаем мобил — нет смысла анимировать при нативном скролле
    if (!isTouch) {
      const observed = new Set<Element>();

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const el = entry.target as HTMLElement;
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            observer.unobserve(el);
            observed.delete(el);
          });
        },
        { rootMargin: "0px 0px -40px 0px", threshold: 0.05 },
      );

      const initAnim = () => {
        if (disposed) return;
        document.querySelectorAll<HTMLElement>("h2").forEach((el) => {
          if (observed.has(el)) return;
          el.style.opacity = "0";
          el.style.transform = "translateY(22px)";
          el.style.transition = "opacity 0.75s ease, transform 0.75s ease";
          el.style.willChange = "opacity, transform";
          observer.observe(el);
          observed.add(el);
        });
      };

      // Первый запуск — после рендера
      requestAnimationFrame(() => requestAnimationFrame(initAnim));

      // Повторный запуск когда deferred-секции монтируются
      const mutationObserver = new MutationObserver(() => {
        if (!disposed) initAnim();
      });
      mutationObserver.observe(document.body, { childList: true, subtree: true });

      return () => {
        disposed = true;
        if (scrollFrame) cancelAnimationFrame(scrollFrame);
        window.removeEventListener("scroll", onScroll);
        observer.disconnect();
        mutationObserver.disconnect();
        bar.remove();
      };
    }

    return () => {
      disposed = true;
      if (scrollFrame) cancelAnimationFrame(scrollFrame);
      window.removeEventListener("scroll", onScroll);
      bar.remove();
    };
  }, [pathname]);

  return null;
}
