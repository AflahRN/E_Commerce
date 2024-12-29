import axios from "axios";
const url = "http://192.168.1.103:3000";

const splitData = document.cookie.split(",");
const token = splitData[0].split("=")[1];
const accountId = splitData[1].split("=")[1];

export const getCart = async () => {
  if (token) {
    const response = await axios.get(`${url}/cart`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 200) {
      return response.data;
    }
  } else {
    console.error("Token is required");
  }
};

export const addCart = async (productId, quantity) => {
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
    }
  }
};

export const deleteCart = async (cartId) => {
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
