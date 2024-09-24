import React, { useState } from "react";
import "./index.scss";
import CatalogueProduct from "./CatalogueProduct";
import { DialogDefault } from "../common/DilogBox";
import BirthdayOffer from "./BirthdayOffer";
import useOffer from "../../hooks/useOffer";
const CustomizedBGift = ({ handleOpen , id}) => { 
  const {
    offerData,
    openOffer,
    setOpenOffer,
    handleChange,
    setProductId,
    setOfferData,
    handleCreateUserRewards,
    handleUpdateUserRewards
  } = useOffer();
  const [openUploadImage, setUploadImage] = useState(false);

  return (
    <div className="gift-container  no-scrollbar">
      <div className="gift-main">
        <p className="title">Send Customized Birthday Offer</p>
        <img
          src="./Mask group (2).png"
          alt=""
          className="cross-image"
          onClick={() => {
            handleOpen(false);
          }}
        />
      </div>
      <hr className="hr" />
      <div className="catalogue">
        <label>Select Product from catalogue</label>
        <CatalogueProduct setProductId={setProductId}/>
      </div>
      <div className="form-container">
      <div className="input-container">
          <label>Upload photo/product</label>
         <div className="flex  w-full">
             <label
              
               className="flex justify-end bg-white  shadow rounded-md w-full "
             >
               {offerData?.image?.name}
               <div
                 className="flex py-2 px-4 rounded-md text-white gap-2 cursor-pointer"
                 style={{ backgroundColor: "#00AAEA" }}
                 onClick={()=>setUploadImage(true)}
               >
                 <p className="text-sm">UPLOAD</p>
               </div>
               {/* <input id="dropzone-file" type="file" className="hidden" /> */}
             </label>
           </div>
           </div>
   
       
        <div className="input-container">
          <label>Promotion Description text</label>
          <textarea
            id="description"
            name="description"
            rows="4"
            cols="50"
            className="input"
            value={offerData?.description}
            onChange={handleChange}
          />
        </div>

    
        <div className="input-container">
          <label>Discount</label>
          <input
            type="text"
            name="discount"
            id="discount"
            className="input"
            value={offerData?.discount}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label>Enter Birthday Meassage!</label>
          <input
            type="text"
            name="message"
            id="message"
            className="input"
            value={offerData?.message}
            onChange={handleChange}
          />
        </div>
  
      </div>
      <div className="flex-center">
        <button
          className="menuButton"
          onClick={()=>{
            if(offerData?._id){
              handleUpdateUserRewards(id, "BirthDay", offerData?._id)
            }
            else{

              handleCreateUserRewards(id, "BirthDay")
            }
          }}
        >
          Save & Next
        </button>
      </div>
      
      <DialogDefault open={openOffer} handleOpen={setOpenOffer}>
  <BirthdayOffer handleOpen={setOpenOffer} isOffer={true}/>
    </DialogDefault>
    <DialogDefault open={openUploadImage} handleOpen={setUploadImage}>
        <div className="p-6">
            <div className="flex justify-center items-center">
                <img src="../Vector (40).png" alt="" className="cursor-pointer" onClick={()=>setUploadImage(false)}/>
            </div>
            <div className="flex justify-around mt-4">
            <label id="dropzone-file" className="flex gap-2 cursor-pointer">
              <input
                id="dropzone-file"
                type="file"
                className="hidden"
                onChange={(e) =>
                  setOfferData({ ...offerData, image: e.target.files[0] })
                }
              />
              <img src="../Vector (41).png" alt="" />
              <p className="underline text-black font-[500]">Browse Image</p>
            </label>
          
            <div className="flex gap-2 cursor-pointer"  onClick={()=>setUploadImage(false)}>
                <img src="../solar_gallery-bold.png" alt="" />
                <p className="underline text-black font-[500]">Open Gallery</p>
            </div>

            </div>
        </div>
      </DialogDefault>
    </div>
  );
};

export default CustomizedBGift;
