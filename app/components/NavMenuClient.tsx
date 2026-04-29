"use client";

import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { label: "О нас",          href: "#about"    },
  { label: "Услуги",         href: "#services"  },
  { label: "Кейсы",          href: "#cases"     },
  { label: "Частые вопросы", href: "#faq"       },
  { label: "Контакты",       href: "#contacts"  },
];

export default function NavMenuClient() {
  const [open, setOpen] = useState(false);

  // Блокируем скролл страницы когда меню открыто
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const handleLink = () => setOpen(false);

  return (
    <>
      <style>{`
        /* ── Desktop pill nav ── */
        .site-nav { display: flex; flex-direction: row; }
        .site-nav-btn {
          display: flex;
          align-items: center;
          text-decoration: none;
          padding: 7px 16px;
          border-radius: 50px;
          border: 1px solid transparent;
          background: transparent;
          color: rgba(255,255,255,0.55);
          font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
          font-size: clamp(11px, 0.78vw, 14px);
          font-weight: 400;
          letter-spacing: 0em;
          white-space: nowrap;
          cursor: pointer;
          transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
        }
        .site-nav-btn:hover {
          background: rgba(10,186,181,0.1);
          border-color: rgba(10,186,181,0.25);
          color: #ffffff;
          box-shadow: 0 0 14px rgba(10,186,181,0.15);
        }

        /* ── Mobile hamburger button ── */
        .mob-nav-toggle { display: none; }

        /* ── Mobile overlay ── */
        .mob-nav-overlay {
          display: none;
          position: fixed;
          inset: 0;
          z-index: 1100;
          background: rgba(4,12,14,0.92);
          backdrop-filter: blur(28px);
          -webkit-backdrop-filter: blur(28px);
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.28s ease;
        }
        .mob-nav-overlay.open {
          opacity: 1;
          pointer-events: all;
        }
        .mob-nav-item {
          display: block;
          text-decoration: none;
          font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
          font-size: clamp(26px, 7vw, 48px);
          font-weight: 300;
          letter-spacing: -0.03em;
          color: rgba(255,255,255,0.55);
          padding: 10px 32px;
          border-radius: 16px;
          border: 1px solid transparent;
          transition: color 0.2s ease, background 0.2s ease, border-color 0.2s ease;
          text-align: center;
        }
        .mob-nav-item:hover {
          color: #ffffff;
          background: rgba(10,186,181,0.08);
          border-color: rgba(10,186,181,0.2);
        }
        .mob-nav-close {
          position: absolute;
          top: clamp(20px, 3vh, 36px);
          right: clamp(20px, 4vw, 40px);
          width: 44px;
          height: 44px;
          border: none;
          background: rgba(255,255,255,0.06);
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
        }
        .mob-nav-close:hover { background: rgba(255,255,255,0.12); }
        .mob-nav-close svg { display: block; }

        /* ── Responsive switch ── */
        @media (max-width: 768px) {
          .site-nav { display: none !important; }
          .mob-nav-toggle { display: flex; }
          .mob-nav-overlay { display: flex; }
        }
      `}</style>

      {/* Desktop pill nav */}
      <nav className="site-nav" style={{
        position: "fixed",
        top: "clamp(20px, 2.8vh, 36px)",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 1000,
        gap: "4px",
        background: "rgba(5,16,18,0.82)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "50px",
        padding: "6px 8px",
        boxShadow: "0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(10,186,181,0.06)",
      }}>
        {NAV_ITEMS.map(({ label, href }) => (
          <a key={href} href={href} className="site-nav-btn">{label}</a>
        ))}
      </nav>

      {/* Mobile hamburger button */}
      <button
        className="mob-nav-toggle"
        onClick={() => setOpen(true)}
        aria-label="Открыть меню"
        style={{
          position: "fixed",
          top: "clamp(16px, 2.5vh, 28px)",
          right: "clamp(16px, 4vw, 28px)",
          zIndex: 1000,
          width: 44,
          height: 44,
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: "12px",
          background: "rgba(5,16,18,0.82)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          cursor: "pointer",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: 5,
          boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
        }}
      >
        <span style={{ display: "block", width: 18, height: 1.5, background: "rgba(255,255,255,0.8)", borderRadius: 2 }} />
        <span style={{ display: "block", width: 13, height: 1.5, background: "rgba(255,255,255,0.5)", borderRadius: 2 }} />
        <span style={{ display: "block", width: 18, height: 1.5, background: "rgba(255,255,255,0.8)", borderRadius: 2 }} />
      </button>

      {/* Mobile overlay */}
      <div className={`mob-nav-overlay${open ? " open" : ""}`}>
        <button
          className="mob-nav-close"
          onClick={() => setOpen(false)}
          aria-label="Закрыть меню"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M2 2L14 14M14 2L2 14" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>

        {/* Teal glow blobs */}
        <div style={{ position: "absolute", top: "10%", left: "20%", width: "50vw", height: "50vw", background: "radial-gradient(circle, rgba(10,186,181,0.06) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "10%", right: "10%", width: "40vw", height: "40vw", background: "radial-gradient(circle, rgba(10,186,181,0.04) 0%, transparent 65%)", pointerEvents: "none" }} />

        {NAV_ITEMS.map(({ label, href }) => (
          <a key={href} href={href} className="mob-nav-item" onClick={handleLink}>
            {label}
          </a>
        ))}
      </div>
    </>
  );
}
