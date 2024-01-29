import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { App as CapacitorApp } from "@capacitor/app";

import Payslip from "./containers/payslip";
import Payslips from "./containers/payslips";

function App() {
  CapacitorApp.addListener("backButton", () => {
    console.log("Back swipe detected!");

    if (window.history.length > 1) {
      window.history.back();
    } else {
      // if (confirm('Are you sure you want to exit?')) {
      CapacitorApp.exitApp();
      // }
    }
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Payslips />} />
        <Route path="/payslip/:id" element={<Payslip />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
