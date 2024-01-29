import {
  LocalNotifications,
  ScheduleOptions,
} from "@capacitor/local-notifications";
import {
  ActionPerformed,
  LocalNotificationSchema,
} from "@capacitor/local-notifications/dist/esm/definitions";

export const showLocalNotification = async (
  notifications: LocalNotificationSchema[],
  onNotificationClick: (notificationAction: ActionPerformed) => void
) => {
  const options: ScheduleOptions = {
    notifications,
  };

  try {
    await LocalNotifications.schedule(options);
    LocalNotifications.addListener(
      "localNotificationActionPerformed",
      onNotificationClick
    );
  } catch (e) {
    console.log(e);
  }
};

export const generateID = () => Math.round(Math.random() * 10000);
