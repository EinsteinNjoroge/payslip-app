import React from "react";
import { useParams } from "react-router-dom";

import PayslipInformationCard from "../components/payslipInformationCard";
import PayslipNotFound from "../components/payslipNotFound";
import mockPayslips from "../data/mockPayslipsData.json";

function Payslip() {
  const { id } = useParams();
  const payslip = mockPayslips.find((slip) => slip.id === id) || null;

  return (
    <div className="container mx-auto p-4">
      {payslip ? (
        <PayslipInformationCard
          showDownloadBtn
          showExtraInfo
          payslip={payslip}
        />
      ) : (
        <PayslipNotFound />
      )}
    </div>
  );
}

export default Payslip;
