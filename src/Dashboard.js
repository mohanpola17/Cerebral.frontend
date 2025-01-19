import React from "react";
import Sidebar from "./components/Sidebar";
import SummaryCards from "./components/SummaryCards";
import ComparisonChart from "./components/ComparisonChart";
import PerformanceScore from "./components/PerformanceScore";
import CustomersByDevice from "./components/CustomersByDevice";
import CommunityFeedback from "./components/CommunityFeedback";
import TopProducts from "./components/TopProducts";

const Dashboard = () => {
    return (
      <div className="flex h-screen" style={{height:"100vh"}}>
        
        <Sidebar />
  
        
        <div className="flex-grow p-6 bg-gray-100 grid grid-cols-3 gap-4">
          
          <div className="col-span-2 space-y-2">
            <SummaryCards />
            <ComparisonChart />
            <TopProducts />
          </div>
  
          <div className="space-y-2">
            <PerformanceScore />
            <CustomersByDevice />
            <CommunityFeedback />
          </div>
        </div>
      </div>
    );
  };
  
  export default Dashboard;