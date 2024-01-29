import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";

import Divider from "../components/divider";
import PayslipInformationCard from "../components/payslipInformationCard";
import mockPayslips from "../data/mockPayslipsData.json";
import { isNewYear } from "../utils/dateUtils";

function Payslips() {
  const navigate = useNavigate();
  const [payslips] = useState(mockPayslips);

  const navigateToPayslipsScreen = (payslipId: string) =>
    navigate(`/payslip/${payslipId}`);

  return (
    <>
      <div className="bg-gray-100 w-full h-14 fixed z-10" />
      <div className="container mx-auto p-4 mb-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {payslips.map((payslip) => (
            <Fragment key={payslip.id}>
              {isNewYear(payslip.toDate) ? (
                <Divider
                  text={new Date(payslip.toDate).getFullYear().toString()}
                />
              ) : null}
              <PayslipInformationCard
                onClick={navigateToPayslipsScreen}
                payslip={payslip}
              />
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
}

export default Payslips;
