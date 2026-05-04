"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const COOKIE_KEY = "prostranstvo_cookies_accepted";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(COOKIE_KEY)) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem(COOKIE_KEY, "1");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <>
      <style>{`
        @keyframes cookie-slide-up {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .cookie-banner {
          animation: cookie-slide-up 0.4s ease both;
        }
        .cookie-accept-btn:hover {
          background: rgba(10,186,181,0.18) !important;
          border-color: rgba(10,186,181,0.7) !important;
          color: #ffffff !important;
        }
      `}</style>
      <div
        className="cookie-banner"
        style={{
          position: "fixed",
          bottom: "clamp(16px, 2.5vh, 28px)",
          right: "clamp(16px, 2.5vw, 32px)",
          zIndex: 9999,
          width: "min(320px, calc(100vw - 32px))",
          background: "rgba(5,16,18,0.92)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: "1px solid rgba(10,186,181,0.18)",
          borderRadius: "clamp(16px, 1.5vw, 24px)",
          padding: "clamp(20px, 3vh, 28px) clamp(20px, 2.5vw, 32px)",
          boxShadow: "0 8px 40px rgba(0,0,0,0.55), 0 0 0 1px rgba(10,186,181,0.06)",
          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
        }}
      >
        <p
          style={{
            margin: "0 0 clamp(16px, 2.5vh, 22px) 0",
            fontSize: "clamp(13px, 1vw, 16px)",
            lineHeight: 1.55,
            letterSpacing: "-0.01em",
            color: "rgba(255,255,255,0.85)",
          }}
        >
          Этот сайт использует cookies. Пользуясь сайтом, вы даёте согласие на
          обработку ваших персональных данных.{" "}
          <Link
            href="/privacy"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "rgba(10,186,181,0.75)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#0ABAB5")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(10,186,181,0.75)")}
          >
            Подробнее
          </Link>
        </p>

        <button
          className="cookie-accept-btn"
          onClick={accept}
          style={{
            width: "100%",
            padding: "clamp(12px, 1.8vh, 16px) 24px",
            borderRadius: "10px",
            background: "rgba(10,186,181,0.08)",
            border: "1px solid rgba(10,186,181,0.35)",
            color: "rgba(255,255,255,0.9)",
            fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
            fontWeight: 500,
            fontSize: "clamp(13px, 1vw, 16px)",
            letterSpacing: "-0.01em",
            cursor: "pointer",
            transition: "background 0.2s, border-color 0.2s, color 0.2s",
          }}
        >
          Соглашаюсь
        </button>
      </div>
    </>
  );
}
