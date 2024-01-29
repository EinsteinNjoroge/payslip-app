import { Browser } from "@capacitor/browser";
import { Capacitor } from "@capacitor/core";
import { Directory, Filesystem } from "@capacitor/filesystem";
import html2canvas from "html2canvas";
import JsPDF from "jspdf";

const isWeb = Capacitor.getPlatform() === "web";

export const downloadFile = (fileName: string) => {
  const cardElement: Element | null = document.querySelector("#payslip-info");

  html2canvas(cardElement as HTMLElement).then(async (canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new JsPDF();
    pdf.addImage(imgData, 0, 0, 210, 80);

    if (isWeb) {
      pdf.save(fileName);
    } else {
      const base64Pdf = pdf.output("datauristring");

      if (!(await Filesystem.checkPermissions())) {
        await Filesystem.requestPermissions();
      }

      const file = await Filesystem.writeFile({
        data: base64Pdf,
        directory: Directory.Documents,
        path: fileName,
      });

      await Browser.open({ url: file.uri });
    }
  });
};
