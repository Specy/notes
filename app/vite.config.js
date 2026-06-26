// @ts-nocheck
// app/vite.config.js
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { vaultPlugin } from './vite-plugin-vault.js';

const VAULT_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'it');

export default defineConfig({
  plugins: [vaultPlugin(), sveltekit()],
  server: { fs: { allow: ['..', VAULT_DIR] } },
  test: {
    include: ['src/**/*.{test,spec}.{js,ts,mjs}', '*.{test,spec}.{js,ts,mjs}', 'scripts/**/*.{test,spec}.{js,ts,mjs}'],
    environment: 'node',
    testTimeout: 30000
  }
});
