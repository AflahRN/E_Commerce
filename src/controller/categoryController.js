import axios from "axios";
import Cookies from "js-cookie";
const url = "http://192.168.1.103:3000";

export const getCategory = async () => {
  const token = Cookies.get("authToken");

  if (token) {
    const response = await axios.get(`${url}/category`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status === 200) {
      return response.data;
    }
  }
};
