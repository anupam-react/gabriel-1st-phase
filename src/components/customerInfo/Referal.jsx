import React, { useState } from "react";
import "./index.scss";
import { DialogDefault } from "../common/DilogBox";
import CatalogueProduct from "./CatalogueProduct";
import ReferalDetails from "./ReferalDetails";
import useReferral from "../../hooks/useReferral";
const Referal = ({ handleOpen, onClose ,id }) => {
  const {
    referralData,
    handleChange,
    setReferralData,
    openOffer,
    setOpenOffer,
    handleCreateReferalStampsUserRewards,
    productId,
    setProductId,
  } = useReferral();
  const [openAlert, setOpenAlert] = useState(false);
  const [isActive, setActive] = useState(1);
  const [isActivePoints, setActivePoints] = useState(1);
  const [isActiveStamps, setActiveStamps] = useState(1);
  const [openUploadImage, setUploadImage] = useState(false);
  return (
    <div className="gift-container no-scrollbar">
      <div className="gift-main">
        <p className="title">Referral Reward</p>
        <img
          src="./Mask group (2).png"
          alt=""
          className="cross-image"
          onClick={()=>handleOpen(false)}
        />
      </div>
      <hr className="hr" />
      <div className="catalogue">
        <label>Select Product from catalogue</label>
        <CatalogueProduct setProductId={setProductId} />
      </div>
      <div className="form-container">
        <div className="input-container">
          <label>Upload photo/product</label>
          <div className="flex  w-full">
            <label
              for="dropzone-file"
              className="flex justify-end bg-white  shadow rounded-md w-full "
            >
              <p>{referralData?.image?.name}</p>
              <div
                className="flex py-2 px-4 rounded-md text-white gap-2 cursor-pointer"
                style={{ backgroundColor: "#00AAEA" }}
                onClick={() => setUploadImage(true)}
              >
                <p className="text-sm">UPLOAD</p>
              </div>
            </label>
          </div>
        </div>
        <div className="input-container">
          <label>Custom Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            cols="50"
            value={referralData?.message}
            onChange={handleChange}
            className="input"
          />
        </div>
        <div className="input-container">
          <label>Exclusive Link</label>
          <input
            type="text"
            name="exclusiveLink"
            value={referralData?.exclusiveLink}
            onChange={handleChange}
            id=""
            className="input"
            placeholder=""
          />
        </div>
        <div className="input-container">
          <label>Expiry Date</label>
          <input
            type="text"
            name="expireDate"
            value={referralData?.expireDate}
            onChange={handleChange}
            id=""
            className="input"
            placeholder=""
          />
        </div>
        <div>
          <p>Type Of Reward</p>
          <div className="flex gap-4 mb-4">
            <button
              className={isActive === 1 ? "button2" : "button1"}
              onClick={() => {
                setActive(1);
                setReferralData({ ...referralData, typeOfReward: "Points" });
              }}
            >
              Points
            </button>
            <button
              className={isActive === 2 ? "button2" : "button1"}
              onClick={() => {
                setActive(2);
                setReferralData({ ...referralData, typeOfReward: "Stamps" });
              }}
            >
              Stamps
            </button>
          </div>
          {isActive === 1 ? (
            <div className="button-group">
              <button
                className={isActivePoints === 1 ? "button2" : "button1"}
                onClick={() => {
                  setActivePoints(1);
                  setReferralData({ ...referralData, rewardPoints: "50" });
                }}
              >
                50 Points
              </button>
              <button
                className={isActivePoints === 2 ? "button2" : "button1"}
                onClick={() => {
                  setActivePoints(2);
                  setReferralData({ ...referralData, rewardPoints: "200" });
                }}
              >
                200 Points
              </button>
              <button
                className={isActivePoints === 3 ? "button2" : "button1"}
                onClick={() => {
                  setActivePoints(3);
                  setReferralData({ ...referralData, rewardPoints: "300" });
                }}
              >
                300 Points
              </button>
            </div>
          ) : (
            <div className="button-group">
              <button
                className={isActiveStamps === 1 ? "button2" : "button1"}
                onClick={() => {
                  setActiveStamps(1);
                  setReferralData({ ...referralData, rewardPoints: "5" });
                }}
              >
                5 Stamps
              </button>
              <button
                className={isActiveStamps === 2 ? "button2" : "button1"}
                onClick={() => {
                  setActiveStamps(2);
                  setReferralData({ ...referralData, rewardPoints: "20" });
                }}
              >
                20 Stamps
              </button>
              <button
                className={isActiveStamps === 3 ? "button2" : "button1"}
                onClick={() => {
                  setActiveStamps(3);
                  setReferralData({ ...referralData, rewardPoints: "30" });
                }}
              >
                30 Stamps
              </button>
            </div>
          )}
        </div>
        <div className="input-container">
          <label>Custom Points</label>
          <input
            type="text"
            id=""
            className="input"
            placeholder=""
            name="rewardPoints"
            value={referralData?.rewardPoints}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="flex-center">
        <button
          className="menuButton"
          onClick={() => {
            handleCreateReferalStampsUserRewards(id);
            setOpenAlert(true);
          }}
        >
          See Referral Reward Review
        </button>
      </div>
      <DialogDefault open={openAlert} handleOpen={setOpenAlert}>
        <ReferalDetails handleOpen={setOpenAlert} onClose={onClose} />
      </DialogDefault>
      <DialogDefault open={openUploadImage} handleOpen={setUploadImage}>
        <div className="p-6">
          <div className="flex justify-center items-center">
            <img
              src="../Vector (40).png"
              alt=""
              className="cursor-pointer"
              onClick={() => setUploadImage(false)}
            />
          </div>
          <div className="flex justify-around mt-4">
            <label id="dropzone-file" className="flex gap-2 cursor-pointer">
              <input
                id="dropzone-file"
                type="file"
                className="hidden"
                onChange={(e) =>
                  setReferralData({ ...referralData, image: e.target.files[0] })
                }
              />
              <img src="../Vector (41).png" alt="" />
              <p className="underline text-black font-[500]">Browse Image</p>
            </label>
            <div
              className="flex gap-2 cursor-pointer"
              onClick={() => setUploadImage(false)}
            >
              <img src="../solar_gallery-bold.png" alt="" />
              <p className="underline text-black font-[500]">Open Gallery</p>
            </div>
          </div>
        </div>
      </DialogDefault>
    </div>
  );
};

export default Referal;
