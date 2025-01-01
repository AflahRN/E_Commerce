import axios from "axios";
import Cookies from "js-cookie";

export const generatePaymentUrl = async (item) => {
  const url = "http://localhost:3000";
  const token = Cookies.get("authToken");
  const accountId = Cookies.get("accountId");

  if (token) {
    const response = await axios.post(
      `${url}/payment`,
      { item: item, accountId: accountId },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    console.log(response);
    if (response.data.redirect_url) {
      window.location.href = response.data.redirect_url;
      return response;
    }
  } else {
    console.error("Token is required");
  }
};
