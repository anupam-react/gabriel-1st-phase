import React from "react";

const VerifySuccess = () => {
  return (
    <div className="w-full h-[100vh] bg-gray-100 flex flex-col gap-[30px] justify-center items-center">
      <img src="./ecc5ee0f3eea87e05aef4d22ec697a9c.gif" alt="" />
      <p>
        Your Account has been sent for{" "}
        <span className="text-[#0070BC] font-semibold"> Verification!</span>
      </p>
      <p className="text-[#00000099] text-sm">
        Our Executives will review your Account and notify accordingly!
      </p>
    </div>
  );
};

export default VerifySuccess;
