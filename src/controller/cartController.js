import axios from "axios";
const url = "http://192.168.1.103:3000";

export const getCart = async () => {
  const splitData = document.cookie.split(",");
  const token = splitData[0].split("=")[1];
  const response = await axios.get(`${url}/cart`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(response);
  if (response.status === 200) {
    return response.data;
  }
};

export const addCart = async (productId, quantity) => {
  const splitData = document.cookie.split(",");
  const token = splitData[0].split("=")[1];
  const accountId = splitData[1].split("=")[1];
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
    console.log(response);
    if (response.status === 200) {
      return response.data;
    } else {
      console.error("Error adding product to cart");
    }
  }
};

export const deleteCart = async (cartId) => {
  const splitData = document.cookie.split(",");
  const token = splitData[0].split("=")[1];
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
