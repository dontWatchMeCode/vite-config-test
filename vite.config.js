import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        minify: true,
        rollupOptions: {
            input: 'src/main.js',
            output: {
                dir: 'dist',
                entryFileNames: 'bundle.js',
                format: 'es',
            },
        },
    },
});
