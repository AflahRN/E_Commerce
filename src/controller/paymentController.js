import axios from "axios";
import Cookies from "js-cookie";

export const generatePaymentUrl = async (item, orderDetail) => {
  const url = "http://localhost:3000";
  const token = Cookies.get("authToken");
  const accountId = Cookies.get("accountId");

  if (token) {
    const response = await axios.post(
      `${url}/payment`,
      { item: item, accountId: accountId, orderDetail: orderDetail },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    console.log(response);
    if (response.data.redirect_url) {
      Cookies.set("orderId", response.data.order_id, { expires: 1 });
      window.location.href = response.data.redirect_url;
      return response;
    }
  } else {
    console.error("Token is required");
  }
};
