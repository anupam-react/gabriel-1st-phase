import React from "react";
import "./index.scss";
import { formatTime2, getDateFromISOString, getWeekday } from "../../utiils";
const HistoryDetails = ({ handleOpen , data , isTimeSpent = true , isType = true }) => {
  return (
    <div className="details-container">
      <p className="details-title"  style={{paddingBottom:"30px"}}>Visit History</p>
      <img
        src="./Mask group (2).png"
        alt=""
        className="cross-image2"
        onClick={() => handleOpen(false)}
      />
      <table className="history-table">
        <thead>
          <tr className="text-[#000000B2]">
           {isType && <th>Visit Type</th>}
            <th>Day</th>
            <th>Date</th>
            <th>Timing</th>
           {isTimeSpent && <th className="w-fit">Time Spent</th>}
          </tr>
        </thead>
        <tbody>
          {data?.map((d, i)=>(
          <tr key={i}>
         { isType &&  <td>{d?.type === "app" ? "Online" : "Instore"}</td>}
            <td>{getWeekday(d?.startTime)}</td>
            <td>{getDateFromISOString(d?.startTime)}</td>
            <td>{formatTime2(d?.startTime)}</td>
          { isTimeSpent &&  <td>{Math.round(d?.totalTimeSpent / 60)} Sec</td>}
          </tr>

          ))}
    
        </tbody>
      </table>
      <hr style={{ width: "100%" }} />
        <button className="menuButton4" onClick={() => handleOpen(false)} style={{margin:"20px 0px" , width:"180px"}}>Done</button>
    </div>
  );
};

export default HistoryDetails;
