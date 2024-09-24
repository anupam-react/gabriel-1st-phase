// Layout.js
import React from "react";
import Sidebar from "./components/common/Sidebar";
import Navbar from "./components/common/Navbar";
import useProfile from "./hooks/useProfile";

const Layout = ({ children }) => {
  const {profile} = useProfile()
  return (
    <div className="">
      <Navbar data={profile}/>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-6" style={{ backgroundColor: "#EEEEEE" }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
