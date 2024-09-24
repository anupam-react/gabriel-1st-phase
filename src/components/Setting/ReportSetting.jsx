import React, { useState } from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import { DialogDefault } from "../common/DilogBox";
import useSetting from "../../hooks/useSetting";
import useAccount from "../../hooks/useAccount";
const ReportSetting = () => {
  const {
    image,
    setImage,
    automaticReportSchedule,
    setAutomaticReportSchedule,
    sendReportTo,
    setSendReportTo,
    isMaximumFailedTransactionStatus,
    setIsMaximumFailedTransactionStatus,
    isMaximumFailedTransactionValueCrossed,
    setIsMaximumFailedTransactionValueCrossed,
    maximumFailedTransactionStatus,
    setMaximumFailedTransactionStatus,
    maximumFailedTransactionValueCrossed,
    setMaximumFailedTransactionValueCrossed,
    handleUpdateReport,
  } = useSetting();

  const { staff } = useAccount();

  const toggleStaffSelection = (staff) => {
    const isSelected = selectStaff.includes(staff);
    if (isSelected) {
      setSelectStaff(selectStaff?.filter((d) => d?._id !== staff?._id));
      setSendReportTo(sendReportTo?.filter((id) => id !== staff?._id));
    } else {
      setSelectStaff([...selectStaff, staff]);
      setSendReportTo([...sendReportTo, staff?._id]);
    }
  };

  console.log(staff);

  const [isAddEmp, setAddEmp] = useState(false);
  const [openAddEmp, setOpenAddEmp] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [selectStaff, setSelectStaff] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (event) => {
    setAutomaticReportSchedule(event.target.value);
  };
  const MonthOptions = [
    { label: "Daily", value: "Daily" },
    { label: "Weekly", value: "Weekly" },
    { label: "Monthly", value: "Monthly" },
    { label: "Half-Yearly", value: "Half-Yearly" },
    { label: "Yearly", value: "Yearly" },
  ];
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-[#0070BC] font-semibold">
          <span className="cursor-pointer" onClick={() => navigate("/setting")}>
            Settings {">"}{" "}
          </span>
          <span className="text-[#000000] text-lg">Report Settings</span>{" "}
        </p>
        <button className="back" onClick={() => navigate("/setting")}>
          <img src="../back.png" alt="" />
          Back
        </button>
      </div>
      <div className="notificationConatiner">
        <p className="text-[#0070BC] font-semibold">MANUAL REPORT GENERATION</p>
        <div>
          <p className="text-[#000000B2] pb-4">Export Location</p>
          <div className="flex justify-between items-center px-6 h-12 input-loyalty">
            <div className="flex gap-6">
              <img src="../image 73.png" alt="search" className="w-6 h-6" />
              <img src={image} alt="search" className="w-6 h-6" />
              <p>{image?.name}</p>
            </div>
            <label
              for="fileUpload"
              className="flex gap-4 items-center cursor-pointer"
            >
              <img
                src="../Mask group (16).png"
                alt="search"
                className="w-6 h-6"
              />
              <p className="text-[#FEA82F] font-bold">CHANGE</p>
            </label>
            <input
              type="file"
              id="fileUpload"
              className="hidden"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
        </div>
        <div>
          <p className="text-[#0070BC] font-semibold pb-3">
            AUTOMATIC REPORT GENERATION
          </p>
          <p className="pb-5">
            Change & Manage your scheduling for Automatic Report Generation
          </p>
          <div className="mb-6">
            <p className="text-[#000000B2] pb-3 font-semibold">
              Automatic Reports Schedule
            </p>
            <select
              id="countries"
              value={automaticReportSchedule}
              onChange={handleChange}
              className="rounded shadow-md text-gray-900 text-sm  border-none block w-[400px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              {MonthOptions?.map((data, i) => (
                <>
                  <option className="font-semibold" key={i} value={data?.value}>
                    {data?.label}
                  </option>
                </>
              ))}
            </select>
          </div>
          <div>
            <p className="text-[#000000B2] pb-3 font-semibold">
              Send Reports to :
            </p>
            <div
              className="flex items-center px-6 h-12 input-loyalty"
              style={{ background: "#EEEEEE80", width: "400px" }}
            >
              <img src="../image 2 (3).svg" alt="search" className="w-6 h-6" />
              <input type="text" className="search" placeholder="Search" />
            </div>
          </div>
          <div className="flex flex-wrap gap-4 mt-6">
            {selectStaff?.map((d) => (
              <div className="report-profile" style={{ width: "200px" }}>
                <img src="../Ellipse 11.png" alt="search" className="w-7 h-7" />
                <p> {d?.firstName + " " + d?.lastName}</p>
                <img
                  src="../Mask group (14).png"
                  alt="search"
                  className="w-5 h-5 cursor-pointer"
                  onClick={() => toggleStaffSelection(d)}
                />
              </div>
            ))}

            <div
              className="flex items-center gap-4 cursor-pointer"
              onClick={() => setOpenAddEmp(true)}
            >
              <img src="../Mask group (15).png" alt="" className="w-6 h-6" />
              <p className="text-[#0070BC] font-semibold">ADD</p>
            </div>
          </div>
        </div>
        <div>
          <p className="font-semibold text-black">Add Trigers</p>
          <p className="text-[#000000B2] py-4">
            Add triggers to notify & automatically send the report whenever
            following conditions are met
          </p>
          <div className="flex flex-col gap-6 mb-4">
            <div className="flex items-start gap-6">
              <label className="inline-flex items-center me-5 cursor-pointer">
                <input
                  type="checkbox"
                  value="Maximum Number Of Transaction Crossed"
                  className="sr-only peer"
                  onChange={() =>
                    setIsMaximumFailedTransactionStatus(
                      !isMaximumFailedTransactionStatus
                    )
                  }
                  checked={isMaximumFailedTransactionStatus}
                />
                <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
              </label>

              <div className="flex flex-col gap-4">
                <span className="font-semibold text-black dark:text-gray-300 ">
                  Maximum Number Of Transaction Crossed
                </span>
                <div className="relative w-[500px] group ">
                  <input
                    type="name"
                    name="name"
                    id="name"
                    value={maximumFailedTransactionStatus}
                    onChange={(e) =>
                      setMaximumFailedTransactionStatus(e.target.value)
                    }
                    className="rounded shadow-md text-[#000000B2] text-sm  border-none block w-[500px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    onClick={() => {
                      setIsEditing(1);
                    }}
                    // onChange={(e) => setPassword(e.target.value)}
                  />
                  {isEditing === 1 ? (
                    <span
                      onClick={() => setIsEditing(false)}
                      className="text-green-500 font-semibold absolute top-2 right-4 cursor-pointer"
                    >
                      SAVE
                    </span>
                  ) : (
                    <img
                      src="../Mask group (16).png"
                      alt=""
                      onClick={() => {
                        setIsEditing(1);
                      }}
                      className="w-5 h-5 absolute top-2 right-4 cursor-pointer opacity-0 group-hover:opacity-100"
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <label className="inline-flex items-center me-5 cursor-pointer">
                <input
                  type="checkbox"
                  value="Maximum Transaction Value Crossed"
                  className="sr-only peer"
                  placeholder="Add Value ( e.g 1,00,000 )"
                  onChange={() =>
                    setIsMaximumFailedTransactionValueCrossed(
                      !isMaximumFailedTransactionValueCrossed
                    )
                  }
                  checked={isMaximumFailedTransactionValueCrossed}
                />
                <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
              </label>
              <div className="flex flex-col gap-4">
                <span className="font-semibold text-black dark:text-gray-300">
                  Maximum Transaction Value Crossed
                </span>
                <div className="relative w-[500px] group ">
                  <input
                    type="name"
                    name="name"
                    id="name"
                    placeholder="Add Value ( e.g 1,00,000 )"
                    value={maximumFailedTransactionValueCrossed}
                    onChange={(e) =>
                      setMaximumFailedTransactionValueCrossed(e.target.value)
                    }
                    className="rounded shadow-md text-[#000000B2] text-sm  border-none block w-[500px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    onClick={() => {
                      setIsEditing(2);
                    }}
                    // onChange={(e) => setPassword(e.target.value)}
                  />
                  {isEditing === 2 ? (
                    <span
                      onClick={() => setIsEditing(false)}
                      className="text-green-500 font-semibold absolute top-2 right-4 cursor-pointer"
                    >
                      SAVE
                    </span>
                  ) : (
                    <img
                      src="../Mask group (16).png"
                      alt=""
                      onClick={() => {
                        setIsEditing(2);
                      }}
                      className="w-5 h-5 absolute top-2 right-4 cursor-pointer opacity-0 group-hover:opacity-100"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            className="back2 text-center"
            onClick={() => {
              handleUpdateReport();
              navigate("/setting");
            }}
          >
            SAVE
          </button>
        </div>
      </div>

      <DialogDefault open={openAddEmp} handleOpen={setOpenAddEmp}>
        <div className="p-6 w-[500px]">
          <p className="text-center text-[#0070BC] font-[600]">
            ADD AN EMPLOYEE WHO YOU WANT TO RECEIVE DAILY BUSINESS PERFORMANCE
            REPORT
          </p>
          <div className="cross-image2">
            <img
              src="../Mask group (2).png"
              alt=""
              className=""
              onClick={() => {
                setOpenAddEmp(false);
              }}
            />
          </div>
          <p className="text-[#000000B2] text-[18px] font-[500] pb-2 mt-6">
            Add Employee
          </p>
          <div
            className="relative w-full mb-6 cursor-pointer"
            onClick={() => setAddEmp(!isAddEmp)}
          >
            <input
              id="countries"
              //   value={selectedOption}
              //   onChange={handleChange}
              className="report-input w-full"
              placeholder="Search Employee"
            />

            <img
              src="../Arrow 6.png"
              alt=""
              className="absolute top-3 right-2 cursor-pointer"
            />
            {isAddEmp && (
              <div className="addEmp bg-[white] flex flex-col gap-2  rounded-md p-4">
                {staff?.docs?.map((emp, i) => (
                  <div
                    className={
                      selectStaff?.includes(emp)
                        ? "flex items-center gap-2 cursor-pointer bg-green-400"
                        : "flex items-center gap-2 cursor-pointer"
                    }
                    key={i}
                    onClick={() => {
                      setSendReportTo([...sendReportTo, emp?._id]);
                      setSelectStaff([...selectStaff, emp]);
                    }}
                  >
                    <img
                      src=""
                      alt=""
                      className="w-[20px] h-[20px] rounded-full "
                    />
                    <p> {emp?.firstName + " " + emp?.lastName} , </p>
                    <p>Id :{emp?.employeeId}.</p>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="flex justify-center">
            <button
              className="back2 text-center"
              onClick={() => {
                setOpenSuccess(true);
                setTimeout(() => {
                  setOpenAddEmp(false);
                  setOpenSuccess(false);
                }, 2000);
              }}
            >
              ADD
            </button>
          </div>
        </div>
      </DialogDefault>
      <DialogDefault open={openSuccess} handleOpen={setOpenSuccess}>
        <div className="alert">
          <img src="../Vector (2).png" alt="" />
          <p className="text-center text-lg ">
            You’ve successfully added an employee
          </p>
        </div>
      </DialogDefault>
    </div>
  );
};

export default ReportSetting;
