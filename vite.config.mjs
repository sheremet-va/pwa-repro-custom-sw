import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  root: 'src',
  plugins: [
    ...VitePWA({
      manifest: false,
      registerType: 'prompt',
      srcDir: 'sw',
      filename: 'sw.js',
      includeManifestIcons: false,
      injectRegister: null,
      strategies: 'injectManifest',
    }),
  ],
  build: {
    outDir: '../dist'
  }
})