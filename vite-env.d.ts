/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_SUPABASE_KEY: string;
	readonly VITE_API_KEY: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
