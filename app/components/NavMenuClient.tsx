"use client";

import { useCallback } from "react";

const NAV_ITEMS = [
  { label: "О нас",          href: "#about"    },
  { label: "Услуги",         href: "#services"  },
  { label: "Кейсы",          href: "#cases"     },
  { label: "Частые вопросы", href: "#faq"       },
  { label: "Контакты",       href: "#contacts"  },
];

type LenisInstance = {
  scrollTo: (target: string | number | HTMLElement, options?: {
    duration?: number;
    easing?: (t: number) => number;
    offset?: number;
  }) => void;
};

const SECTION_OFFSETS: Record<string, number> = {
  "#about":    80,
  "#services": 80,
  "#cases":    80,
  "#faq":      80,
  "#contacts": 80,
};

function scrollToSection(hash: string) {
  const lenis = (window as Window & { __lenis?: LenisInstance }).__lenis;
  const target = document.querySelector<HTMLElement>(hash);
  if (!target) return;

  const offset = (SECTION_OFFSETS[hash] ?? 0);

  if (lenis) {
    lenis.scrollTo(target, {
      duration: 1.2,
      easing: (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
      offset,
    });
  } else {
    // На мобиле: мгновенный переход — scrollIntoView({ behavior: "smooth" })
    // блокирует touch-события во время анимации, вызывая freeze.
    const top = window.scrollY + target.getBoundingClientRect().top - offset;
    window.scrollTo({ top, behavior: "instant" });
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
