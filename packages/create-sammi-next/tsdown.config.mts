import { defineConfig } from 'tsdown';

export default defineConfig({
    entry: ['src/index.ts'],
    target: 'node20',
    minify: "dce-only",
    fixedExtension: false,
    plugins: []
});
