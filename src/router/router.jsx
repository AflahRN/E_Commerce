import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "../pages/dashboard";
import { Login } from "../pages/login/login";
import { Register } from "../pages/login/register";
import { Product } from "../pages/product";
import { VerificationCode } from "../pages/login/verification_code";
import { ForgotPassword } from "../pages/login/forgot_password";
import { Store } from "../pages/store";
import { Error404 } from "../pages/Error404";
import { useEffect, useState } from "react";

export const Router = () => {
  const splitData = document.cookie;
  const [token, setToken] = useState();

  useEffect(() => {
    setToken(splitData.split(",")[0].split("=")[1]);
  }, [splitData]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        {token ? (
          <>
            <Route path="/register" element={<Register />} />
            <Route path="/verification" element={<VerificationCode />} />
            <Route path="/forgot" element={<ForgotPassword />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/store" element={<Store />} />
          </>
        ) : (
          <></>
        )}
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
