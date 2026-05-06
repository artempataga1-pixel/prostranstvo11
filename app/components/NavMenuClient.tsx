"use client";

import { useCallback } from "react";

const NAV_ITEMS = [
  { label: "О нас",          href: "#about"    },
  { label: "Услуги",         href: "#services"  },
  { label: "Кейсы",          href: "#cases"     },
  { label: "Частые вопросы", href: "#faq"       },
  { label: "Контакты",       href: "#contacts"  },
];

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function animatedScrollTo(targetY: number, duration = 1200) {
  const startY = window.scrollY;
  const distance = targetY - startY;
  let startTime: number | null = null;
  let rafId = 0;

  function tick(now: number) {
    if (startTime === null) startTime = now;
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, startY + distance * easeInOutCubic(progress));
    if (progress < 1) rafId = requestAnimationFrame(tick);
  }

  rafId = requestAnimationFrame(tick);
  return () => cancelAnimationFrame(rafId);
}

function scrollToSection(hash: string) {
  const target = document.querySelector<HTMLElement>(hash);
  if (!target) return;

  const isMobile = window.matchMedia("(pointer: coarse)").matches;
  const targetY = window.scrollY + target.getBoundingClientRect().top;

  if (isMobile) {
    // Mobile: instant jump — smooth scroll blocks touch events (freeze)
    window.scrollTo({ top: targetY, behavior: "instant" });
  } else {
    // Desktop: animated 1.2s scroll so all intermediate blocks are visible
    animatedScrollTo(targetY, 1200);
  }
}

export default function NavMenuClient() {
  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollToSection(href);
  }, []);

  return (
    <>
      <style>{`
        .site-nav {
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
        }
        .site-nav-btn {
          display: flex;
          align-items: center;
          text-decoration: none;
          border-radius: 50px;
          border: 1px solid transparent;
          background: transparent;
          color: rgba(255,255,255,0.55);
          font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
          font-weight: 400;
          letter-spacing: 0em;
          white-space: nowrap;
          cursor: pointer;
          transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
          font-size: clamp(11px, 0.78vw, 14px);
          padding: 7px 16px;
        }
        .site-nav-btn:hover {
          background: rgba(10,186,181,0.1);
          border-color: rgba(10,186,181,0.25);
          color: #ffffff;
          box-shadow: 0 0 14px rgba(10,186,181,0.15);
        }
        @media (max-width: 768px) {
          .site-nav {
            position: absolute !important;
          }
          .site-nav-btn {
            font-size: 12px;
            padding: 6px 11px;
          }
        }
        @media (max-width: 480px) {
          .site-nav-btn {
            font-size: 11px;
            padding: 5px 9px;
          }
        }
      `}</style>

      <nav
        className="site-nav"
        style={{
          position: "fixed",
          top: "clamp(14px, 2.2vh, 36px)",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1000,
          gap: "3px",
          background: "rgba(5,16,18,0.82)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "50px",
          padding: "5px 7px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(10,186,181,0.06)",
          maxWidth: "calc(100vw - 24px)",
          overflowX: "auto",
          scrollbarWidth: "none",
        }}
      >
        {NAV_ITEMS.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            className="site-nav-btn"
            onClick={(e) => handleNavClick(e, href)}
          >
            {label}
          </a>
        ))}
      </nav>
    </>
  );
}
