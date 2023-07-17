import React, { useState } from "react";
import WorkspacePage from "./pages/WorkspacePage";
import Sidebar from "./global/Sidebar";
import ReportsPage from "./pages/ReportsPage";

const App = () => {
  const [currentTab, setCurrentTab] = useState("reports");
  return (
    <div className="flex">
      <div className="border shadow-xl min-h-[100dvh]">
        <Sidebar currentTab={currentTab} setCurrentTab={setCurrentTab} />
      </div>
      <div className="grow">
        {currentTab === "reports" && <ReportsPage />}
        {currentTab === "workspaces" && <WorkspacePage />}
        {currentTab === "settings" && <div></div>}
      </div>
    </div>
  );
};

export default App;
