import React from "react";
import { useNavigate } from "react-router-dom";
import useOutlate from "../../hooks/useOutlate";

const AddOutlate2 = () => {
  const {
    title,
    setTitle,
    image,
    setImage,
    postCode,
    setPostCode,
    firstLineAddress,
    setFirstLineAddress,
    secondLineAddress,
    setSecondLineAddress,
    city,
    setCity,
    state,
    setState,
    country,
    setCountry,
    openingTime,
    setOpeningTime,
    closingTime,
    setClosingTime,
    handleCreateOutlate,
  } = useOutlate();

  const navigate = useNavigate();

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-2xl font-bold">Adding Outlet</p>
        <div
          className="inventory-button2"
          onClick={() => navigate("/inventory")}
        >
          <img src="../../back.png" alt="" />
          <p className="font-bold">Back</p>
        </div>
      </div>
      <div className="loyalty-form-container">
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Outlet Name</p>
          <input type="text" className="input-loyalty2" value={title}  onChange={(e)=> setTitle(e.target.value)}/>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Upload product photo</p>
          <div className="input-loyalty2">
            <label
              for="dropzone-file"
              className="flex justify-end bg-white  shadow rounded-md w-full "
              onChange={(event)=> setImage(event.target.files[0])}
            >
              {image?.name}
              <div className="upload-file">
                <p className="text-sm">UPLOAD</p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>
        </div>
        <p className="text-lg font-semibold pt-4">Address</p>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Enter your Postcode</p>
          <input type="text" className="input-loyalty2" value={postCode}  onChange={(e)=> setPostCode(e.target.value)} />
        </div>
        {/* <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Select Your Address</p>
          <select
            id="countries"
            // value={selectedOption}
            // onChange={handleChange}
            className="input-loyalty2"
          >
            <option className="font-semibold" value="">
   
            </option>
          </select>
        </div> */}
        <div className="my-4">
          <p className="text-lg font-semibold pb-2">
            Enter your Address Manually
          </p>
          <div className="flex gap-4 mb-4">
            <input type="text" className="input-loyalty2" value={firstLineAddress}  onChange={(e)=> setFirstLineAddress(e.target.value)} placeholder="First Address"  />
            <input type="text" className="input-loyalty2" value={secondLineAddress}  onChange={(e)=> setSecondLineAddress(e.target.value)}  placeholder="Second Address"  />
          </div>
          <div className="flex gap-4 mb-4">
            <input type="text" className="input-loyalty2" value={city}  onChange={(e)=> setCity(e.target.value)} placeholder="city" />
            <input type="text" className="input-loyalty2" value={state}  onChange={(e)=> setState(e.target.value)} placeholder="state" />
          </div>
          <div className="flex gap-4">
            <input type="text" className="input-loyalty2" value={country}  onChange={(e)=> setCountry(e.target.value)} placeholder="country" />
          </div>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Opening Time</p>
          <input type="time" className="input-loyalty2" value={openingTime}  onChange={(e)=> setOpeningTime(e.target.value)} placeholder="" />
        </div>
        <div className="my-4">
          <p className="text-lg font-semibold pb-2">Closing Time</p>
          <input type="time" className="input-loyalty2" value={closingTime}  onChange={(e)=> setClosingTime(e.target.value)} placeholder="" />
        </div>
        <div className="flex justify-center my-4">
          <button
            className="inventory-button2"
            onClick={handleCreateOutlate}
          >
            SAVE
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddOutlate2;
