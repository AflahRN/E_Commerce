import axios from "axios";
import Cookies from "js-cookie";
const url = "http://localhost:3000";

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

export const AddProduct = async (
  productName,
  productDescription,
  productPrice,
  productStock,
  productImage,
  categoryId
) => {
  const token = Cookies.get("authToken");
  const accountId = Cookies.get("accountId");
  try {
    const formData = new FormData();
    formData.append("productName", productName);
    formData.append("productDescription", productDescription);
    formData.append("productPrice", productPrice);
    formData.append("productStock", productStock);
    formData.append("productImage", productImage);
    formData.append("categoryId", categoryId);
    formData.append("accountId", accountId);

    const response = await axios.post(`${url}/product`, formData, {
      "Content-Type": "multipart/form-data",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

export const editProduct = async (
  id,
  productName,
  productDescription,
  productPrice,
  productStock,
  productImage,
  categoryId
) => {
  const token = Cookies.get("authToken");
  const formData = new FormData();
  formData.append("productName", productName);
  formData.append("productDescription", productDescription);
  formData.append("productPrice", productPrice);
  formData.append("productStock", productStock);
  if (productImage) formData.append("productImage", productImage);
  formData.append("categoryId", categoryId);

  try {
    const response = await axios.patch(`${url}/product/${id}`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.error(error);
  }
};

export const DeleteProduct = async (id) => {
  const token = Cookies.get("authToken");
  try {
    const response = await axios.delete(`${url}/product/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status == 200) {
      console.log("Data berhasil dihapus");
    }
  } catch (error) {
    console.error(error);
  }
};
