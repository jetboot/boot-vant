import { useLocalStorage } from "@vueuse/core";
import { createApp } from "vue";

// Vue Router
import { createI18n } from "vue-i18n";

import messages from "@intlify/unplugin-vue-i18n/messages";
import { router } from "./router";

import { setupStore } from "./store";
import App from "~/App.vue";

// reset css
import "@kirklin/reset-css/kirklin.css";
import "vant/lib/index.css";
import "~/styles/main.scss";
import "uno.css";
import { initializeConfiguration } from "~/AppConfiguration";

const app = createApp(App);
app.use(createI18n({
  legacy: false,
  locale: unref(useLocalStorage("locale", "zh")),
  messages,
}));
// Configure store
// 配置 store
setupStore(app);
app.use(router);
initializeConfiguration();
app.mount("#app");
