"use client";

import dynamic from "next/dynamic";

// Визуальные эффекты hero выносим в отдельный JS-чанк.
// ssr:false — не нужен SSR для canvas/animation компонентов.
// Загружаются после того, как браузер разберётся с критическим JS.
export const LazyShaderBackground = dynamic(
  () => import("./ShaderBackgroundOptimized"),
  { ssr: false },
);

export const LazyFloatingShapes = dynamic(
  () => import("./FloatingShapesOptimized"),
  { ssr: false },
);

export const LazyFaqSectionClient = dynamic(
  () => import("./FaqSectionClient"),
  { ssr: false },
);
