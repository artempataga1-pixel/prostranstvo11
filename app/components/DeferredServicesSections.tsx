"use client";

import dynamic from "next/dynamic";
import DeferredViewportMount from "./DeferredViewportMount";

// Загружаем весь блок услуг отдельным чанком — только когда пользователь
// приближается к этому блоку.
// На мобиле уменьшаем rootMargin: 800px = фаерит сразу при загрузке (hero ≈ 100vh),
// вызывая монтирование всех 9 секций во время первого скролла.
const HomeServicesSectionsClient = dynamic(
  () => import("./HomeServicesSectionsClient"),
  { ssr: false },
);

function ServicesPlaceholder() {
  return <div style={{ width: "100%", minHeight: "600px" }} aria-hidden />;
}

function getServicesRootMargin() {
  if (typeof window === "undefined") return "600px";
  // На мобиле (touch) секция услуг сразу за hero (~100vh) — 800px rootMargin
  // означает монтирование при загрузке страницы. Уменьшаем до 150px.
  return window.matchMedia("(pointer: coarse)").matches ? "150px" : "800px";
}

export default function DeferredServicesSections() {
  const rootMargin = getServicesRootMargin();
  return (
    <DeferredViewportMount placeholder={<ServicesPlaceholder />} rootMargin={rootMargin}>
      <HomeServicesSectionsClient />
    </DeferredViewportMount>
  );
}
