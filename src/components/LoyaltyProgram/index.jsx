import React, { useState } from "react";
import "./index.scss";
import LoyalityCard from "./LoyalityCard";
import LoyaltyReport from "./LoyaltyReport";
import LoyaltyFilter from "./LoyaltyFilter";
import { useNavigate } from "react-router-dom";
import useLoyality from "../../hooks/useLoyality";
import PointCard from "./PointCard";
const LoyaltyProgram = () => {
  const {
    stamps,
    saving,
    points,
    getStampSystemByToken,
    getMakeASavingByToken,
    getSpendMyPointByToken,
  } = useLoyality();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleOpen = () => setOpen(!open);
  const closeDrawer = () => setIsOpen(false);

  console.log(stamps, saving, points);

  return (
    <div>
      
      <div className="flex justify-between items-center mb-4">
      <p className="text-2xl font-bold mb-6">Loyalty Program Management</p>
        {/* <div
          className="flex items-center px-6 h-12"
          style={{
            backgroundColor: "#FFFF",
            width: "25rem",
            borderRadius: "12px",
            color: "#8BA3CB",
          }}
        >
          <img src="./image 2 (3).svg" alt="search" className="w-6 h-6" />
          <input
            type="text"
            className="border-none w-80 bg-transparent outline-none focus:ring-0 focus:shadow-none focus:border-none"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              getStampSystemByToken(e.target.value)
              getMakeASavingByToken(e.target.value)
              getSpendMyPointByToken(e.target.value)
            }}
          />
        </div> */}
        <div className="flex">
          <button
            className="flex items-center gap-2"
            onClick={() => setIsOpen(true)}
          >
            <img src="./Mask group (8).png" alt="" className="w-5 h-5" />
            <p className="text-[#0070BC] font-semibold">FILTERS</p>
          </button>
        </div>

        <div className="flex">
          <button className="export flex gap-2" onClick={() => setOpen(true)}>
            <img src="./Mask group (7).svg" alt="" className="w-5 h-5" />
            <p>REPORT</p>
          </button>
        </div>
      </div>
      <div className="flex justify-between gap-4">
        <div
          className="program-button"
          onClick={() => navigate("/loyalty/point-system")}
        >
          <img src="./image 698 (2).png" alt="" />
          <p>Point System</p>
        </div>
        <div
          className="program-button"
          onClick={() => navigate("/loyalty/stamp-system")}
        >
          <img src="./image 701 (3).png" alt="" />
          <p>Stamp System</p>
        </div>
        <div
          className="program-button"
          onClick={() => navigate("/loyalty/saving")}
        >
          <img src="./image 698 (1).png" alt="" />
          <p>Make a Saving</p>
        </div>
        <div
          className="program-button"
          onClick={() => navigate("/loyalty/point")}
        >
          <img src="./image 698 (2).png" alt="" />
          <p>Spent My Point</p>
        </div>
      </div>
      <div className="mt-4">
        <div>
          <p className="py-4 font-semibold text-[24px]">My Stamp Cards</p>
          <div className="flex flex-wrap gap-4 justify-between">
            {stamps?.map((d, i) => (
              <LoyalityCard
                image={d?.productId?.image}
                key={i}
                stamps={d?.totalNoOfStamps}
                text={d?.description}
              />
            ))}
          </div>
        </div>
        <div>
          <p className="py-4 font-semibold text-[24px]">My Saving</p>
          <div className="flex flex-wrap gap-4 justify-between">
            {saving?.map((d, i) => (
             <div key={i}>
                 <img src={d?.image} alt="" className='w-[320px] h-[150px] rounded-lg'/>
                 <p className='text-[#646464] font-semibold w-[320px]'>{d?.title}</p>
           </div>
            ))}
          </div>
        </div>
        <div>
          <p className="py-4 font-semibold text-[24px]">Spend My Points</p>
          <div className="flex flex-wrap gap-4 justify-between">
            {points?.map((d, i) => (
              <PointCard
                image={d?.image}
                key={i}
                point={d?.noOfPoint}
                text={d?.productId?.name}
              />
            ))}
          </div>
        </div>
      </div>
      <LoyaltyReport
        open={open}
        setOpen={setOpen}
        handleOpen={handleOpen}
   
      />
      <LoyaltyFilter closeDrawer={closeDrawer} open={isOpen} getStampSystemByToken={getStampSystemByToken}
    getMakeASavingByToken={getMakeASavingByToken}
    getSpendMyPointByToken={getSpendMyPointByToken}/>
    </div>
  );
};

export default LoyaltyProgram;
