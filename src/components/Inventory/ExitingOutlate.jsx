import React from "react";
import { useNavigate } from "react-router-dom";

const ExitingOutlate = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-2xl font-bold">Existing Outlet</p>
        <div
          className="inventory-button2"
          onClick={() => navigate("/inventory/adding-outlate")}
        >
          <img src="../../Mask group (11).png" alt="" />
          <p>ADD OUTLET</p>
        </div>
      </div>
      <div className="loyalty-form-container">
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Outlet Name</p>
          <input type="text" className="input-loyalty2" value="Café Elite" />
        </div>
        <p className="text-lg font-semibold pt-4">Address</p>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Enter your Postcode</p>
          <input type="text" className="input-loyalty2" value="M35J5" />
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Select Your Address</p>
          <select
            id="countries"
            // value={selectedOption}
            // onChange={handleChange}
            className="input-loyalty2"
          >
            <option className="font-semibold" value="custom">
              M35J5
            </option>
          </select>
        </div>
        <div className="my-4">
          <p className="text-lg font-semibold pb-2">
            Enter your Address Manually
          </p>
          <div className="flex gap-4 mb-4">
            <input
              type="text"
              className="input-loyalty2"
              value="First Line of Address"
            />
            <input
              type="text"
              className="input-loyalty2"
              value="Second Line of Address"
            />
          </div>
          <div className="flex gap-4 mb-4">
            <input type="text" className="input-loyalty2" value="City" />
            <input type="text" className="input-loyalty2" value="Post Code" />
          </div>
          <div className="flex gap-4">
            <input
              type="text"
              className="input-loyalty2"
              value="Country(Optional)"
            />
            <input type="text" className="input-loyalty2" value="Country" />
          </div>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Opening Time</p>
          <select
            id="countries"
            // value={selectedOption}
            // onChange={handleChange}
            className="input-loyalty2"
          >
            <option className="font-semibold" value="custom">
              9:00 AM
            </option>
          </select>
        </div>
        <div className="my-4">
          <p className="text-lg font-semibold pb-2">Closing Time</p>
          <select
            id="countries"
            // value={selectedOption}
            // onChange={handleChange}
            className="input-loyalty2"
          >
            <option className="font-semibold" value="custom">
              9:00 PM
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ExitingOutlate;
