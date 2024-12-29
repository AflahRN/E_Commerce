import axios from "axios";
const url = "http://192.168.1.103:3000";

export const getCategory = async () => {
  const splitData = document.cookie.split(",");
  const token = splitData[0].split("=")[1];

  if (token) {
    const response = await axios.get(`${url}/category`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status === 200) {
      return response.data;
    }
  }
};
