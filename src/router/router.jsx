import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Login } from "../pages/login/login";
import { Register } from "../pages/login/register";
import { VerificationCode } from "../pages/login/verification_code";
import { ForgotPassword } from "../pages/login/forgot_password";
import { Dashboard } from "../pages/costumer/dashboard";
import { Product } from "../pages/costumer/product";
import { Store } from "../pages/costumer/store";
import { Error404 } from "../pages/error/Error404";
import { DashboardSaler } from "../pages/saler/dashboardSaler";
import { ReviewSaler } from "../pages/saler/reviewSaler";
import { FormProduct } from "../pages/saler/formProduct";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verification" element={<VerificationCode />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />

        {/* Customer */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/store" element={<Store />} />

        {/* Saler */}
        <Route path="/saler/dashboard" element={<DashboardSaler />} />
        <Route path="/saler/review" element={<ReviewSaler />} />
        <Route path="/saler/add" element={<FormProduct />} />
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
