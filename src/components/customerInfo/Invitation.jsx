import React, { useState } from "react";
import "./index.scss";
import { DialogDefault } from "../common/DilogBox";
import CatalogueProduct from "./CatalogueProduct";
import InvitationPreview from "./InvitationPreview";

import useInvite from "../../hooks/useInvite";
const Invitation = ({ handleOpen , id , onClose}) => {
  const {
    inviteData,
    handleChange,
    setInviteData,
    openOffer, setOpenOffer,
    handleUpdateEventInvite,
    handleCreateEventInvite,
    setProductId
  } = useInvite()

  console.log(inviteData)

  const [openUploadImage, setUploadImage] = useState(false);

  return (
    <div className="gift-container no-scrollbar">
      <div className="gift-main ">
        <p className="title">Invitation Link</p>
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
        <CatalogueProduct  setProductId={setProductId}/>
      </div>
      <div className="form-container">
      <div className="input-container">
          <label>Upload photo/product</label>
         <div className="flex  w-full">
             <label
              
               className="flex justify-end bg-white  shadow rounded-md w-full "
             >
               {inviteData?.image?.name}
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
          <label>Custom Message</label>
          <textarea
            id="message"
            name="customMessage"
            rows="4"
            cols="50"
            value={inviteData?.customMessage}
            onChange={handleChange}
            // value="Your slice awaits you. Received a cake voucher when you refer a friend and make your first transaction with us."
            className="input"
          />
        </div>
        <div className="input-container">
          <label>Exclusive Link</label>
          <input
            type="text"
            name="exclusiveLink"
            id=""
            className="input"
            placeholder=""
            value={inviteData?.exclusiveLink}
            onChange={handleChange}
            // value="https://www.Moneychat.com/slic e/referralvoucher"
          />
        </div>
        <div className="input-container">
          <label>Discount</label>
          <input
            type="text"
            name="discount"
            id=""
            className="input"
            placeholder=""
            value={inviteData?.discount}
            onChange={handleChange}
            // value="https://www.Moneychat.com/slic e/referralvoucher"
          />
        </div>
        <div className="input-container">
          <label>Choose Refer User Reward Type</label>
          <select
            id="countries"
            name="referUser"
            value={inviteData?.referUser}
            onChange={handleChange}
            className="rounded shadow-md text-gray-900 text-sm  border-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option className="font-semibold" value="points">Points</option>
            <option className="font-semibold" value="free">Free</option>
          </select>
        </div>
        <div className="input-container">
          <label>Expiry Date</label>
          <input
            type="text"
            name="expireDate"
            id=""
            className="input"
            placeholder=""
            value={inviteData?.expireDate}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex-center">
        <button
          className="menuButton"
          onClick={() =>{ 
            if(inviteData?._id){
              handleUpdateEventInvite(id, inviteData?._id)
            }else{
              handleCreateEventInvite(id)

            }

          }}
        >
         See Invitation Review
        </button>
      </div>
      <DialogDefault open={openOffer} handleOpen={setOpenOffer}>
      <InvitationPreview handleOpen={setOpenOffer} onClose={onClose}/>
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
                  setInviteData({ ...inviteData, image: e.target.files[0] })
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

export default Invitation;
