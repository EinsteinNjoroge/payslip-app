import { Capacitor } from "@capacitor/core";
import { Directory, Filesystem } from "@capacitor/filesystem";
import { FileOpener } from "@capacitor-community/file-opener";
import html2canvas from "html2canvas";
import JsPDF from "jspdf";

import { generateID, showLocalNotification } from "./localNotificationUtils";
import {
  hasFileAccessPermissions,
  hasNotificationDisplayPermissions,
} from "./permissionsUtils";

const isWeb: boolean = Capacitor.getPlatform() === "web";

const openFile = async (fileUri: string): Promise<void> => {
  await FileOpener.open({
    contentType: "application/pdf",
    filePath: fileUri,
  });
};

export const downloadFile = async (fileName: string): Promise<void> => {
  // Convert HTML element to canvas then print it on a pdf
  const cardElement: Element | null = document.querySelector("#payslip-info");
  const canvas = await html2canvas(cardElement as HTMLElement);
  const imgData = canvas.toDataURL("image/png");
  const pdf = new JsPDF();
  pdf.addImage(imgData, 0, 0, 210, isWeb ? 40 : 90);

  // Download the PDF
  if (isWeb) {
    pdf.save(fileName);
  } else {
    if (!(await hasFileAccessPermissions())) return;

    // Save PDF file to Device
    const base64Pdf = pdf.output("datauristring");
    const file = await Filesystem.writeFile({
      data: base64Pdf,
      directory: Directory.Data,
      path: fileName,
    });

    if (!(await hasNotificationDisplayPermissions())) {
      await openFile(file.uri);
      return;
    }

    const notifications = [
      {
        body: fileName,
        id: generateID(),
        largeBody: `Payslip downloaded to your "Documents" folder`,
        summaryText: 'Open file in "Documents"',
        title: "Payslip downloaded",
      },
    ];

    const onNotificationClick = async () => {
      if (file?.uri) {
        await openFile(file.uri);
      }
    };

    await showLocalNotification(notifications, onNotificationClick);
  }
};
