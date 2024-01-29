import { App as CapacitorApp } from "@capacitor/app";
import { Capacitor } from "@capacitor/core";

async function confirmExit() {
  return window.confirm("Are you sure you want to exit?");
}

let timeout: NodeJS.Timeout;

export const navigateBack = () => {
  // debounce to prevent multiple call being executed in quick succession
  clearTimeout(timeout);
  timeout = setTimeout(async () => {
    const isRootPath = window.location.pathname === "/";
    if (!isRootPath) {
      window.history.back();
    } else if (await confirmExit()) {
      CapacitorApp.exitApp();
    }
  }, 100);
};

export const handleNativeSwipeGestureForBackNavigation = () => {
  if (Capacitor.getPlatform() === "ios") {
    document.addEventListener("touchstart", (touchStartEvent: TouchEvent) => {
      const startX = touchStartEvent.touches[0].clientX;
      if (startX > 5) return; // only consider swipes which start rom the extreme left

      document.addEventListener(
        "touchmove",
        async (touchMoveEvent: TouchEvent) => {
          const deltaX = Math.abs(touchMoveEvent.touches[0].clientX - startX);
          if (deltaX > 75) {
            navigateBack();
            touchMoveEvent.preventDefault();
          }
        }
      );
    });
  }
};
