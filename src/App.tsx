import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { App as CapacitorApp } from "@capacitor/app";

import Payslip from "./containers/payslip";
import Payslips from "./containers/payslips";
import {
  handleNativeSwipeGestureForBackNavigation,
  navigateBack,
} from "./utils/navigation";

function App() {
  CapacitorApp.addListener("backButton", navigateBack);
  handleNativeSwipeGestureForBackNavigation();

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
