import { resolve } from "node:path";
import * as path from "node:path";
import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import { VantResolver } from "unplugin-vue-components/resolvers";
import Icons from "unplugin-icons/vite";
import { FileSystemIconLoader } from "unplugin-icons/loaders";
import IconsResolver from "unplugin-icons/resolver";
import { VitePWA } from "vite-plugin-pwa";
import GenerateConfig from "unplugin-config/vite";

// vite.config.ts
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";
import UnoCss from "unocss/vite";

// This constant defines the name of the configuration file that will be used in the production environment
const GLOB_CONFIG_FILE_NAME = "_app.config.js";

// This constant sets the output directory for the Vite package
const OUTPUT_DIR = "dist";

// This constant sets the name of the application
const APP_NAME = "boot-vant";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "localhost",
    port: 8888,
    open: true,
    https: false,
    proxy: {},
  },
  plugins: [
    Vue(
      {
        script: {
          propsDestructure: true,
          defineModel: true,
        },
      },
    ),
    Icons({
      scale: 1, // Scale of icons against 1em
      defaultStyle: "width:16px;height:16px", // Style apply to icons
      defaultClass: "stroke-current", // Class names apply to icons
      compiler: "vue3", // "vue2", "vue3", "jsx"
      jsx: "react", // "react" or "preact"
      autoInstall: true,
      customCollections: {
        login: FileSystemIconLoader(path.resolve("src", "assets/icons/login")),
      },
    }),
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        "vue",
        "vue-router",
        "vue-i18n",
        "vue/macros",
        "@vueuse/head",
        "@vueuse/core",
      ],
      dts: "types/auto-imports.d.ts",
      dirs: [
        "src/composables",
        "src/store",
      ],
      vueTemplate: true,
    }),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      extensions: ["vue"],
      include: [/\.vue$/, /\.vue\?vue/],
      dts: "types/components.d.ts",
      exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],
      resolvers: [
        IconsResolver(),
        VantResolver(),
      ],
    }),

    // https://github.com/intlify/bundle-tools/tree/main/packages/unplugin-vue-i18n
    VueI18nPlugin({
      runtimeOnly: true,
      compositionOnly: true,
      fullInstall: true,
      include: [resolve(__dirname, "src/locales/**")],
    }),

    // https://github.com/antfu/vite-plugin-pwa
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico"],
      manifest: {
        name: "BootVant",
        short_name: "BootVant",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),

    // https://github.com/unocss/unocss
    // see unocss.config.ts for config
    UnoCss(),

    GenerateConfig({
      appName: APP_NAME,
      envVariables: {
        prefix: "VITE_GLOB_",
      },
      configFile: {
        generate: true,
        fileName: GLOB_CONFIG_FILE_NAME,
        outputDir: OUTPUT_DIR,
      },
    }),
  ],
  resolve: {
    alias: {
      "~/": `${resolve(__dirname, "src")}/`,
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
      @import "~/styles/variables.scss";
    `,
        javascriptEnabled: true,
      },
    },
  },
  // https://github.com/vitest-dev/vitest
  test: {
    environment: "jsdom",
  },
});
