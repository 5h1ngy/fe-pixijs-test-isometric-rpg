import _ from "lodash";
import { defineConfig } from 'vite'
import { jsonX } from 'vite-plugin-jsonx';

import dynamicImport from 'vite-plugin-dynamic-import'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import { normalizePath } from 'vite'
import path from 'path'

/** @type {import('vite').UserConfig} */
export default defineConfig({
  root: path.resolve(__dirname, 'app'),
  base: './',
  publicDir: '/public',
  cacheDir: path.resolve(__dirname, '.vite'),
  plugins: [
    jsonX(),
    dynamicImport(),
    viteStaticCopy({
      targets: [
        {
          src: normalizePath(path.resolve(__dirname, 'app', 'public')),
          dest: path.resolve(__dirname, 'dist'),
        }
      ]
    })
  ],
  resolve: {
    alias: {
      '@app/assets': path.resolve(__dirname, 'app', 'src', 'assets'),
      '@app/components': path.resolve(__dirname, 'app', 'src', 'components'),
      '@app/containers': path.resolve(__dirname, 'app', 'src', 'containers'),
      '@app/hocs': path.resolve(__dirname, 'app', 'src', 'hocs'),
      '@app/pages': path.resolve(__dirname, 'app', 'src', 'pages'),
      '@app/services': path.resolve(__dirname, 'app', 'src', 'services'),
      '@app/store': path.resolve(__dirname, 'app', 'src', 'store'),
    },
  },
  build: {

    outDir: path.resolve(__dirname, 'dist'),
    copyPublicDir: true,
    assetsDir: './js/',
    emptyOutDir: false,
    sourcemap: false,

    rollupOptions: {
      treeshake: true,
      output: {
        entryFileNames: `js/main.js`,
        chunkFileNames: `js/[hash].js`,
        assetFileNames: `js/[hash].[ext]`
      },
    },
  }
})
