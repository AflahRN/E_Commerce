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

export const updateStatusTransaction = async (id, status) => {
  const token = Cookies.get("authToken");

  try {
    const response = await axios.patch(
      `${url}/transaction/status`,
      {
        id: id,
        status: status,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response;
  } catch (error) {
    console.error(error);
  }
};
