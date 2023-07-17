import React from "react";
import { ReactComponent as Dashboard } from "../static/svg/Dashboard.svg";
import { ReactComponent as Reports } from "../static/svg/Reports.svg";
import { ReactComponent as Setting } from "../static/svg/Setting.svg";
import logo from "../static/icons/logo.png";
import clsx from "clsx";

const Sidebar = ({ currentTab, setCurrentTab }) => {
  return (
    <div className="py-4 px-6 w-[250px] ">
      <img src={logo} alt="" className="w-[70px] h-[47px] mx-auto" />
      <div className="space-y-4 mt-8">
        {sidebarItems.map((item) => (
          <div
            key={item.label}
            className={clsx(
              "flex items-center space-x-2 font-semibold w-[200px] hover:bg-[#e8eefe] px-2 py-3 cursor-pointer rounded-lg",
              currentTab === item.value && "bg-[#e8eefe] text-[#1b59f8]"
            )}
            onClick={() => setCurrentTab(item.value)}
          >
            <div>{item.icon}</div>
            <div>{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const sidebarItems = [
  { label: "Reports", value: "reports", icon: <Reports className="w-6" /> },
  {
    label: "Workspaces",
    value: "workspaces",
    icon: <Dashboard className="w-6" />,
  },
  { label: "Settings", value: "settings", icon: <Setting className="w-6" /> },
];

export default Sidebar;
