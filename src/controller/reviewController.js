import axios from "axios";
import Cookies from "js-cookie";
const url = "https://a2d4-36-66-160-3.ngrok-free.app";

export const getReview = async () => {
  const token = Cookies.get("authToken");

  try {
    const response = await axios.get(`${url}/review`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const sendResponse = async (id, reviewResponse) => {
  const token = Cookies.get("authToken");

  try {
    const response = await axios.patch(
      `${url}/review/response/${id}`,
      {
        reviewResponse: reviewResponse,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.status == 200) {
      console.log(response);
    }
  } catch (error) {
    console.error(error);
  }
};