import { Filesystem } from "@capacitor/filesystem";
import { LocalNotifications } from "@capacitor/local-notifications";

export const hasFileAccessPermissions: () => Promise<boolean> = async () => {
  const { publicStorage } = await Filesystem.checkPermissions();
  if (publicStorage === "denied") {
    console.log("file access permissions denied");
    return false;
  }
  if (publicStorage !== "granted") {
    await Filesystem.requestPermissions();
    return hasFileAccessPermissions();
  }

  return true;
};

export const hasNotificationDisplayPermissions: () => Promise<boolean> =
  async () => {
    const { display } = await LocalNotifications.checkPermissions();
    if (display === "denied") {
      console.log("Notifications display permissions denied");
      return false;
    }
    if (display !== "granted") {
      await LocalNotifications.requestPermissions();
      return hasNotificationDisplayPermissions();
    }

    return true;
  };
