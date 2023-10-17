import { field, logger } from "@kirklin/logger";
import { showDialog, showFailToast, showNotify, showSuccessToast, showToast } from "vant";

import { HttpRequestEngine } from "~/request";

function initializeHttpRequest() {
  HttpRequestEngine.initRequest(() => ({
    getToken: () => {
      // const userStore = useUserStoreWithOut();
      // return userStore.getToken;
      return undefined;
    },
  }));
  HttpRequestEngine.setTimeoutHandler(() => {
    // const userStore = useUserStoreWithOut();
    // userStore.setToken(undefined);
    // userStore.logout(true).then(() => {});
  });
  HttpRequestEngine.setUnauthorizedHandler(() => {
    // const userStore = useUserStoreWithOut();
    // userStore.setToken(undefined);
    // userStore.logout(true).then(() => {});
  });
  HttpRequestEngine.setMessageHandler((message, mode) => {
    if (mode === "toast") {
      showToast(message);
    } else if (mode === "dialog") {
      showDialog({
        title: "信息",
        message,
        theme: "round-button",
      }).then(() => {
        // on close
      });
    } else if (mode === "notification") {
      showNotify({ type: "primary", message });
    } else if (mode === undefined || mode === "none") {
      logger.info(`HttpRequestEngine MessageHandler: ${message}`);
    }
  });
  HttpRequestEngine.setSuccessMessageHandler((message, mode) => {
    if (mode === "toast") {
      showSuccessToast(message);
    } else if (mode === "dialog") {
      showDialog({
        title: "成功",
        message,
        theme: "round-button",
      }).then(() => {
        // on close
      });
    } else if (mode === "notification") {
      showNotify({ type: "success", message });
    } else if (mode === undefined || mode === "none") {
      logger.info(`HttpRequestEngine SuccessHandler: ${message}`);
    }
  });
  HttpRequestEngine.setErrorMessageHandler((message, mode) => {
    if (mode === "toast") {
      showFailToast(message);
    } else if (mode === "dialog") {
      showDialog({
        title: "错误",
        message,
        theme: "round-button",
      }).then(() => {
        // on close
      });
    } else if (mode === "notification") {
      showNotify({ type: "danger", message });
    } else if (mode === undefined || mode === "none") {
      logger.error("HttpRequestEngine ErrorHandler", field("content:", message));
    }
  });
}

export function initializeConfiguration() {
  initializeHttpRequest();
}
