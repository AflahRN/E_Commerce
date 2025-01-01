import axios from "axios";
import Cookies from "js-cookie";
const url = "http://localhost:3000";

export const getTransaction = async () => {
  const token = Cookies.get("authToken");

  try {
    const response = await axios.get(`${url}/transaction`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
};
