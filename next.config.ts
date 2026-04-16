import path from "node:path";
import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";

const configDir = path.dirname(fileURLToPath(import.meta.url));

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-XSS-Protection", value: "1; mode=block" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
];

const nextConfig: NextConfig = {
  turbopack: {
    root: configDir,
  },
  // Удаляем console.* из production-сборки
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  // Оптимизирует tree-shaking для тяжёлых пакетов
  experimental: {
    optimizePackageImports: ["framer-motion", "gsap", "lenis", "lucide-react", "three", "@react-three/fiber", "@react-three/drei"],
  },
  // WebP-оптимизация изображений через next/image
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 86400,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
      // Агрессивное кэширование статических ассетов
      {
        source: "/(.*)\\.(png|jpg|jpeg|webp|avif|svg|woff2|woff|ico)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
