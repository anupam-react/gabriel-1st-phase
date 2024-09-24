import React from "react";
import "./index.scss";

const Searchbar = ({ setShowSearch }) => {
  return (
    <div
      className=" bg-white  w-[60vw] p-4 rounded-md absolute right-0 z-40"
      onClick={() => setShowSearch(false)}
    >
      <div className="flex items-center px-6 bg-white w-full rounded-lg h-12 map-input">
        <img src="./image 2 (3).svg" alt="search" className="w-6 h-6" />
        <input
          type="text"
          className="search  w-full"
          placeholder="Search Brand"
        />
      </div>
      <div className="bg-white my-4 flex flex-col gap-3 h-[100px] overflow-auto text-[#1E1E1E99] font-semibold">
        <div className="flex gap-4 items-center ">
          <img src="./Ellipse 13.png" alt="" />
          <p>Lorem Ipsum</p>
        </div>
        <div className="flex gap-4 items-center">
          <img src="./Ellipse 13.png" alt="" />
          <p>Lorem Ipsum</p>
        </div>
        <div className="flex gap-4 items-center">
          <img src="./Ellipse 13.png" alt="" />
          <p>Lorem Ipsum</p>
        </div>
        <div className="flex gap-4 items-center">
          <img src="./Ellipse 13.png" alt="" />
          <p>Lorem Ipsum</p>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
