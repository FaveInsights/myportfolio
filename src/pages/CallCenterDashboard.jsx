import React from 'react'
import calldash from "../assets/images/calldash.JPG"
import calldash1 from "../assets/images/call3.JPG";
import calldash2 from "../assets/images/call4.JPG"
import DashboardNav from '../components/DashboardNav'

const CallCenterDashboard = () => {
  return (
    <>
    <DashboardNav />
    <main className="mt-9 px-4 grid gap-4 md:grid-cols-2">
      <div>
        <img src={calldash2} alt="dashboard" />
        <p className="text-center font-semibold">Homepage</p>
      </div>
      <div>
        <img src={calldash} alt="dashboard" />
        <p className="text-center font-semibold">Drill Down</p>
      </div>
      <div>
        <img src={calldash1} alt="dashboard" />
        <p className="text-center font-semibold">Decomposition</p>
      </div>
    </main></>
  );
}

export default CallCenterDashboard