"use client";

import dynamic from "next/dynamic";
import DeferredViewportMount from "./DeferredViewportMount";

// Загружаем весь блок услуг отдельным чанком — только когда пользователь
// прокручивает страницу в сторону этого блока (rootMargin="800px").
// До этого момента вместо 9 тяжёлых секций показывается лёгкий placeholder.
const HomeServicesSectionsClient = dynamic(
  () => import("./HomeServicesSectionsClient"),
  { ssr: false },
);

function ServicesPlaceholder() {
  return <div style={{ width: "100%", minHeight: "600px" }} aria-hidden />;
}

export default function DeferredServicesSections() {
  return (
    <DeferredViewportMount placeholder={<ServicesPlaceholder />} rootMargin="800px">
      <HomeServicesSectionsClient />
    </DeferredViewportMount>
  );
}
