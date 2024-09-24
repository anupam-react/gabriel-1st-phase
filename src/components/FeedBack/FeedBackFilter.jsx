import React, { useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { DatePickerComp2 } from "../customerInfo/DatePickerComp2";
import { formatDate2 } from "../../utiils";
import Select1 from "../common/Select1";


const FeedBackFilter = ({ closeDrawer, open , getAllFeedback }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [selectedOption2, setSelectedOption2] = useState("");
  const [openCustom2, setOpenCustom2] = useState(false);
  const handleChange2 = (event) => {
    setSelectedOption2(event.target.value);
    if (event.target.value === "custom") {
      setOpenCustom2(true);
    } else {
      getAllFeedback(event.target.value);
    }
  };
  return (
    <React.Fragment>
      <Drawer
        open={open}
        onClose={closeDrawer}
        direction="right"
        className="bla bla bla"
        size={400}
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
              <h5 className="text-xl font-semibold">Filter</h5>
              <div onClick={closeDrawer}>
                <img
                  src="./close-outline 1.svg"
                  alt=""
                  className="w-10 cursor-pointer"
                />
              </div>
            </div>
            <hr className="my-4" style={{ backgroundColor: "#E3E3E5" }} />
            <div className="p-2">
              <div className="mt-4">
                <p className="text-lg font-semibold pb-4">Date Range</p>
                <Select1
            selectedOption={selectedOption2}
            handleChange={handleChange2}
            open={openCustom2}
            setOpen={setOpenCustom2}
            handleSave={getAllFeedback}
          />
              </div>
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

            </div>
          </div>
          <div className="button-container">
            <button
              className="button2"
                onClick={() => {
                  getAllFeedback("",selectedOption2,  formatDate2(endDate) , formatDate2(startDate))
                  closeDrawer()
                }}
            >
              APPLY
            </button>
            <button
              className="button4"
                onClick={() => {
                  getAllFeedback()
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

export default FeedBackFilter;
