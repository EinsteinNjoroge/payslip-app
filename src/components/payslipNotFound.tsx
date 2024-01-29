import React from "react";
import { useNavigate } from "react-router-dom";

function PayslipNotFound() {
  const navigate = useNavigate();

  return (
    <>
      <p className="font-medium">
        Invalid payslip ID, make sure you have the right payslip ID
      </p>
      <button
        tabIndex={0}
        type="button"
        className="text-blue-600 hover:text-blue-500 cursor-pointer hover:underline"
        onClick={() => navigate("/")}
      >
        View all Payslips
      </button>
    </>
  );
}

export default PayslipNotFound;
