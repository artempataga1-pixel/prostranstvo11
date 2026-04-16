import type { Metadata, Viewport } from "next";
import "./globals.css";
import RoutePrefetch from "./components/RoutePrefetch";
import { ScrollAnimationsOptimized } from "./components/ScrollAnimationsOptimized";

export const metadata: Metadata = {
  title: "PROстранство — Получить разбор",
  description: "Превращаем хаос на маркетплейсах в управляемую модель роста",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
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
      <body>
        {children}
        <RoutePrefetch
          routes={["/form"]}
          delayMs={1200}
          batchSize={1}
          batchDelayMs={0}
        />
        <ScrollAnimationsOptimized />
      </body>
    </html>
  );
}
