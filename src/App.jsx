import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Welcome from "./Pages/Welcome";
import Register from "./Pages/Auth/Register";
import Login from "./Pages/Auth/Login";
import ForgotPassword from "./Pages/Auth/ForgotPassword";
import PasswordResetRequest from "./Pages/Auth/PasswordResetRequest";
import ResetPassword from "./Pages/Auth/ResetPassword";
import ConfirmPassword from "./Pages/Auth/ConfirmPassword";
import VerifyEmail from "./Pages/Auth/VerifyEmail";
import Dashboard from "./Pages/Dashboard";
import SecuritySettings from "./Pages/Profile/SecuritySettings";
import PasswordVerified from "./Pages/Profile/PasswordVerified";
import Edit from "./Pages/Profile/Edit";
import SalesReport from "./Pages/Reports/SalesReport";
import GenerateSalesReport from "./Pages/Reports/GenerateSalesReport";
import GenerateCapitalReport from "./Pages/Reports/GenerateCapitalReport";
import GenerateSalesReportDaily from "./Pages/SalesReports/GenerateSalesReportDaily";
import GenerateSalesReportWeekly from "./Pages/SalesReports/GenerateSalesReportWeekly";
import GenerateSalesReportMonthly from "./Pages/SalesReports/GenerateSalesReportMonthly";
import GenerateSalesReportCustom from "./Pages/SalesReports/GenerateSalesReportCustom";
import GenerateCapitalReportDaily from "./Pages/CapitalReports/GenerateCapitalReportDaily";
import GenerateCapitalReportWeekly from "./Pages/CapitalReports/GenerateCapitalReportWeekly";
import GenerateCapitalReportMonthly from "./Pages/CapitalReports/GenerateCapitalReportMonthly";
import GenerateCapitalReportCustom from "./Pages/CapitalReports/GenerateCapitalReportCustom";
import TransactionRecSection from "./Pages/TransactionRecSection";
import MakeTransaction from "./Pages/QA/MakeTransaction";
import TransactionHistory from "./Pages/QA/TransactionHistory";
import AddItem from "./Pages/AddItem";
import FullTransInfo from "./Pages/FullTransInfo";
import Inventory1 from "./Pages/Reports/Inventory1";
import EditProduct from "./Pages/QA/EditProduct";
import AddProduct from "./Pages/QA/AddProduct";


export default function App() {
  return (
    <Router>
      <Routes>

        {/* Home */}
        <Route path="/" element={<Welcome />} />

        {/* Additional Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/passwordresetrequest" element={<PasswordResetRequest />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/confirmpassword" element={<ConfirmPassword />} />
        <Route path="/verifyemail" element={<VerifyEmail />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/securitysettings" element={<SecuritySettings />} />
        <Route path="/passwordverified" element={<PasswordVerified />} />
        <Route path="/profile" element={<Edit />} />
        <Route path="/sales-report" element={<SalesReport />} />
        <Route path="/generate-sales-report" element={<GenerateSalesReport />} />
        <Route path="/generate-capital-report" element={<GenerateCapitalReport />} />
        <Route path="/generate-sales-report/daily" element={<GenerateSalesReportDaily />} />
        <Route path="/generate-sales-report/weekly" element={<GenerateSalesReportWeekly />} />
        <Route path="/generate-sales-report/monthly" element={<GenerateSalesReportMonthly />} />
        <Route path="/generate-sales-report/custom" element={<GenerateSalesReportCustom />} />
        <Route path="/generate-capital-report/daily" element={<GenerateCapitalReportDaily />} />
        <Route path="/generate-capital-report/weekly" element={<GenerateCapitalReportWeekly />} />
        <Route path="/generate-capital-report/monthly" element={<GenerateCapitalReportMonthly />} />
        <Route path="/generate-capital-report/custom" element={<GenerateCapitalReportCustom />} />
        <Route path="/generate-capital-report/custom" element={<GenerateCapitalReportCustom />} />
        <Route path="/transaction-rec-section" element={<TransactionRecSection/>} />
        <Route path="/make-transaction" element={<MakeTransaction/>} />
        <Route path="/transaction-history" element={<TransactionHistory/>} />
        <Route path="/additem" element={<AddItem/>} />
        <Route path="/full-trans-info" element={<FullTransInfo/>} />
        <Route path="/inventory1" element={<Inventory1/>} />
        <Route path="/add-product" element={<AddProduct/>} />
        <Route path="/edit-product" element={<EditProduct/>} />
    
        
      </Routes>
    </Router>
  );
}
