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
      

      </Routes>
    </Router>
  );
}
