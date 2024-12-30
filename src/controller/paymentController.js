import axios from "axios";
import Cookies from "js-cookie";
import { redirect } from "react-router-dom";

export const generatePaymentUrl = async (item, navigate) => {
  const url = "http://192.168.1.103:3000";
  const token = Cookies.get("authToken");
  if (token) {
    const response = await axios.post(
      `${url}/payment`,
      { item: item },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    // console.log(response);
    if (response.status === 200) {
      window.location.href = response.data.redirect_url;
      return response;
    }
  } else {
    console.error("Token is required");
  }
};
