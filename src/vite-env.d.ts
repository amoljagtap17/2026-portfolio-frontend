interface ViteTypeOptions {
  // By adding this line, you can make the type of ImportMetaEnv strict
  // to disallow unknown keys.
  // strictImportMetaEnv: unknown
}

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_APP_DESCRIPTION: string;
  readonly VITE_APP_KEYWORDS: string;
  readonly VITE_APP_AUTHOR: string;
  readonly VITE_APP_THEME_COLOR: string;
  readonly VITE_APP_OG_IMAGE: string;
  readonly VITE_APP_URL: string;
  readonly VITE_APP_PORT: string;
  readonly VITE_APP_GRAPHQL_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare const __APP_VERSION__: string;
declare const __APP_ENV__: string;
