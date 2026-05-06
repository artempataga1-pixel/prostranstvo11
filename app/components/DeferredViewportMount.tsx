import type { ReactNode } from "react";

interface DeferredViewportMountProps {
  children: ReactNode;
  placeholder?: ReactNode;
  rootMargin?: string;
}

export default function DeferredViewportMount({ children }: DeferredViewportMountProps) {
  return <div style={{ width: "100%", height: "100%" }}>{children}</div>;
}
