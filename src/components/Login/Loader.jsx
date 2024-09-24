import React from "react";

const Loader = () => {
  return (
    <div className="w-full h-[90vh] flex flex-col gap-[30px] justify-center items-center">
      <img src="./ZKZg.gif" alt="" className="w-[100px]" />
      <p className="text-[#0070BC]">Loading your Interface...Please Wait!</p>
    </div>
  );
};

export default Loader;
