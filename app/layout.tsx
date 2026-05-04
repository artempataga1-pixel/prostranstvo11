import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ScrollAnimationsOptimized } from "./components/ScrollAnimationsOptimized";
import CookieBanner from "./components/CookieBanner";

export const metadata: Metadata = {
  title: "PROстранство — Получить разбор",
  description: "Превращаем хаос на маркетплейсах в управляемую модель роста",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0d1f1f",
  // Клавиатура на мобильном ресайзит только визуальный viewport,
  // не layout-viewport → нет layout shift и перерендера при фокусе на input
  interactiveWidget: "resizes-visual",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" data-scroll-behavior="smooth">
      <head />
      <body>
        {children}
        <ScrollAnimationsOptimized />
        <CookieBanner />
      </body>
    </html>
  );
}
