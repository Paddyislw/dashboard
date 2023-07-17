import React, { useEffect, useState } from "react";

const StatsOverview = () => {
  const [activeWidth, setActiveWidth] = useState(0);
  const [inactiveWidth, setInactiveWidth] = useState(0);

  useEffect(() => {
    setActiveWidth(63);
    setInactiveWidth(88);
  }, []);

  return (
    <div className="border shadow-xl max-w-[500px] pt-4 px-5 rounded-2xl bg-white space-y-4">
      <p className="text-lg font-semibold mb-2">Stats Overview</p>
      <div>
        <p className="text-gray-500 font-semibold  ">Active</p>
        <div className="h-2 rounded-xl bg-gray-300 w-[300px]">
          <div
            className={`bg-[#16C098] h-2 rounded-xl duration-[1700ms] transition-all ease-in-out `}
            style={{ width: `${activeWidth}%` }}
          ></div>
          <p className="text-right text-gray-500 font-semibold">{activeWidth}%</p>
        </div>
      </div>
      <div>
        <p className="text-gray-500 font-semibold">Inactive</p>
        <div className="h-2 rounded-xl bg-gray-300 w-[300px]">
          <div
            className={`bg-[#FF6B6B] h-2 rounded-xl duration-[1700ms] transition-all ease-in-out `}
            style={{ width: `${inactiveWidth}%` }}
          ></div>
          <p className="text-right text-gray-500 font-semibold">{inactiveWidth}%</p>
        </div>
      </div>
    </div>
  );
};

export default StatsOverview;
