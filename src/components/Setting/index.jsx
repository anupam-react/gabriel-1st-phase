import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";
const Setting = () => {
  const navigate = useNavigate();
  return (
    <div>
      <p className="font-semibold text-xl py-6">Settings</p>
      <div className="settingConatiner">
        <div className="settingMain cursor-pointer" onClick={() => navigate("/setting/notifications")}>
          <div className="flex gap-4 items-center ">
            <img src="./image 68.png" alt="" />
            <p>Notifications & Alerts</p>
          </div>
          <div>
            <img
              src="./Arrow 8.png"
              alt=""
         
              
            />
          </div>
        </div>
        <div className="settingMain cursor-pointer"  onClick={() => navigate("/setting/report")}>
          <div className="flex gap-4 items-center ">
            <img src="./image 77.png" alt="" />
            <p>Report Settings</p>
          </div>
          <div>
            <img
              src="./Arrow 8.png"
              alt=""
      
            />
          </div>
        </div>
        <div className="settingMain cursor-pointer" onClick={() => navigate("/setting/communication")}>
          <div className="flex gap-4 items-center ">
            <img src="./image 68.png" alt="" />
            <p>Communications</p>
          </div>
          <div>
            <img src="./Arrow 8.png" alt="" className="cursor-pointer" />
          </div>
        </div>
     
      </div>
    </div>
  );
};

export default Setting;
