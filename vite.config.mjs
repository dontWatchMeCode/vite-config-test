import { defineConfig } from 'vite';
import path from "path";
import autoprefixer from 'autoprefixer'

export default defineConfig({
    resolve: {
        alias: {
            '@scss': path.resolve(__dirname, './src/scss'),
            '@lib': path.resolve(__dirname, './src/js/lib'),
            '@components': path.resolve(__dirname, './src/js/components'),
        },
    },
    css: {
        postcss: {
            plugins: [
                autoprefixer({})
            ],
        },
        devSourcemap: true,
    },
    build: {
        minify: true,
        sourcemap: true,
        target: ['es2020', 'chrome58', 'firefox57', 'safari11'],
        cssCodeSplit: false,

        rollupOptions: {
            input: 'src/main.js',
            output: {
                dir: 'dist',
                entryFileNames: 'script.min.js',
                format: 'es',
                assetFileNames: (file) => {
                    if (file.name == "style.css") return 'style.min.css';
                    return '[name].[ext]';
                }
            },
        },
    },
});
