import React from "react";
import overview from "../assets/images/overview_11zon.jpg";
import p2018 from "../assets/images/2018_11zon.jpg";
import p2019 from "../assets/images/2019_11zon.jpg";
import p2020 from "../assets/images/2020_11zon.jpg";
import p2021 from "../assets/images/2021_11zon.jpg";
import revenue from "../assets/images/revenue_11zon.jpg";
import sites from "../assets/images/sites_11zon.jpg";
import managers from "../assets/images/managers_11zon.jpg";
import calls from "../assets/images/calls_11zon.jpg";

const EdnaDashboard = () => {
  return (
    <>
      <main className="mt-8 px-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="relative">
          <img src={overview} alt="dashboard" />
          <p className="text-center py-1 bottom-0 lg:bottom-6 absolute bg-[#000000] bg-opacity-40 w-full text-[#F9F9F9]">
            Overview Page
          </p>
        </div>
        <div>
          <img src={p2018} alt="dashboard" />
          <p>2018 Summary Page</p>
        </div>
        <div>
          <img src={p2019} alt="dashboard" />
          <p>2019 Summary Page</p>
        </div>
        <div>
          <img src={p2020} alt="dashboard" />
          <p>2020 Summary Page</p>
        </div>
        <div>
          <img src={p2021} alt="dashboard" />
          <p>2021 Summary Page</p>
        </div>
        <div>
          <img src={managers} alt="dashboard" />
          <p>Managers Page</p>
        </div>
        <div>
          <img src={sites} alt="dashboard" />
          <p>Sites Page</p>
        </div>
        <div>
          <img src={calls} alt="dashboard" />
          <p>Calls Performance Page</p>
        </div>
        <div>
          <img src={revenue} alt="dashboard" />
          <p>Revenue Page</p>
        </div>
      </main>
    </>
  );
};

export default EdnaDashboard;
