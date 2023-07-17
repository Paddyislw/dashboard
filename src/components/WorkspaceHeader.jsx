import React from "react";
import { ReactComponent as Add } from "../static/svg/add.svg";

const WorkspaceHeader = () => {
  return (
    <div className="flex justify-between w-full border-b border-gray-200 pb-6 items-center">
      <p className="text-xl font-semibold">Orders</p>
      <div className="flex items-center space-x-2 p-2 text-white bg-[#1B59F8] rounded-lg">
        <Add className="w-5"/>
        <p className="text-sm">Add Order</p>
      </div>
    </div>
  );
};

export default WorkspaceHeader;
