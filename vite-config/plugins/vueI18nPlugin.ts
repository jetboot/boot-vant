import { resolve } from "node:path";
import type { PluginOption } from "vite";
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";

export function createVueI18nPluginConfig(): PluginOption {
  return VueI18nPlugin({
    runtimeOnly: true,
    compositionOnly: true,
    fullInstall: true,
    include: [resolve("src", "locales/**")],
  });
}
