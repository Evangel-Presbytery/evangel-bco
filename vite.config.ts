import { defineConfig } from 'vite'

export default defineConfig({
    root: 'assets-src',           // your source folder
    base: './',                   // relative paths so links work inside _book subfolders
    build: {
        outDir: '../_book/assets',  // emit into the built book
        emptyOutDir: true,
        assetsDir: '',              // keep flat if you like (_book/assets/*)
        sourcemap: true
    },
    server: {
        port: 3000
    }
})
