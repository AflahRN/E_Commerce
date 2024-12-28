import axios from "axios";
import { useNavigate } from "react-router-dom";

const url = "http://192.168.1.103:3000";

export const Login = async (loginData, password, navigate) => {
  const requestData = {
    loginData: loginData,
    password: password,
  };
  const response = await axios.post(`${url}/login`, requestData);
  if (response.status == 200) {
    document.cookie = `authToken=${response.data.token},userId=${response.data.userId}`;
    console.log(response);

    navigate("/dashboard");
  }
};

export const CheckCookie = async () => {
  const response = await axios.get(`${url}/cookie`);
  console.log(response);
};
