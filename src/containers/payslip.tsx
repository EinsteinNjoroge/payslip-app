import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Capacitor } from "@capacitor/core";

import navigateBackIcon from "../assets/nav-back-icon.png";
import PayslipInformationCard from "../components/payslipInformationCard";
import PayslipNotFound from "../components/payslipNotFound";
import mockPayslips from "../data/mockPayslipsData.json";

function Payslip() {
  const navigate = useNavigate();
  const { id } = useParams();
  const payslip = mockPayslips.find((slip) => slip.id === id) || null;

  return (
    <>
      {
        /* Show a back navigation button in IOS */
        Capacitor.getPlatform() === "ios" ? (
          <button
            className="mt-12 ml-2"
            type="button"
            onKeyDown={(e) => e.key === "Enter" && navigate("/")}
            onClick={() => navigate("/")}
          >
            <img src={navigateBackIcon} className="w-6 m-2" alt="Back" />
          </button>
        ) : null
      }

      <div className="container mx-auto p-4 mt-2">
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
    </>
  );
}

export default Payslip;
