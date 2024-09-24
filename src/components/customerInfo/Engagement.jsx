import React, { useEffect, useState } from "react";
import InfoHeader from "./InfoHeader";
import "./index.scss";
import { DialogDefault } from "../common/DilogBox";
import HistoryDetails from "./HistoryDetails";
import { fetchApiData, formatTime2, getDateFromISOString } from "../../utiils";

const Engagement = ({ handleOpen, onClose, data }) => {
  const [openTransaction, setOpenTransaction] = useState(false);
  const [allMetrics, setAllMetrics] = useState();
  const [storeVisit, setStoreVisit] = useState();
  const [appVisit, setAppVisit] = useState();
  const [isTimeSpent, setIsTimeSpent] = useState();

  console.log(storeVisit);

  const getAllEngagementMetrics = async () => {
    const response = await fetchApiData(
      `https://money-chat.com/api/api/v1/brandLoyalty/getAllEngagementMetrics/ByUserId/${data?._id}`
    );
    console.log(appVisit);
    setAllMetrics(response?.data);
  };
  const getStoreVisitFrequency = async () => {
    const response = await fetchApiData(
      `https://money-chat.com/api/api/v1/brandLoyalty/getAllVisitFrequency/ByUserId/${data?._id}?type=store`
    );
    console.log(response);
    setStoreVisit(response?.data);
  };
  const getAppVisitFrequency = async () => {
    const response = await fetchApiData(
      `https://money-chat.com/api/api/v1/brandLoyalty/getAllVisitFrequency/ByUserId/${data?._id}?type=app`
    );
    console.log(response);
    setAppVisit(response?.data);
  };


  function groupByOutletAndSortVisits(data) {
    const groupedData = {};

    data?.forEach(entry => {
        const outletId = entry?.outletId._id;
        if (!groupedData[outletId]) {
            groupedData[outletId] = {
                outletId: entry.outletId,
                visits: []
            };
        }

        groupedData[outletId].visits.push({
            startTime: entry.startTime,
            endTime: entry.endTime,
            totalTimeSpent: entry.totalTimeSpent,
            type: entry.type,
            brandId: entry?.brandId
        });
    });

    // Sort visits by startTime
    Object.keys(groupedData).forEach(outletId => {
        groupedData[outletId].visits.sort((a, b) => new Date(a.startTime) - new Date(b.startTime));
    });

    // Convert groupedData object to an array
    return Object.values(groupedData);
}

const newStoreData = groupByOutletAndSortVisits(storeVisit)

console.log(newStoreData)

  // const getAverageVisitFrequency = async ()=>{
  //   const response = await fetchApiData(`https://money-chat.com/api/api/v1/brandLoyalty/getAverageVisitFrequency/ByUserId/${data?._id}`)
  //   console.log(response)
  //   // setAllMetrics(response?.data)
  // }

  useEffect(() => {
    getAllEngagementMetrics();
    getStoreVisitFrequency();
    getAppVisitFrequency();
    // getAverageVisitFrequency()
  }, []);
  return (
    <div className="info-container">
      <div className="gift-main">
        <p className="title">Customer Engagement Metrics </p>
        <img
          src="./Mask group (2).png"
          alt=""
          className="cross-image"
          onClick={() => handleOpen(false)}
        />
      </div>
      <hr className="hr2" />
      <InfoHeader onClose={onClose} data={data} />
      <div className="engagement-card">
        <div className="other">
          <p style={{ color: "#000000B2", fontWeight: 600 }}>
            Purchase Frequency/Weekly
          </p>
          <div className="other-footer">
            <img src="./image 701.png" alt="" />
            <p style={{ color: "black", fontWeight: 600, fontSize: "24px" }}>
              {allMetrics?.weekly}
            </p>
          </div>
        </div>
        <div className="other">
          <p style={{ color: "#000000B2", fontWeight: 600 }}>
            Purchase Frequency/Monthly
          </p>
          <div className="other-footer">
            <img src="./image 701.png" alt="" />
            <p style={{ color: "black", fontWeight: 600, fontSize: "24px" }}>
              {allMetrics?.monthly}
            </p>
          </div>
        </div>
        <div className="other">
          <p style={{ color: "#000000B2", fontWeight: 600 }}>
            Average Time Spent
          </p>
          <div className="other-footer">
            <img src="./image 701 (2).png" alt="" />
            <p style={{ color: "black", fontWeight: 600, fontSize: "24px" }}>
              {allMetrics?.averagetimeSpend}
            </p>
          </div>
        </div>
      </div>
      <div
        className="cursor-pointer"
        style={{ paddingTop: "30px", paddingBottom: "20px" }}
        onClick={() => handleOpen(false)}
      >
        <p
          style={{
            color: "#0070BC",
            fontWeight: 600,
            textTransform: "uppercase",
          }}
        >
          Customer Engagement Metrics{" "}
        </p>
        <hr className="hr3" style={{ width: "300px" }} />
      </div>
      <table className="table2">
        <thead>
          <tr>
            <th>Visit Frequency (Online)</th>
            <th>Visit Frequency (Instore)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="">
                <div
                  className=""
                  style={{ color: "#121212B2", paddingTop: "20px" }}
               
                >
                  <span
                    style={{ color: "#0070BC", textDecoration: "underline" }}
                    className="cursor-pointer"
                    onMouseOver={() => { 
                      setOpenTransaction(appVisit)
                      setIsTimeSpent(true)
                    }}
                  >
                    {appVisit?.length} visits
                  </span>{" "}
                  a month
                  <br />
                  Last visit : {getDateFromISOString(appVisit?.[0]?.startTime)+ " , " + formatTime2(appVisit?.[0]?.startTime) }
                </div>
            </td>

            <td>
             
                <div
                  style={{
                    paddingTop: "20px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                
                >
                   {newStoreData?.map((data, i) => (
                  <div style={{ color: "#121212B2" }}   key={i}>
                    ({i+1}): {data?.outletId?.name}, {data?.outletId?.firstLineAddress},
                    <br />
                   {data?.outletId?.city} –{" "}
                    <span
                      style={{ color: "#0070BC", textDecoration: "underline" }}
                      className="cursor-pointer"
                      onMouseOver={() =>{
                         setOpenTransaction(data?.visits)
                         setIsTimeSpent(false)
                        }}
                    >
                      {data?.visits?.length} visits
                    </span>
                    .<br />
                    Last visit to a store: {getDateFromISOString(data?.visits[0]?.startTime)+ " , " + formatTime2(data?.visits[0]?.startTime) }
                  </div>
                ))}
                 
                </div>
            
            </td>
          </tr>
        </tbody>
      </table>
      <DialogDefault open={openTransaction} handleOpen={setOpenTransaction}>
        <HistoryDetails handleOpen={setOpenTransaction} data={openTransaction} isTimeSpent={isTimeSpent}/>
      </DialogDefault>
    </div>
  );
};

export default Engagement;
