import axios from "axios";

const url = "http://192.168.1.103:3000";

export const Login = async (loginData, password, navigate) => {
  const requestData = {
    loginData: loginData,
    password: password,
  };
  const response = await axios.post(`${url}/login`, requestData);
  if (response.status == 200) {
    document.cookie = `authToken=${response.data.token},userId=${response.data.userId}`;
    console.log(response.data);

    if (response.data.type == "customer") {
      navigate("/dashboard");
    } else {
      navigate("/");
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
