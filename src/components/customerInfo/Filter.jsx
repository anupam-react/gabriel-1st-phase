import React, { useState } from "react";
import { DatePickerComp2 } from "./DatePickerComp2";
import "./index.scss";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
const Filter = ({ closeDrawer, open , getCustomer }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [selectedOption, setSelectedOption] = useState("");

  const handleCheckboxChange = (group) => {
    setSelectedOption(group);
  };

  return (
    <React.Fragment>
      <Drawer
        open={open}
        onClose={closeDrawer}
        direction="right"
        className="bla bla bla"
        size={350}
      >
        <div className="filterContainer">
          <div className="filter-body">
            <div className="mb-6 flex items-center justify-between">
              <div onClick={closeDrawer}>
                <img
                  src="./Mask group (2).png"
                  alt=""
                  className="w-10 cursor-pointer"
                />
              </div>
              <h5 className="text-xl font-semibold">
                Filter
              </h5>
              <div onClick={closeDrawer}>
                <img
                  src="./close-outline 1.svg"
                  alt=""
                  className="w-10 cursor-pointer"
                />
              </div>
            </div>
            <hr className="my-4" style={{ backgroundColor: "#E3E3E5" }} />
            <p className="joint-date">Date Joined</p>
            <select
              id="countries"
              // value={selectedOption}
              // onChange={handleChange}
              className="rounded shadow-md text-gray-900 text-sm border-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option className="font-semibold" value="custom">
                WEEKLY
              </option>
              <option className="font-semibold" value="custom">
              MONTHLY
              </option>
              <option className="font-semibold" value="custom">
              YEARLY
              </option>
              <option className="font-semibold" value="custom">
                CUSTOM
              </option>
            </select>
            <div className="calender">
              <div>
                <p>From</p>
                <DatePickerComp2  startDate={startDate}
                    setStartDate={setStartDate}/>
              </div>
              <div>
                <p>To</p>
                <DatePickerComp2  startDate={endDate}
                    setStartDate={setEndDate}/>
              </div>
            </div>
            <p className="joint-date">Referral Source</p>
            <div className="checkbox-container">
              <div className="checkbox-filter">
                <label className="checkbox1 text1 ">
                  Marketing Campaign
                  <input
                    type="checkbox"
                    checked={selectedOption === 'Market campaign'}
                    onChange={()=>handleCheckboxChange('Market campaign')}
                  />
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="checkbox-filter">
                <label className="checkbox1 text1 ">
                  Organic Means
                  <input
                    type="checkbox"
                    checked={selectedOption === 'Organic means'}
                    onChange={()=>handleCheckboxChange('Organic means')}
                  />
                  <span class="checkmark"></span>
                </label>
              </div>
          
            </div>
          </div>
          <div className="button-container">
            <button
              className="button2"
                onClick={() => {
                  getCustomer("", startDate , endDate , selectedOption);
                  closeDrawer()
                }}
            >
              APPLY
            </button>
            <button
              className="button4"
                onClick={() => {
                  getCustomer();
                  closeDrawer()
                }}
            >
              RESET
            </button>
          </div>
        </div>
      </Drawer>
    </React.Fragment>
  );
};

export default Filter;
