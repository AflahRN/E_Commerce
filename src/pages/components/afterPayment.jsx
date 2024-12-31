import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  cleanCart,
  deleteCart,
  getCart,
} from "../../controller/cartController";

const url = "http://localhost:3000";

export const AfterPayment = () => {
  const navigate = useNavigate();
  useEffect(() => {
    cleanCart().then(() => {
      navigate("/dashboard");
    });
  }, []);
};
