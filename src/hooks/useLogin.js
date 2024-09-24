import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { errorToast, successToast } from "../components/Toast";


const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);


  const navigate = useNavigate();


  const handleLogin = async (event) => {
    event.preventDefault();
    if (!email || !password) {
      return errorToast("Fill all the fields");
    }

    const formData = {
      email,
      password,
    };
    const headers = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await axios.post(
        "https://money-chat.com/api/api/v1/brandLoyalty/signin",
        formData,
        headers
      );
      successToast("LogIn Successfully");
      sessionStorage.setItem("token", response?.data?.accessToken);
      setIsLoading(true);
      setTimeout(() => {
        navigate("/transaction");
      }, 3000);
      console.log(response?.data?.token);
    } catch (error) {
      console.log(error);
      errorToast("Wrong email or password");
      return error;
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    isLoading,
    handleLogin,
  };
};

export default useLogin;
