import React from "react";
import { useNavigate } from "react-router-dom";

const AddOutlate = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-2xl font-bold">Adding Outlet</p>
        <div
          className="inventory-button2"
          onClick={() => navigate("/inventory/existing-outlate")}
        >
          <img src="../../Mask group (11).png" alt="" />
          <p>ADD OUTLET</p>
        </div>
      </div>
      <div className="loyalty-form-container">
        <div className="mt-4">
          
          <input type="text" className="input-loyalty2" value="Café Elite" />
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Address</p>
          <textarea
            className="input-loyalty2"
            value="25 Moorside Road 
Salford Kersal Moor
M3 5JS
Manchester , United Kingdom"
            name=""
            id=""
            rows="4"
          ></textarea>
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

export default AddOutlate;
