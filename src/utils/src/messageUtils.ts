import { showDialog, showFailToast, showNotify, showSuccessToast, showToast } from "vant";
import type { MessageMode } from "#/httpClient";

export const messageUtils = {
  showMessage(message: string, mode: MessageMode = "toast") {
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
    } else if (mode === "none") {
      // Handle as needed
    }
  },

  showSuccessMessage(message: string, mode: MessageMode = "toast") {
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
    } else if (mode === "none") {
      // Handle as needed
    }
  },

  showErrorMessage(message: string, mode: MessageMode = "toast") {
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
    } else if (mode === "none") {
      // Handle as needed
    }
  },
};
