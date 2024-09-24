import React, { useEffect, useState } from "react";
import "./index.scss";
import { useNavigate, useParams } from "react-router-dom";

import InventoryCard from "./InventoryCard";
import useProduct from "../../hooks/useProduct";
import { createApiData, fetchApiData } from "../../utiils";
import { useRecoilState } from "recoil";
import { offerState } from "../atoms/offerState";
const CustomerGift = () => {
  const {id} = useParams()
  const {getProductById , productInfo} = useProduct()
  const [ giftData, setGiftData] = useRecoilState(offerState)
  const [cutomers, setCustomers] = useState([])
  const navigate = useNavigate();

  const getCustomer = async ()=>{
    const data = await fetchApiData(`https://money-chat.com/api/api/v1/Dashboard/getCustomer`)
    setCustomers(data?.data?.docs)
  }

  useEffect(()=>{
    getProductById(id);
    getCustomer()
  },[id])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setGiftData({
      ...giftData,
      [name]: val,
    });
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('userId', giftData?.userId || cutomers[0]?._id);
    formData.append('productId', id);
    formData.append('message', giftData?.message);
    formData.append('expireDate', giftData?.expireDate);
    formData.append('type', "Gift");
    formData.append('price', productInfo?.price);
    // formData.append('typeOfReward', offerData?.typeOfReward);
    // formData.append('amount', offerData?.amount);
    // formData.append('discount', offerData?.discount);
    formData.append('description', giftData?.description);
    
    try {
      const response = await createApiData(
        "https://money-chat.com/api/api/v1/brandLoyalty/createUserRewards",
        formData
      );

      setGiftData(response?.data)
      navigate(`/inventory/preview-gift/${id}`);

    } catch (error) {
      console.log(error);
      return error;
    }
  };


  const data = {
    image: productInfo?.image,
    price: `£${productInfo?.price}`,
    name: productInfo?.name,
    inStore: productInfo?.inStore,
    online: productInfo?.online
  };
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
        <p className="text-2xl font-bold">Send As Gift To Customer</p>
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
          <p className="text-lg font-semibold pb-2">Product Image </p>
          <div className="image-shadow w-fit">
            <InventoryCard data={data} />
          </div>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">
            Send to Specific Customer
          </p>
          <select
            id="countries"
            value={giftData?.userId}
            onChange={handleChange}
            className="input-loyalty2"
          >
            {cutomers?.map((data, i) => (
              <>
                <option
                  className="font-semibold text-black"
                  key={i}
                  value={data?._id}
                  defaultValue={cutomers[0]?._id}
                >
                  {data?.fullName || data?.firstName + " " + data?.lastName}
                </option>
              </>
            ))}
          </select>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Header Text</p>
          <input type="text" className="input-loyalty2" name="message" value={giftData?.message}   onChange={handleChange}/>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Description</p>
          <textarea
            className="input-loyalty2"
            id=""
            rows="3"
            name="description"
             value={giftData?.description}
             onChange={handleChange}
          ></textarea>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Expiry Date</p>
          <input type="text" className="input-loyalty2" name="expireDate"
             value={giftData?.expireDate}   onChange={handleChange}/>
        </div>

        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Terms & Conditions</p>
          <select
            id="countries"
            // value={selectedOption}
            // onChange={handleChange}
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
        <div className="my-4 flex justify-between">
          <button
            className="border border-black px-10 py-2 rounded-md font-[500]"
          
            onClick={()=> navigate('/inventory')}
          >
            Back
          </button>
          <button
            className="loyalty-button1"
            style={{ width: "300px" }}
            onClick={handleSubmit}
          >
            Preview Gift
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerGift;
