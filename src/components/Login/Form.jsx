import { Link, useNavigate } from "react-router-dom";
import "./index.css";
import { useState } from "react";
import Loader from "./Loader";
import useLogin from "../../hooks/useLogin";
const Form = () => {
  const {  
    email,
    setEmail,
    password,
    setPassword,
    isLoading,
    handleLogin} = useLogin()  
  
  const navigate = useNavigate();

  return (
    <>
      {!isLoading ? (
        <div className="flex justify-center items-center h-[100%] w-full">
          <div className="w-2/6 px-4 bg-white border border-gray-200 rounded shadow-xl sm:p-6 md:p-6 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col items-center mb-10  gap-2">
              <img src="./F5FEEB4E-8351-4AA1-964B-EEFC6865EEC0.png" alt="" className="w-36 h-18 pb-4" />
              <p className="font-bold text-2xl">Welcome Back!</p>
              <p className="text-gray-500">
                Please Enter you credentials to Sign In
              </p>
            </div>
            <form className="space-y-4" action="#">
              <>
                <div className="">
                  <div className="relative">
                    <img
                      src="./Mask group.svg"
                      alt=""
                      className="w-5 h-6 absolute top-2 left-2"
                    />
                    <input
                      type="text"
                      name="email"
                      id="email"
                      style={{ color: "#0070BC" }}
                      placeholder="USER ID"
                      className="rounded shadow-md border-none text-sm block w-full pl-10 p-2.5 "
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div className="relative">
                  <img
                    src="./Mask group (1).svg"
                    alt=""
                    className="w-5 h-6 absolute top-2 left-2"
                  />
                  <input
                    type="password"
                    name="password"
                    id="password"
                    style={{ color: "#0070BC" }}
                    placeholder="PASSWORD"
                    className="rounded shadow-md border-none text-sm block  w-full pl-10 p-2.5 "
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </>
              <div className="flex justify-center pt-6">
                <button className="sign-button" onClick={handleLogin}>
                  SIGN IN
                </button>
              </div>
            </form>
            <div className="flex justify-between mt-10 ">
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => navigate("/help")}
              >
                <img src="./Mask group (2).svg" alt="" className="w-6 h-6" />
                <p className="text-sm">Need Help?</p>
              </div>
              <div className="line"></div>
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => navigate("/register")}
              >
                <img src="./Mask group (3).svg" alt="" className="w-6 h-6" />
                <p className="text-sm">Create New Account</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Form;
