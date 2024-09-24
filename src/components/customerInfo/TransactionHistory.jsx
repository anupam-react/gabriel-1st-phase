import React, { useEffect, useState } from "react";
import "./index.scss";
import InfoHeader from "./InfoHeader";
import AppPurchase from "./AppPurchase";
import StorePurchase from "./StorePurchase";
import { fetchApiData } from "../../utiils";
const TransactionHistory = ({ handleOpen, onClose, data }) => {
  const [activeLink, setActiveLink] = useState(0);
  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  const [dataInfo, setDataInfo] = useState();

  const getAllTransactionHistory = async () => {
    const response = await fetchApiData(
      `https://money-chat.com/api/api/v1/brandLoyalty/getAllTransactionHistory/ByUserId/${data?._id}`
    );
    console.log(response);
    setDataInfo(response?.data);
  };

  const storeTransactions = dataInfo?.filter(
    (item) => item.purchaseBy === "Store"
  );
  const totalStoreAmount = storeTransactions?.reduce(
    (sum, item) => sum + item.amount,
    0
  );

  const appTransactions = dataInfo?.filter((item) => item.purchaseBy === "App");
  const totalAppAmount = appTransactions?.reduce(
    (sum, item) => sum + item.amount,
    0
  );

  console.log(
    totalStoreAmount,
    totalAppAmount,
    storeTransactions,
    appTransactions
  );

  useEffect(() => {
    getAllTransactionHistory();
  }, []);

  return (
    <div className="info-container">
      <div className="gift-main">
        <p className="title" style={{ color: "#000000B2" }}>
          {activeLink === 0
            ? "Transaction  In App Purchase"
            : "Transaction  In Store Purchase"}
        </p>
        <img
          src="./Mask group (2).png"
          alt=""
          className="cross-image"
          onClick={() => handleOpen(false)}
        />
      </div>
      <hr className="hr2" />
      <InfoHeader onClose={onClose} data={data} />
      <div className="my-4">
        <button className="menuButton2" onClick={() => handleLinkClick(0)}>
          Total Spent{" "}
          {activeLink === 0 ? `£${totalAppAmount}` : `£${totalStoreAmount}`}{" "}
        </button>
      </div>
      <div className="tabs-container2">
        <div
          style={{ paddingBottom: "30px" }}
          onClick={() => {
            if (activeLink === 0) {
              handleOpen(false);
            } else {
              handleLinkClick(0);
            }
          }}
        >
          <p
            className={`${activeLink === 0 ? "activeButton1" : "normalButton"}`}
          >
            IN APP PURCHASE HISTORY
          </p>
          {activeLink === 0 && <hr className="hr4" />}
        </div>
        <div
          style={{ paddingBottom: "30px" }}
          onClick={() => {
            if (activeLink === 1) {
              handleOpen(false);
            } else {
              handleLinkClick(1);
            }
          }}
        >
          <p
            className={`${activeLink === 1 ? "activeButton1" : "normalButton"}`}
          >
            IN STORE PURCHASE HISTORY
          </p>
          {activeLink === 1 && <hr className="hr4" />}
        </div>
      </div>

      {activeLink === 0 && <AppPurchase data={appTransactions} />}
      {activeLink === 1 && <StorePurchase data={storeTransactions} />}
    </div>
  );
};

export default TransactionHistory;
