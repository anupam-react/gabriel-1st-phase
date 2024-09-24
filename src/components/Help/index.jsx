import React from "react";
import { useNavigate } from "react-router-dom";

const Help = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center h-[100vh] w-full">
      <div className="flex justify-center items-center h-[100%] w-full">
        <div className="w-1/3 px-4 bg-white border border-gray-200 rounded shadow-xl sm:p-6 md:p-6 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col items-center mb-10  gap-2">
            <img src="./image 2 (2).svg" alt="" className="w-36 h-18 pb-4" />
            <p className="font-bold text-2xl">Need Help?</p>
            <p className="text-gray-500 text-center">
              Please Select your topic in which you might require our
              assistance!
            </p>
          </div>
          <form className="space-y-4" action="#">
            <>
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => navigate("/forgot")}
              >
                <p className="text-gray-500">Forgot Password</p>
                <img src="./Arrow 2.svg" alt="" className="w-5 h-5 " />
              </div>
              <hr />
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => navigate("")}
              >
                <p className="text-gray-500">Change User ID</p>
                <img
                  src="./Arrow 2.svg"
                  alt=""
                  className="w-5 h-5 cursor-pointer"
                />
              </div>
              <hr />
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => navigate("")}
              >
                <p className="text-gray-500">Update my Email Address</p>
                <img
                  src="./Arrow 2.svg"
                  alt=""
                  className="w-5 h-5 cursor-pointer"
                />
              </div>
              <hr />
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => navigate("")}
              >
                <p className="text-gray-500">Other</p>
                <img
                  src="./Arrow 2.svg"
                  alt=""
                  className="w-5 h-5 cursor-pointer"
                />
              </div>
              <hr />
            </>
          </form>
          <div
            className="flex items-center justify-center gap-2 cursor-pointer mt-6"
            onClick={() => navigate("/login")}
          >
            <img src="./Mask group (4).svg" alt="" className="w-6 h-6" />
            <p className="text-sm cancel underline">Go Back</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
