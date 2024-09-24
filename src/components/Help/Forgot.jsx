import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LinkSuccess from "./LinkSuccess";
import useRegister from "../../hooks/useRegister";

const Forgot = () => {
 const {isSuccess,   email,
  setEmail, handleForgetPassword } = useRegister()
  const navigate = useNavigate();
 
  return (
    <>
      {!isSuccess ? (
        <div className="flex justify-center items-center h-[100vh] w-full">
          <div className="flex justify-center items-center h-[100%] w-full">
            <div className="w-1/3 px-4 bg-white border border-gray-200 rounded shadow-xl sm:p-6 md:p-6 dark:bg-gray-800 dark:border-gray-700">
              <div className="flex flex-col items-center mb-10  gap-2">
                <img
                  src="./image 2 (2).svg"
                  alt=""
                  className="w-36 h-18 pb-4"
                />
                <p className="font-bold text-2xl">Forgot Password</p>
                <p className="text-gray-500 text-center">
                  Please Enter your User ID here & we’ll email you a link to
                  reset your password!
                </p>
              </div>
              <div className="relative">
                <img
                  src="./Mask group.svg"
                  alt=""
                  className="w-5 h-6 absolute top-2 left-4"
                />
                <input
                  type="text"
                  name="email"
                  id="email"
                  style={{ color: "#0070BC" }}
                  placeholder="USER ID"
                  className="rounded shadow-md border-none text-sm block w-full pl-14 p-2.5 "
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex justify-center pt-6">
                <button className="sign-button" onClick={handleForgetPassword}>
                  SEND LINK
                </button>
              </div>
              <p
                className="text-center underline py-6 cursor-pointer"
                style={{ color: "#0070BC" }}
              >
                Didn’t received any link?
              </p>
              <div
                className="flex items-center justify-center gap-2 cursor-pointer mt-6"
                onClick={() => navigate("/help")}
              >
                <img src="./Mask group (4).svg" alt="" className="w-6 h-6" />
                <p className="text-sm cancel underline">Go Back</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <LinkSuccess />
      )}
    </>
  );
};

export default Forgot;
