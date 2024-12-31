import axios from "axios";
import Cookies from "js-cookie";
const url = "https://a2d4-36-66-160-3.ngrok-free.app";

export const getUserdata = async () => {
  const token = Cookies.get("authToken");
  const accountId = Cookies.get("accountId");
  if (token) {
    const response = await axios.get(`${url}/account/${accountId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status === 200) {
      return response.data;
    }
  } else {
    console.error("Token required");
  }
};