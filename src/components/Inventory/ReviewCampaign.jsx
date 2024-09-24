import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import InventoryCard from './InventoryCard';
import useProduct from '../../hooks/useProduct';
import usePromoteProduct from '../../hooks/usePromoteProduct';
import { getDateFromISOString } from '../../utiils';

const ReviewCampaign = () => {
  const {id} = useParams()
  const {getProductById , productInfo} = useProduct()
  const { campaignData} = usePromoteProduct()
  useEffect(()=>{
    getProductById(id);
  },[id])
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate(`/inventory/ad-preview/${id}`);
  };

  const data = {
    image: productInfo?.image,
    price: `£${productInfo?.price}`,
    name: productInfo?.name,
    inStore: productInfo?.inStore,
    online: productInfo?.online
    };
     const data2 = [
    {
      title: "Campaign Type",
      value: campaignData?.typeOfCampaign,
      handleClick: () => {
        navigate(`/inventory/promote/${id}`);
      },
    },
    {
      title: "Offer Discount",
      value: campaignData?.discountValue + "%",
      handleClick: () => {
        navigate(`/inventory/promote/${id}`);
      },
    },
    {
      title: "Reward Type",
      value: "Points",
      handleClick: () => {
        navigate(`/inventory/promote/${id}`);
      },
    },
    {
      title: "Description",
      value: "Special Offer coupon on all hot drinks",
      handleClick: () => {
        navigate(`/inventory/promote/${id}`);
      },
    },
    {
      title: "No of Points Reward",
      value: "500 Points",
      handleClick: () => {
        navigate(`/inventory/promote/${id}`);
      },
    },
    {
      title: "Add Conditions",
      value: campaignData?.conditionOfUse,
      handleClick: () => {
        navigate(`/inventory/promote/${id}`);
      },
    },
    {
      title: "Customer",
      value: campaignData?.typeOfCustomer,
      handleClick: () => {
        navigate(`/inventory/promote/${id}`);
      },
    },
    {
      title: "Expriy Date",
      value: getDateFromISOString(campaignData?.expireDate),
      handleClick: () => {
        navigate(`/inventory/promote/${id}`);
      },
    },
  ];
  return (
    <div>
         <div className="flex justify-between items-center mb-6">
        <p className="text-2xl font-bold">Review Campaign</p>
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
          <p className="text-lg font-semibold pb-2">Ad Review</p>
          <div className="image-shadow w-fit">
            <InventoryCard data={data} />
          </div>
        </div>
    <div className="footer-Main2">
        {data2?.map((d, i) => (
          <div className="footer-container2">
            <p>{d?.title}</p>
            <span>:</span>
            <p>{d?.value}</p>
            <button className="edit-button2" onClick={d?.handleClick} >Edit</button>
          </div>
        ))}
          </div>
          <button
            className="loyalty-button1"
            style={{ width: "300px" }}
            onClick={handleSubmit}
          >
            See Campaign Review
          </button>
      </div>
    </div>
  )
}

export default ReviewCampaign
