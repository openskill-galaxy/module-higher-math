import { defineConfig, type PluginOption } from "vite";
import react from "@vitejs/plugin-react";

// 项目站点 module-higher-math，部署在子路径 /module-higher-math/，base 必须设置
export default defineConfig({
  base: "/module-higher-math/",
  plugins: [react as unknown as PluginOption],
  build: {
    outDir: "dist",
    sourcemap: false,
  },
});
