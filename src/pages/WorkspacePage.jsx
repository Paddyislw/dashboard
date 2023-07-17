import React from "react";
import Sidebar from "../global/Sidebar";
import WorkspaceHeader from "../components/WorkspaceHeader";
import AllCustomersCard from "../components/AllCustomersCard";
import StatsOverview from "../components/StatsOverview";
import WorkspaceTable from "../components/WorkspaceTable";

const WorkspacePage = () => {
  return (
    <div className=" px-6 py-4 bg-[#f9f9f9]">
      <WorkspaceHeader />
      <div className="mt-10 flex justify-between">
        <AllCustomersCard />
        <StatsOverview />
      </div>
      <div className="mt-10">
        <WorkspaceTable />
      </div>
    </div>
  );
};

export default WorkspacePage;
