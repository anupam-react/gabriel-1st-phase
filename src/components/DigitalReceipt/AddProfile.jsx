import React, { useEffect, useRef } from "react";
import "./index.scss";
const AddProfile = ({
  onClose,
  show,
  data,
  setStaffId,
  staffId = [],
  selectStaff = [],
  setSelectStaff,
}) => {
  const popupRef = useRef();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (show) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [show, onClose]);
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 z-50 flex justify-center items-center">
      <div ref={popupRef} className="bg-white p-4 rounded shadow-lg w-[300px]">
        <div className="flex items-center px-6 h-12 input-loyalty">
          <img src="./image 2 (3).svg" alt="search" className="w-6 h-6" />
          <input
            type="text"
            className="search w-[150px]"
            placeholder="Search"
          />
        </div>
        <div className="h-[200px] overflow-auto flex flex-col gap-3 mt-4 p-2">
          {data?.docs?.map((d, i) => (
            <div className="flex justify-between items-center">
              <div className="flex gap-4 items-center">
                <img src={d?.image} alt="" />
                <p>{d?.firstName + " " + d?.lastName}</p>
              </div>
              <img
                src="./Mask group (10).png"
                alt=""
                className="w-6 h-6"
                onClick={() => {
                  setStaffId([...staffId, d?._id]);
                  setSelectStaff([...selectStaff, d]);
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddProfile;
