import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./index.scss";
import InventoryCard from "./InventoryCard";
import Select from 'react-select';
import CustomOption from "../Marketing/CustomOption";

import useProduct from "../../hooks/useProduct";
import usePromoteProduct from "../../hooks/usePromoteProduct";
const Promote = () => {
  const {id} = useParams()
  const {getProductById , productInfo} = useProduct()
  const { campaignData , handleChange , setCampaignData , handleCreateCampaign , handleUpdateCampaign} = usePromoteProduct()
  const [selectUserType, setSelectUserType] = useState("")
  const navigate = useNavigate();
  const handleSubmit = () => {
    if(campaignData?._id){
      handleUpdateCampaign(campaignData?._id)
    }else{
      handleCreateCampaign(id)
    }
    navigate(`/inventory/review-campaign/${id}`);
  };

  useEffect(()=>{
    getProductById(id);
  },[id])

  const handleSelect = (event) => {
    setSelectUserType(event);
    setCampaignData({...campaignData , typeOfCustomer : event.value})
  };

  const data = {
    image: productInfo?.image,
    price: `£${productInfo?.price}`,
    name: productInfo?.name,
    inStore: productInfo?.inStore,
    online: productInfo?.online
  };
  const CustomerOptions = [
    { label: "Active", value: "Active", color: '#03CC5E' },
    { label: "New", value: "New" , color: '#0070C0' },
    { label: "Slipping", value: "Slipping", color: '#ED7D31' },
    { label: "Churn", value: "Churn" , color: '#C00000' },
    { label: "Specific Customer", value: "Specific Customer" },
  ];

  const CampaignOptions = [
    { label: "Percentage Discount", value: "Percentage Discount" },
    { label: "Coupon", value: "Coupon" },
    { label: "Create An Offer", value: "Create An Offer" },
    { label: "Buy 1 Get 1 Free", value: "Buy 1 Get 1 Free" },
    { label: "Featured Deals", value: "Featured Deals" },
    { label: "Get More Followers", value: "Get More Followers" },
    { label: "Get More Shop Visitors", value: "Get More Shop Visitors" },
  ];
  const useOptions = [
    {
      label: "Select specific product attached to Coupon ( Burger)",
      value: "Select specific product attached to Coupon ( Burger)",
    },
    {
      label:
        "Select Product Categories To Apply Coupon(Burger, Coke, Dounts , Pizza",
      value:
        "Select Product Categories To Apply Coupon(Burger, Coke, Dounts , Pizza",
    },
  ];
 
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-2xl font-bold">Promote Product</p>
        <div
          className="flex items-center px-6 h-12"
          style={{
            backgroundColor: "#FFFFFF",
            width: "20rem",
            borderRadius: "12px",
            color: "#8BA3CB",
          }}
        >
          <img src="../../image 2 (3).svg" alt="search" className="w-6 h-6" />
          <input
            type="text"
            className="border-none w-48 bg-transparent outline-none focus:ring-0 focus:shadow-none focus:border-none"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="loyalty-form-container">
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">
            Select Type Of Campaign You Have To Run{" "}
          </p>
          <select
            id="countries"
            // value={selectedOption}
            // onChange={handleChange}
            className="input-loyalty2"
          >
            <option
              className="font-semibold"
              disabled
              value="Percentage Dicount"
            >
              Add Discount Value
            </option>
            {CampaignOptions?.map((data, i) => (
              <>
                <option
                  className="font-semibold text-black"
                  key={i}
                  value={data?.value}
                >
                  {data?.label}
                </option>
              </>
            ))}
          </select>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Product Image </p>
          <div className="image-shadow w-fit">
            <InventoryCard data={data} />
          </div>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Add Discount Value</p>
          <input type="text" className="input-loyalty2" name="discountValue"  value={campaignData?.discountValue}
            onChange={handleChange} />
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Add Expiration Date</p>
          <input type="text" className="input-loyalty2" name="expireDate"  value={campaignData?.expireDate}
            onChange={handleChange} />
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Add Conditions Of Use</p>
          <select
            id="countries"
            name="conditionOfUse"
            value={campaignData?.conditionOfUse}
            onChange={handleChange}
            className="input-loyalty2"
          >
            {useOptions?.map((data, i) => (
              <>
                <option
                  className="font-semibold text-black"
                  key={i}
                  value={data?.value}
                >
                  {data?.label}
                </option>
              </>
            ))}
          </select>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Choose Type of Customers</p>
          <Select
            options={CustomerOptions}
            components={{ Option: CustomOption }}
            value={selectUserType}
            onChange={handleSelect }
          
        />
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Choose Target Location</p>
          <textarea
            className="input-loyalty2"
            name="targetLocation"
            id=""
            rows="3"
            value={campaignData?.targetLocation}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Min Estimated Reach</p>
          <input type="text" className="input-loyalty2" name="estimateReachMin"  value={campaignData?.estimateReachMin}
            onChange={handleChange} />
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Max Estimated Reach</p>
          <input type="text" className="input-loyalty2" name="estimateReachMax"  value={campaignData?.estimateReachMax}
            onChange={handleChange} />
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Location Long</p>
          <input type="text" className="input-loyalty2" name="locationLat"  value={campaignData?.locationLat}
            onChange={handleChange} />
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Location Lat</p>
          <input type="text" className="input-loyalty2" name="locationLong"  value={campaignData?.locationLong}
            onChange={handleChange} />
        </div>
        <div className="mt-4">
          <div className="input-loyalty2 p-4">
            <p className="font-semibold pb-2">
            {campaignData?.targetLocation}
            </p>
            <img src="../../image 724.png" alt="" />
            <button
              className="loyalty-button1 mt-2"
              style={{ width: "300px" }}
              // onClick={handleSubmit}
            >
              <p className="text-[14px]">Estimated Reach</p>
              <p className="text-[20px]"> {campaignData?.estimateReachMin + "-"+campaignData?.estimateReachMax}</p>
            </button>
          </div>
        </div>

        <div className="loyalty-button-container">
          <button
            className="loyalty-button2"
            onClick={() => {
              navigate("/inventory");
            }}
          >
            Back
          </button>
          <button
            className="loyalty-button1"
            style={{ width: "150px" }}
            onClick={handleSubmit}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Promote;
