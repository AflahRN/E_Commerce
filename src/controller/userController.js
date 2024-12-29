import axios from "axios";
const url = "http://192.168.1.103:3000";
const splitData = document.cookie.split(",");
const token = splitData[0].split("=")[1];
const accountId = splitData[1].split("=")[1];

export const getUserdata = async () => {
  if (token) {
    const response = await axios.get(`${url}/account/${accountId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status === 200) {
      return response.data;
    }
  } else {
    console.error("Token required");
  }
};
