import axios from "axios";
import Cookies from "js-cookie";
const url = "http://192.168.1.103:3000";

export const getProduct = async () => {
  const token = Cookies.get("authToken");
  const response = await axios.get(`${url}/product`, {
    responseType: "json",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (response.status == 200) {
    return response.data;
  }
};

export const getProductById = async (id) => {
  const token = Cookies.get("authToken");
  try {
    const response = await axios.get(`${url}/product/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status == 200) {
      return response.data;
    }
  } catch (error) {
    console.error(error);
  }
};
