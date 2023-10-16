import Components from "unplugin-vue-components/vite";
import type { PluginOption } from "vite";
import IconsResolver from "unplugin-icons/resolver";
import { VantResolver } from "unplugin-vue-components/resolvers";

export function createVueComponentsPluginConfig(): PluginOption {
  return Components({
    extensions: ["vue"],
    include: [/\.vue$/, /\.vue\?vue/],
    dts: "types/components.d.ts",
    exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],
    resolvers: [
      IconsResolver({
        customCollections: ["login"],
      }),
      VantResolver(),
    ],
  });
}
