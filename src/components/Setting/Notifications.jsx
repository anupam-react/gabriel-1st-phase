import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";
import useSetting from "../../hooks/useSetting";
const Notifications = () => {
  const {    
     receiveNotificationSms , setReceiveNotificationSms,
    receiveNotificationEmail , setReceiveNotificationEmail,
    handleUpdateNotification
  } = useSetting()
  const navigate = useNavigate();
  return (
    <div>
     
      <div className="flex justify-between items-center mb-6">
      <p className="text-[#0070BC] font-semibold">
        <span className="cursor-pointer" onClick={() => navigate("/setting")}>
          Settings {">"}{" "}
        </span>
        <span className="text-[#000000] text-lg">Notifications & Alerts</span>{" "}
      </p>
        <button className="back" onClick={() => navigate("/setting")}>
          <img src="../back.png" alt="" />
          Back
        </button>
      </div>
      <div className="notificationConatiner">
        <div>
          <p className="text-[#0070BC] text-[20px] font-semibold pb-[20px]">
            NOTIFICATION PREFERENCES
          </p>
          <p className="text-[#000000B2] font-[500] text-[24px] pb-[16px]">
          Tick to select how you want to receive all Moneychat notifications
          </p>
      
        </div>
        <div className="text-black ">
          <p className="text-[#0070BC] text-[20px] font-semibold pb-[20px]">
          RECEIVE NOTIFICATIONS ON
          </p>
          <div className="mb-[10px] ">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="yes" onChange={()=> setReceiveNotificationSms(!receiveNotificationSms)} checked={receiveNotificationSms} />
            <label for="vehicle1" className="pl-[30px] text-[20px] font-[500]">
              SMS
            </label>
          </div>
          <div>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="yes"  onChange={()=> setReceiveNotificationEmail(!receiveNotificationEmail)} checked={receiveNotificationEmail} />
            <label for="vehicle1" className="pl-[30px] text-[20px] font-[500]">
              Email
            </label>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            className="back2 text-center"
            onClick={() =>{
              handleUpdateNotification()
               navigate("/setting")
              }}
          >
            SAVE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
