import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import htmlMinifier from "vite-plugin-html-minifier";
import { viteStaticCopy } from "vite-plugin-static-copy";

const htmlMinifierConfig = {
  minify: true,
  collapseWhitespace: true,
  keepClosingSlash: true,
  removeComments: true,
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
  useShortDoctype: true,
  minifyCSS: true,
  minifyJS: true,
};

const viteStaticCopyConfig = {
  targets: [
    {
      src: "src/locales/*",
      dest: "locales",
    },
  ],
};

export default defineConfig({
  resolve: {
    alias: {
      react: "@preact/compat",
      "react-dom": "@preact/compat",
    },
  },
  base: "./",
  plugins: [
    viteStaticCopy(viteStaticCopyConfig),
    preact(),
    htmlMinifier(htmlMinifierConfig),
  ],
  build: {
    target: "esnext",
    legacy: false,
    sourcemap: false,
    minify: "terser",
    terserOptions: {
      format: {
        comments: false,
      },
    },
    cssCodeSplit: true,
    outDir: "dist",
  },
  css: {
    postcss: {
      plugins: [
        require("tailwindcss"),
        require("autoprefixer"),
        require("cssnano")({
          preset: ["default", { discardComments: { removeAll: true } }],
        }),
      ],
    },
  },
  server: {
    fs: {
      allow: ["src", "favicon", "node_modules"],
    },
  },
});
