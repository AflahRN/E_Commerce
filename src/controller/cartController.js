import axios from "axios";
import Cookies from "js-cookie";
const url = "http://192.168.1.103:3000";

export const getCart = async () => {
  const token = Cookies.get("authToken");
  const response = await axios.get(`${url}/cart`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (response.status === 200) {
    return response.data;
  }
};

export const addCart = async (productId, quantity) => {
  const token = Cookies.get("authToken");
  const accountId = Cookies.get("accountId");
  if (token) {
    const response = await axios.post(
      `${url}/cart`,
      {
        productId: productId,
        quantity: quantity,
        accountId: accountId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.status === 200) {
      return response.data;
    } else {
      console.error("Error adding product to cart");
    }
  }
};

export const deleteCart = async (cartId) => {
  const token = Cookies.get("authToken");
  if (token) {
    const response = await axios.delete(`${url}/cart/${cartId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status == 200) {
      return response.data;
    }
  }
};
