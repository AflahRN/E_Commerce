import axios from "axios";
import { useParams } from "react-router-dom";
const url = "http://192.168.1.103:3000";

export const getProduct = async () => {
  const splitData = document.cookie.split(",");
  const token = splitData[0].split("=")[1];
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
  const splitData = document.cookie.split(",");
  const token = splitData[0].split("=")[1];
  try {
    const response = await axios.get(`${url}/product/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response);
    if (response.status == 200) {
      return response.data;
    }
  } catch (error) {
    console.error(error);
  }
};
