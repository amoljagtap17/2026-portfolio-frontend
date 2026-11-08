import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import { defineConfig, loadEnv } from "vite";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const pkg = JSON.parse(
  readFileSync(new URL("./package.json", import.meta.url), "utf-8"),
) as { version: string };

const envDir = fileURLToPath(new URL("./env_files", import.meta.url));

const clientEnvPrefixes = ["VITE_", "REACT_APP_"];

const allowedUnprefixedEnvKeys = new Set(["NODE_ENV", "BASE_URL"]);

function pickClientEnv(rawEnv: Record<string, string>) {
  return Object.fromEntries(
    Object.entries(rawEnv).filter(
      ([key]) =>
        clientEnvPrefixes.some(prefix => key.startsWith(prefix)) ||
        allowedUnprefixedEnvKeys.has(key),
    ),
  );
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = pickClientEnv(loadEnv(mode, envDir, ""));

  console.log("env::", env);

  return {
    plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
    resolve: {
      tsconfigPaths: true,
    },
    envDir,
    envPrefix: clientEnvPrefixes,
    define: {
      __APP_VERSION__: JSON.stringify(pkg.version),
      __APP_ENV__: JSON.stringify(mode),
    },
    server: {
      port: env.VITE_APP_PORT ? Number(env.VITE_APP_PORT) : 5173,
      strictPort: true,
      open: false,
      host: "localhost",
      proxy: {
        "/api/graphql": {
          target: env.VITE_APP_GRAPHQL_URL,
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, ""),
          secure: false,
        },
      },
    },
    preview: {
      port: env.VITE_APP_PORT ? Number(env.VITE_APP_PORT) : 5173,
      strictPort: true,
      open: false,
      host: "localhost",
      proxy: {
        "/api/graphql": {
          target: env.VITE_APP_GRAPHQL_URL,
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, ""),
          secure: false,
        },
      },
    },
    css: {
      transformer: "postcss",
    },
    build: {
      outDir: "dist",
      sourcemap: true,
      minify: "oxc",
      target: "baseline-widely-available",
      reportCompressedSize: false,
      chunkSizeWarningLimit: 500,
    },
    logLevel: "info",
    devtools: {
      apply: "build",
    },
  };
});
