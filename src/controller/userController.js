import axios from "axios";

export const getUserdata = async () => {
  const url = "http://192.168.1.103:3000";
  const splitData = document.cookie.split(",");
  const token = splitData[0].split("=")[1];
  const accountId = splitData[1].split("=")[1];
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
