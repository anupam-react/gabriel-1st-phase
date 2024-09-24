import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Initialpage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  }, []);

  return (
    <div className="w-full h-[90vh] flex justify-center items-center">
      <img src="./MoneyChat_Limited_104640_page-0001.jpg" alt="" className="w-[50vw]" />
    </div>
  );
};

export default Initialpage;
