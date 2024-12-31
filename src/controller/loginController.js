import axios from "axios";
import Cookies from "js-cookie";

const url = "http://192.168.1.103:3000";

export const Login = async (loginData, password, navigate) => {
  const requestData = {
    loginData: loginData,
    password: password,
  };
  const response = await axios.post(`${url}/login`, requestData);
  if (response.status == 200) {
    Cookies.set("authToken", response.data.token, { expires: 1 });
    Cookies.set("accountId", response.data.accountId, { expires: 1 });
    console.log(response.data);
    if (response.data.type == "customer") {
      navigate("/dashboard");
    } else {
      navigate("/saler/dashboard");
    }
  }
};

export const Register = async (username, email, passsword, type, navigate) => {
  const requestData = {
    username: username,
    email: email,
    password: passsword,
    type: type,
  };

  const response = await axios.post(`${url}/account`, requestData);
  if (response.status == 200) {
    console.log("Berhasil register");
    navigate("/");
  }
};

export const ChangePassword = async (password, cPassword) => {
  if (password == cPassword) {
    try {
      const response = await axios.patch(`${url}/forgetPassword`, {
        password: password,
      });
      if (response.status == 200) {
        console.log("Berhasil ganti password");
      }
    } catch (error) {
      console.error(error);
    }
  }
};
