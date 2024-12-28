import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "../pages/dashboard";
import { Login } from "../pages/login/login";
import { Register } from "../pages/login/register";
import { VerificationCode } from "../pages/login/verification_code";
import { ForgotPassword } from "../pages/login/forgot_password";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verification" element={<VerificationCode />} />
        <Route path="/forgot" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
};