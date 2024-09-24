import React, { useState } from "react";
import './index.css'
import Profile from "./Profile";
import { Link } from "react-router-dom";
const Navbar = ({data}) => {
  const [open, setOpen] = useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  
  return (
    <div className="flex justify-between items-center shadow-xl z-40 h-20 px-6">
      <img src="./image 2 (2).svg" alt="" className="w-36 h-18 pb-4" />
      <div className="flex gap-10 mr-4">    
        <div
          className="flex items-center px-6 h-12"
          style={{
            backgroundColor: "#EEEEEE",
            width: "35rem",
            borderRadius: "12px",
            color: "#8BA3CB",
          }}
        >
          <img src="./image 2 (3).svg" alt="search" className="w-6 h-6" />
          <input
            type="text"
            className="border-none bg-transparent outline-none focus:ring-0 focus:shadow-none focus:border-none"
            placeholder="Search here"
          />
        </div>
        <div>
          <Link to="notification">
          <img src="./image 13.svg" alt="Notification" className="h-12" />
          </Link>
        </div>
        <div className="flex gap-2 items-center cursor-pointer"  onClick={openDrawer}>
        <img
          src={data?.image}
          alt="profile"
          className="rounded-full w-14 h-14"
          />
          <div>
          <p className="font-semibold">{data?.fullName || data?.firstName + " " + data?.lastName}</p>
          <p className="view">VIEW MORE {`>`}</p>

          </div>
        </div>
         <Profile closeDrawer={closeDrawer} open={open} data={data}/>
      </div>
    </div>
  );
};

export default Navbar;
