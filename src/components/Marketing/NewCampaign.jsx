import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";
import Select from 'react-select';
import CatalogueProduct from "../customerInfo/CatalogueProduct";
import CustomOption from "./CustomOption";
import useCampaign from "../../hooks/useCampaign";
const NewCampaign = () => {
  const { campaignData ,  selectedCat, 
    selectProduct, setSelectProduct, setProductId,    handleProduct,
    handleCategory, handleChange ,  category,
    product, setCampaignData , handleCreateCampaign , handleUpdateCampaign} = useCampaign()
  const [selectUserType, setSelectUserType] = useState("")
  const navigate = useNavigate();
  const handleSelect = (event) => {
    setSelectUserType(event);
    setCampaignData({...campaignData , typeOfCustomer : event.value})
  };
  console.log(campaignData?.typeOfCampaign)

  const CampaignOptions = [
    { label: "Percentage Discount", value: "Percentage Discount"},
    { label: "Coupon", value: "Coupon" },
    { label: "Create An Offer", value: "Special Offer" },
    { label: "Buy 1 Get 1 Free", value: "Buy 1 Get 1 Free" },
    { label: "Featured Deals", value: "Featured Deals" },
    { label: "Get More Followers", value: "Get More Followers" },
    { label: "Get More Shop Visitors", value: "Get More Shop Visitors" },
  ];
  const RewardOptions = [
    { label: "Points", value: "Points"},
    { label: "Stamps", value: "Stamps" },

  ];
  const useOptions = [
    {
      label: "Select specific product attached to Coupon ( Burger)",
      value: "Select specific product attached to Coupon ( Burger)",
    },
    {
      label:
        "Select Product Categories To Apply Coupon(Burger, Coke, Dounts , Pizza)",
      value:
        "Select Product Categories To Apply Coupon(Burger, Coke, Dounts , Pizza)",
    },
  ];
  const CustomerOptions = [
    { label: "Active", value: "Active", color: '#03CC5E' },
    { label: "New", value: "New" , color: '#0070C0' },
    { label: "Slipping", value: "Slipping", color: '#ED7D31' },
    { label: "Churn", value: "Churn" , color: '#C00000' },
    { label: "Specific Customer", value: "Specific Customer" },
  ];
  return (
    <div>
      <div className=" mb-6">
        <p className="text-2xl font-bold">Set Up New Campaign</p>
      </div>
      <div className="loyalty-form-container">
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">
            Select type of Campaign You Have To Run{" "}
          </p>
          <select
            id="countries"
            value={campaignData?.typeOfCampaign}
            onChange={handleChange}
            className="input-loyalty2"
            name="typeOfCampaign"
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
                  className="font-semibold text-black "
                  key={i}
                  value={data?.value}
                  defaultValue="Percentage Discount"
                >
                  {data?.label}
                </option>
              </>
            ))}
          </select>
        </div>
       
        {campaignData?.typeOfCampaign === "Percentage Discount" 
        &&
        <>
        <div className="catalogue mt-4">
        <p className="text-lg font-semibold pb-2">Upload Product From Inventory</p>

      <CatalogueProduct setProductId={setProductId}/>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Upload Product Image</p>
          <div className="input-loyalty2">
            <label
              for="dropzone-file"
              className="flex justify-end bg-white  shadow rounded-md w-full "
            >
               {campaignData?.image?.name}
              <div className="upload-file">
                <p className="text-sm">UPLOAD</p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" onChange={(e)=> setCampaignData({...campaignData , image : e.target.files[0]})}/>
            </label>
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
          <p className="text-lg font-semibold pb-2">Add Campaign Duration</p>
          <input type="text" className="input-loyalty2" name="noOfDays" value={campaignData?.noOfDays}
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
        {campaignData?.conditionOfUse ==="Select specific product attached to Coupon ( Burger)" ?
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Choose Product</p>
          <Select
    
            className="input-loyalty2"
            styles={{ width: "20px" }}
            value={selectProduct}
            options={product?.map((user) => ({
              value: user._id,
              label: user?.name,
            }))}
            defaultValue={product?.[0]?._id}
            onChange={handleProduct}
            placeholder=""
          />
        </div> :
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Choose Product Categories</p>
          <Select
                 isMulti
            className="input-loyalty2"
            styles={{ width: "20px" }}
            value={selectedCat}
            options={category?.map((user) => ({
              value: user?._id,
              label: user?.name,
            }))}
            defaultValue={category?.[0]?._id}
            onChange={handleCategory}
            placeholder=""
          />
        </div>

        }
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
            <img src="../image 724.png" alt="" />
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
              navigate("/marketing");
            }}
          >
            Back
          </button>
          <button
            className="loyalty-button1"
            style={{ width: "150px" }}
            onClick={()=>{
              if(campaignData?._id){
                handleUpdateCampaign(campaignData?._id)
              }else{
                handleCreateCampaign()
              }
              navigate("/marketing/review-campaign");
            }}
          >
            Next
          </button>
        </div>
        </>
          }
       
        {campaignData?.typeOfCampaign === "Coupon" 
        && 
        <>
        <div className="catalogue mt-4">
        <p className="text-lg font-semibold pb-2">Upload Product From Inventory</p>

      <CatalogueProduct setProductId={setProductId}/>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Upload Coupon Image</p>
          <div className="input-loyalty2">
            <label
              for="dropzone-file"
              className="flex justify-end bg-white  shadow rounded-md w-full "
            >
               {campaignData?.image?.name}
              <div className="upload-file">
                <p className="text-sm">UPLOAD</p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" onChange={(e)=> setCampaignData({...campaignData , image : e.target.files[0]})}/>
            </label>
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
          <p className="text-lg font-semibold pb-2">Add Campaign Duration</p>
          <input type="text" className="input-loyalty2" name="noOfDays" value={campaignData?.noOfDays}
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
        {campaignData?.conditionOfUse ==="Select specific product attached to Coupon ( Burger)" ?
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Choose Product</p>
          <Select
    
            className="input-loyalty2"
            styles={{ width: "20px" }}
            value={selectProduct}
            options={product?.map((user) => ({
              value: user._id,
              label: user?.name,
            }))}
            defaultValue={product?.[0]?._id}
            onChange={handleProduct}
            placeholder=""
          />
        </div> :
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Choose Product Categories</p>
          <Select
                 isMulti
            className="input-loyalty2"
            styles={{ width: "20px" }}
            value={selectedCat}
            options={category?.map((user) => ({
              value: user?._id,
              label: user?.name,
            }))}
            defaultValue={category?.[0]?._id}
            onChange={handleCategory}
            placeholder=""
          />
        </div>

        }
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
            <img src="../image 724.png" alt="" />
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
              navigate("/marketing");
            }}
          >
            Back
          </button>
          <button
            className="loyalty-button1"
            style={{ width: "150px" }}
            onClick={()=>{
              if(campaignData?._id){
                handleUpdateCampaign(campaignData?._id)
              }else{
                handleCreateCampaign()
              }
              navigate("/marketing/review-campaign");
            }}
          >
            Next
          </button>
        </div>
        </>
        }
        {campaignData?.typeOfCampaign === "Special Offer" 
        && 
        <>
        <div className="catalogue mt-4">
        <p className="text-lg font-semibold pb-2">Upload Product From Inventory</p>

      <CatalogueProduct setProductId={setProductId}/>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Upload Photo</p>
          <div className="input-loyalty2">
            <label
              for="dropzone-file"
              className="flex justify-end bg-white  shadow rounded-md w-full "
            >
               {campaignData?.image?.name}
              <div className="upload-file">
                <p className="text-sm">UPLOAD</p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" onChange={(e)=> setCampaignData({...campaignData , image : e.target.files[0]})}/>
            </label>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Add Offer Discount</p>
          <input type="text" className="input-loyalty2" name="discountValue"  value={campaignData?.discountValue}
            onChange={handleChange} />
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">
          Choose reward Type
          </p>
          <select
            id="countries"
            value={campaignData?.rewardType}
            onChange={handleChange}
            className="input-loyalty2"
            name="rewardType"
          >
            {RewardOptions?.map((data, i) => (
              <>
                <option
                  className="font-semibold text-black "
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
          <p className="text-lg font-semibold pb-2">Description</p>
          <textarea
            className="input-loyalty2"
            name="description"
            id=""
            rows="4"
            value={campaignData?.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Add Campaign Duration</p>
          <input type="text" className="input-loyalty2" name="noOfDays" value={campaignData?.noOfDays}
            onChange={handleChange} />
        </div>

        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Choose Number Of Points To Reward</p>
          <input type="text" className="input-loyalty2" name="noOfPoints" value={campaignData?.noOfPoints}
            onChange={handleChange} />
        </div>
        
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Choose Specific Products To Attach Your Offer</p>
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

        {campaignData?.conditionOfUse ==="Select specific product attached to Coupon ( Burger)" ?
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Choose Product</p>
          <Select
    
            className="input-loyalty2"
            styles={{ width: "20px" }}
            value={selectProduct}
            options={product?.map((user) => ({
              value: user._id,
              label: user?.name,
            }))}
            defaultValue={product?.[0]?._id}
            onChange={handleProduct}
            placeholder=""
          />
        </div> :
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Choose Product Categories</p>
          <Select
                 isMulti
            className="input-loyalty2"
            styles={{ width: "20px" }}
            value={selectedCat}
            options={category?.map((user) => ({
              value: user?._id,
              label: user?.name,
            }))}
            defaultValue={category?.[0]?._id}
            onChange={handleCategory}
            placeholder=""
          />
        </div>

        }
       
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
          <p className="text-lg font-semibold pb-2">Add Expiration Date</p>
          <input type="text" className="input-loyalty2" name="expireDate"  value={campaignData?.expireDate}
            onChange={handleChange} />
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
            <img src="../image 724.png" alt="" />
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
              navigate("/marketing");
            }}
          >
            Back
          </button>
          <button
            className="loyalty-button1"
            style={{ width: "150px" }}
            onClick={()=>{
              if(campaignData?._id){
                handleUpdateCampaign(campaignData?._id)
              }else{
                handleCreateCampaign()
              }
              navigate("/marketing/review-offer")
             
            }}
  
          >
            Next
          </button>
        </div>
        </>
        }
        {campaignData?.typeOfCampaign === "Buy 1 Get 1 Free" 
        && 
        <>
        {/* <div className="catalogue mt-4">
        <p className="text-lg font-semibold pb-2">Upload Product From Inventory</p>

      <CatalogueProduct setProductId={setProductId}/>
        </div> */}
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Upload  Coupon Image</p>
          <div className="input-loyalty2">
            <label
              for="dropzone-file"
              className="flex justify-end bg-white  shadow rounded-md w-full "
            >
               {campaignData?.image?.name}
              <div className="upload-file">
                <p className="text-sm">UPLOAD</p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" onChange={(e)=> setCampaignData({...campaignData , image : e.target.files[0]})}/>
            </label>
          </div>
        </div>
       
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Description</p>
          <textarea
            className="input-loyalty2"
            name="description"
            id=""
            rows="4"
            value={campaignData?.description}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Add Expiration Date</p>
          <input type="text" className="input-loyalty2" name="expireDate"  value={campaignData?.expireDate}
            onChange={handleChange} />
        </div>
        
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Add Campaign Duration</p>
          <input type="text" className="input-loyalty2" name="noOfDays" value={campaignData?.noOfDays}
            onChange={handleChange} />
        </div>

        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Add Conditions of use</p>
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

        {campaignData?.conditionOfUse ==="Select specific product attached to Coupon ( Burger)" ?
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Choose Product</p>
          <Select
    
            className="input-loyalty2"
            styles={{ width: "20px" }}
            value={selectProduct}
            options={product?.map((user) => ({
              value: user._id,
              label: user?.name,
            }))}
            defaultValue={product?.[0]?._id}
            onChange={handleProduct}
            placeholder=""
          />
        </div> :
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Choose Product Categories</p>
          <Select
                 isMulti
            className="input-loyalty2"
            styles={{ width: "20px" }}
            value={selectedCat}
            options={category?.map((user) => ({
              value: user?._id,
              label: user?.name,
            }))}
            defaultValue={category?.[0]?._id}
            onChange={handleCategory}
            placeholder=""
          />
        </div>

        }
       
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
            <img src="../image 724.png" alt="" />
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
              navigate("/marketing");
            }}
          >
            Back
          </button>
          <button
            className="loyalty-button1"
            style={{ width: "150px" }}
            onClick={()=>{
              if(campaignData?._id){
                handleUpdateCampaign(campaignData?._id)
              }else{
                handleCreateCampaign()
              }
              navigate("/marketing/review-free")
              
            }
            }
            
          >
            Next
          </button>
        </div>
        </>
        }
        {campaignData?.typeOfCampaign === "Featured Deals" 
        && 
        <>
        <div className="catalogue mt-4">
        <p className="text-lg font-semibold pb-2">Upload Product From Inventory</p>

      <CatalogueProduct setProductId={setProductId}/>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Upload Photo</p>
          <div className="input-loyalty2">
            <label
              for="dropzone-file"
              className="flex justify-end bg-white  shadow rounded-md w-full "
            >
               {campaignData?.image?.name}
              <div className="upload-file">
                <p className="text-sm">UPLOAD</p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" onChange={(e)=> setCampaignData({...campaignData , image : e.target.files[0]})}/>
            </label>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Add Featured product title</p>
          <input type="text" className="input-loyalty2" name="title" value={campaignData?.title} 
            onChange={handleChange} />
        </div>
       
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Description</p>
          <textarea
            className="input-loyalty2"
            name="description"
            id=""
            rows="4"
            value={campaignData?.description}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Add Campaign Duration</p>
          <input type="text" className="input-loyalty2" name="noOfDays" value={campaignData?.noOfDays}
            onChange={handleChange} />
        </div>

        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Add Expiration Date</p>
          <input type="text" className="input-loyalty2" name="expireDate"  value={campaignData?.expireDate}
            onChange={handleChange} />
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
            <img src="../image 724.png" alt="" />
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

              navigate("/marketing");
            }}
          >
            Back
          </button>
          <button
            className="loyalty-button1"
            style={{ width: "150px" }}
            onClick={()=>{ 
              if(campaignData?._id){
                handleUpdateCampaign(campaignData?._id)
              }else{
                handleCreateCampaign()
              }
              navigate("/marketing/review-featured")
            }}
          >
            Next
          </button>
        </div>
        </>
        }
        {campaignData?.typeOfCampaign === "Get More Followers" 
        && 
        <>
      <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Enter description</p>
          <textarea
            className="input-loyalty2"
            name="description"
            id=""
            rows="4"
            value={campaignData?.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Upload Coupon Image</p>
          <div className="input-loyalty2">
            <label
              for="dropzone-file"
              className="flex justify-end bg-white  shadow rounded-md w-full "
            >
               {campaignData?.image?.name}
              <div className="upload-file">
                <p className="text-sm">UPLOAD</p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" onChange={(e)=> setCampaignData({...campaignData , image : e.target.files[0]})}/>
            </label>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Add Audience Selection</p>
          <input type="text" className="input-loyalty2" name="audienceSelection"  value={campaignData?.audienceSelection}
            onChange={handleChange} />
        </div>
       
      

        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Add Campaign Duration</p>
          <input type="text" className="input-loyalty2" name="noOfDays" value={campaignData?.noOfDays}
            onChange={handleChange} />
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
            <img src="../image 724.png" alt="" />
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
              navigate("/marketing");
            }}
          >
            Back
          </button>
          <button
            className="loyalty-button1"
            style={{ width: "150px" }}
            onClick={()=>{ 
              if(campaignData?._id){
                handleUpdateCampaign(campaignData?._id)
              }else{
                handleCreateCampaign()
              }
              navigate('/marketing/review-follower')}}
          >
            Next
          </button>
        </div>
        </>
        }
        {campaignData?.typeOfCampaign === "Get More Shop Visitors" 
        && 
        <>
      <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Enter description</p>
          <textarea
            className="input-loyalty2"
            name="description"
            id=""
            rows="4"
            value={campaignData?.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Upload Coupon Image</p>
          <div className="input-loyalty2">
            <label
              for="dropzone-file"
              className="flex justify-end bg-white  shadow rounded-md w-full "
            >
               {campaignData?.image?.name}
              <div className="upload-file">
                <p className="text-sm">UPLOAD</p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" onChange={(e)=> setCampaignData({...campaignData , image : e.target.files[0]})}/>
            </label>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Add Audience Selection</p>
          <input type="text" className="input-loyalty2" name="audienceSelection"  value={campaignData?.audienceSelection}
            onChange={handleChange} />
        </div>
       
       
      

        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Add Campaign Duration</p>
          <input type="text" className="input-loyalty2" name="noOfDays" value={campaignData?.noOfDays}
            onChange={handleChange} />
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
            <img src="../image 724.png" alt="" />
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
              navigate("/marketing");
            }}
          >
            Back
          </button>
          <button
            className="loyalty-button1"
            style={{ width: "150px" }}
            onClick={()=>{ 
              if(campaignData?._id){
                handleUpdateCampaign(campaignData?._id)
              }else{
                handleCreateCampaign()
              }
              navigate("/marketing/review-shop")}}
          >
            Next
          </button>
        </div>
        </>
        }
         
      </div>
    </div>
  );
};

export default NewCampaign;
