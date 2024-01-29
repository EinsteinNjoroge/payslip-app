import React from "react";

import downloadIcon from "../assets/download-icon.png";
import pdfFileIcon from "../assets/pdf-file.png";
import { PayslipData } from "../types/types";
import { formatDate, formatMonthAndYear } from "../utils/dateUtils";
import { downloadFile } from "../utils/downloadUtils";

interface PayslipInformationCardProps {
  payslip: PayslipData;
  onClick?: (payslipId: string) => void;
  showExtraInfo?: boolean;
  showDownloadBtn?: boolean;
}

const PayslipInformationCard: React.FC<PayslipInformationCardProps> = ({
  onClick = () => {},
  payslip,
  showExtraInfo,
  showDownloadBtn,
}) => {
  return (
    <div
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick(payslip.id)}
      id="payslip-info"
      className="bg-white p-4 pt-2 rounded-lg drop-shadow-sm border border-gray-100"
      onClick={() => onClick(payslip.id)}
    >
      <p className="font-medium pb-4">{formatMonthAndYear(payslip.toDate)}</p>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          {showExtraInfo ? (
            <>
              <h2 className="text-xs font-medium">ID</h2>
              <p className="text-xs text-gray-500">{payslip.id}</p>

              <h2 className="pt-4 text-xs font-medium">Filename</h2>
              <p className="text-xs text-gray-500">{`${payslip.file}`}</p>
            </>
          ) : null}
          <h2 className="pt-4 text-xs font-medium">From</h2>
          <p className="text-xs text-gray-500">
            {formatDate(payslip.fromDate)}
          </p>

          <h2 className="pt-4 text-xs font-medium">To</h2>
          <p className="text-xs text-gray-500">{formatDate(payslip.toDate)}</p>
        </div>

        <div className="flex flex-col items-center">
          <img src={pdfFileIcon} className="w-20" alt="pdf-icon" />
          {showDownloadBtn ? (
            <button
              type="button"
              onClick={() => downloadFile(payslip.file)}
              className="w-32 flex flex-row mt-4 bg-blue-600 hover:bg-blue-800 active:bg-blue-400 text-white font-medium py-2 px-3 rounded"
            >
              <img src={downloadIcon} className="w-3 m-1 mr-2" alt="" />
              <p className="text-sm">Download</p>
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default PayslipInformationCard;
