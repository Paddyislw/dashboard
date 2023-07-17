import React, { useState } from "react";
import { ReactComponent as Search } from "../static/svg/Search.svg";
import { ReactComponent as Down } from "../static/svg/down.svg";

const TableHeader = ({
  search,
  setSearch,
  sort,
  setSort,
  handleSearchChange,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div className="flex justify-between">
      <div className="text-[#16C098]">Active Members</div>
      <div className="flex space-x-2">
        <div className="bg-gray-100 p-2 rounded-lg flex space-x-2 items-center">
          <Search className="w-6 text-gray-400" />
          <input
            type="text"
            className="focus:outline-none bg-gray-100"
            placeholder="Search"
            value={search}
            onChange={(e) => handleSearchChange(e)}
          />
        </div>
        <div className="relative">
          <div
            className="bg-gray-100 py-2 px-4 rounded-lg flex space-x-2 items-center text-gray-500 cursor-pointer "
            onClick={() => setShowDropdown((prev) => !prev)}
          >
            <p className="">Sort By:</p>
            <p className="text-black font-semibold">{sort}</p>

            <Down className="w-6" />
          </div>
          {showDropdown && (
            <div className="absolute right-0 bg-white border  rounded-lg cursor-pointer">
              {dropDownData.map((item) => (
                <div
                  key={item}
                  className="hover:bg-gray-100 py-1 px-6"
                  onClick={() => {
                    setSort(item);
                    setShowDropdown(false)
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const dropDownData = ["All", "Active", "Inactive"];

export default TableHeader;
