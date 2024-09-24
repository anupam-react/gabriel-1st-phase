import React, { useEffect, useState } from "react";
import { AccordionCustomIcon } from "./Accordian";
import "./index.scss";
import { fetchApiData } from "../../utiils";
const Support = () => {
  const [faq, setFaq] = useState([])
  async function getFaq() {
    const data = await fetchApiData(
      "https://money-chat.com/api/api/v1/static/faq/All"
    );
    setFaq(data?.data);
  }

  useEffect(() => {
    getFaq()
  }, [faq?.length])
  
  return (
    <div>
      <p className="font-semibold text-xl py-6">Support & Help Desk</p>
      <div className="flex items-center px-6 h-12 bg-[white] rounded-md">
        <img src="../image 2 (3).svg" alt="search" className="w-6 h-6" />
        <input type="text" className="search w-full" placeholder="Search" />
      </div>
      <div className="supportContainer">
        <p className="text-[#0070BC] text-lg font-semibold">
          FREQUENTLY ASKED QUESTIONS ( FAQ’S )
        </p>
        <div>
          <AccordionCustomIcon data={faq}/>
        </div>
        <img src="./Component 32.png" alt="" className="message-box" />
      </div>
    </div>
  );
};

export default Support;
