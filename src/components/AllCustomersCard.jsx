import React from "react";
import Completion from "../global/Completion";

const AllCustomersCard = () => {
  return (
    <div className="border shadow-xl max-w-[600px] py-6 px-5 rounded-2xl bg-white">
      <p className="text-lg font-semibold mb-2">All Customers</p>
      <div className="flex space-x-3 w-full justify-between mt-4">
        {customersData.map((item) => (
          <div key={item.label} className="flex flex-col items-center">
            <Completion color={item.color} completion={item.value} />   
            <p className="text-gray-500 text-sm font-semibold text-center mt-1">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const customersData = [
  { label: "Current Customers", value: 85, color: "#5F27CD" },
  { label: "New Customers", value: 66, color: "#94d5c6" },
  { label: "Target Customers", value: 90, color: "#FF6B6B" },
  { label: "Retarget Customers", value: 30, color: "#FFC5C5" },
];

export default AllCustomersCard;
