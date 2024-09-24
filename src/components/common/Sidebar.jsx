import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const rootPath = location.pathname.split('/')[1];
  console.log(rootPath)
  const [activeLink, setActiveLink] = useState(0);
  const handleLinkClick = (index) => {
    setActiveLink(index);
  };
  return (
    <div>
      <aside
        id="logo-sidebar"
        className="z-10 transition-transform -translate-x-full sm:translate-x-0 h-[100%]"
        style={{ backgroundColor: "#FFFFFF", color: "#00000080" }}
        aria-label="Sidebar"
      >
        <div className="h-full">
          <ul className="space-y-4 font-medium p-6">
            <li className="pb-4">
              <Link
                to="/transaction"
                className={`flex items-center add-hover ${
                  rootPath === "transaction" && "text-[#0070BC]"
                }`}
                onClick={() => handleLinkClick(0)}
              >
                <img src="./Mask group (1).png" alt="" className="w-5 h-5" />
                <span className="ms-3">Transaction Data</span>
              </Link>
            </li>
            <li className="pb-4">
              <Link
                to="/customer"
                className={`flex items-center add-hover dark:text-white  dark:hover:bg-gray-700 group ${
                  rootPath === "customer" && "text-[#0070BC]"
                }`}
                onClick={() => handleLinkClick(1)}
              >
                <img
                  src="./radix-icons_avatar.png"
                  alt=""
                  className="w-6 h-6"
                />
                <span className="ms-3">Customer Information</span>
              </Link>
            </li>
            <li className="pb-4">
              <Link
                to="/sales"
                className={`flex items-center add-hover dark:text-white  dark:hover:bg-gray-700 group ${
                  rootPath === "sales" && "text-[#0070BC]"
                }`}
                onClick={() => handleLinkClick(2)}
              >
                <img
                  src="./icon-park-outline_sales-report.png"
                  alt=""
                  className="w-6 h-6"
                />
                <span className="ms-3">Sales Analytics</span>
              </Link>
            </li>
            {/* <li className="pb-4">
              <Link
                to="/loyalty"
                className={`flex items-center add-hover dark:text-white  dark:hover:bg-gray-700 group ${
                  rootPath === "loyalty" && "text-[#0070BC]"
                }`}
                onClick={() => handleLinkClick(3)}
              >
                <img src="./la_gifts.png" alt="" className="w-6 h-6" />
                <span className="ms-3">Loyalty Program Management</span>
              </Link>
            </li> */}
            <li className="pb-4">
              <Link
                to="/marketing"
                className={`flex items-center add-hover dark:text-white  dark:hover:bg-gray-700 group ${
                  rootPath === "marketing" && "text-[#0070BC]"
                }`}
                onClick={() => handleLinkClick(4)}
              >
                <img src="./nimbus_marketing.png" alt="" className="w-6 h-6" />
                <span className="ms-3">Marketing Campaign</span>
              </Link>
            </li>
            {/* <li className="pb-4">
              <Link
                to="/receipt"
                className={`flex items-center add-hover dark:text-white  dark:hover:bg-gray-700 group ${
                  rootPath === "receipt" && "text-[#0070BC]"
                }`}
                onClick={() => handleLinkClick(5)}
              >
                <img
                  src="./akar-icons_reciept.png"
                  alt=""
                  className="w-6 h-6"
                />
                <span className="ms-3">Digital Receipt</span>
              </Link>
            </li> */}
            <li className="pb-4">
              <Link
                to="/inventory"
                className={`flex items-center add-hover dark:text-white  dark:hover:bg-gray-700 group ${
                  rootPath === "inventory" && "text-[#0070BC]"
                }`}
                onClick={() => handleLinkClick(6)}
              >
                <img
                  src="./mingcute_inventory-line.png"
                  alt=""
                  className="w-6 h-6"
                />
                <span className="ms-3">Inventory Integration</span>
              </Link>
            </li>
            <li className="pb-4">
              <Link
                to="/comparison"
                className={`flex items-center add-hover dark:text-white  dark:hover:bg-gray-700 group ${
                  rootPath === "comparison" && "text-[#0070BC]"
                }`}
                onClick={() => handleLinkClick(7)}
              >
                <img
                  src="./ic_round-compare-arrows.png"
                  alt=""
                  className="w-6 h-6"
                />
                <span className="ms-3">Comparison</span>
              </Link>
            </li>
            {/* <li className="pb-4">
              <Link
                to="/promo-code"
                className={`flex items-center add-hover dark:text-white  dark:hover:bg-gray-700 group ${
                  rootPath === "promo-code" && "text-[#0070BC]"
                }`}
                onClick={() => handleLinkClick(8)}
              >
                <img
                  src="./mynaui_percentage-waves.png"
                  alt=""
                  className="w-6 h-6"
                />
                <span className="ms-3">Promo Code</span>
              </Link>
            </li> */}
            <li className="pb-4">
              <Link
                to="/purchases"
                className={`flex items-center add-hover dark:text-white  dark:hover:bg-gray-700 group ${
                  rootPath === "purchases" && "text-[#0070BC]"
                }`}
                onClick={() => handleLinkClick(9)}
              >
                <img src="./carbon_purchase.png" alt="" className="w-6 h-6" />
                <span className="ms-3">Purchases</span>
              </Link>
            </li>
            {/* <li className="pb-4">
              <Link
                to="/heatmap"
                className={`flex items-center add-hover dark:text-white  dark:hover:bg-gray-700 group ${
                  rootPath === "heatmap" && "text-[#0070BC]"
                }`}
                onClick={() => handleLinkClick(10)}
              >
                <img src="./bx_map.png" alt="" className="w-6 h-6" />
                <span className="ms-3">Heat Maps</span>
              </Link>
            </li> */}
            <li className="pb-4">
              <Link
                to="/feedback"
                className={`flex items-center add-hover dark:text-white  dark:hover:bg-gray-700 group ${
                  rootPath === "feedback" && "text-[#0070BC]"
                }`}
                onClick={() => handleLinkClick(11)}
              >
                <img
                  src="./fluent_person-feedback-20-regular.png"
                  alt=""
                  className="w-6 h-6"
                />
                <span className="ms-3">Customer Feedback</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
