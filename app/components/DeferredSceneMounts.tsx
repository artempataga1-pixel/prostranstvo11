"use client";

import dynamic from "next/dynamic";
import DeferredViewportMount from "./DeferredViewportMount";
import { useSyncExternalStore } from "react";

const Cube3D = dynamic(() => import("./Cube3D"), { ssr: false });
const NeuralNet3D = dynamic(() => import("./NeuralNet3D"), { ssr: false });
const CRM3D = dynamic(() => import("./CRM3D"), { ssr: false });
const Warehouse3D = dynamic(() => import("./Warehouse3D"), { ssr: false });

function ScenePlaceholder() {
  return <div style={{ width: "100%", height: "100%" }} aria-hidden="true" />;
}

function subscribeToViewport(onStoreChange: () => void) {
  if (typeof window === "undefined") {
    return () => {};
  }

  const mediaQuery = window.matchMedia("(max-width: 767px)");
  const onChange = () => onStoreChange();

  if (typeof mediaQuery.addEventListener === "function") {
    mediaQuery.addEventListener("change", onChange);
    return () => mediaQuery.removeEventListener("change", onChange);
  }

  mediaQuery.addListener(onChange);
  return () => mediaQuery.removeListener(onChange);
}

function getViewportSnapshot() {
  return typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches;
}

// На мобильном iOS/Android WebGL контексты вызывают чёрный экран и фризы.
// Возвращаем просто пустой div — секция выглядит нормально без 3D.
function useMobile() {
  return useSyncExternalStore(subscribeToViewport, getViewportSnapshot, () => false);
}

export function DeferredCube3D() {
  const isMobile = useMobile();
  if (isMobile) return <ScenePlaceholder />;
  return (
    <DeferredViewportMount placeholder={<ScenePlaceholder />} rootMargin="320px">
      <Cube3D />
    </DeferredViewportMount>
  );
}

export function DeferredNeuralNet3D() {
  const isMobile = useMobile();
  if (isMobile) return <ScenePlaceholder />;
  return (
    <DeferredViewportMount placeholder={<ScenePlaceholder />} rootMargin="320px">
      <NeuralNet3D />
    </DeferredViewportMount>
  );
}

export function DeferredCRM3D() {
  const isMobile = useMobile();
  if (isMobile) return <ScenePlaceholder />;
  return (
    <DeferredViewportMount placeholder={<ScenePlaceholder />} rootMargin="320px">
      <CRM3D />
    </DeferredViewportMount>
  );
}

export function DeferredWarehouse3D() {
  const isMobile = useMobile();
  if (isMobile) return <ScenePlaceholder />;
  return (
    <DeferredViewportMount placeholder={<ScenePlaceholder />} rootMargin="320px">
      <Warehouse3D />
    </DeferredViewportMount>
  );
}
