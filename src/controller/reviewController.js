import axios from "axios";
import Cookies from "js-cookie";
const url = "http://localhost:3000";

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

export const removeResponse = async (id) => {
  const token = Cookies.get("authToken");

  try {
    const response = await axios.patch(
      `${url}/review/response/${id}`,
      {
        reviewResponse: "",
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

export const addReview = async (reviewText, reviewSkor, productId) => {
  const token = Cookies.get("authToken");
  const accountId = Cookies.get("accountId");

  try {
    const response = await axios.post(
      `${url}/review`,
      {
        reviewText: reviewText,
        reviewSkor: reviewSkor,
        productId: productId,
        accountId: accountId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status == 200) {
      console.log("Berhasil kirim review");
    }
  } catch (error) {
    console.error(error);
  }
};
