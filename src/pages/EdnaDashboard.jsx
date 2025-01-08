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
      <main className="mt-9 px-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <div>
          <img src={overview} alt="dashboard" />
          <p className="text-center font-semibold">Overview Page</p>
        </div>
        <div>
          <img src={p2018} alt="dashboard" />
          <p className="text-center font-semibold">2018 Summary Page</p>
        </div>
        <div>
          <img src={p2019} alt="dashboard" />
          <p className="text-center font-semibold">2019 Summary Page</p>
        </div>
        <div>
          <img src={p2020} alt="dashboard" />
          <p className="text-center font-semibold">2020 Summary Page</p>
        </div>
        <div>
          <img src={p2021} alt="dashboard" />
          <p className="text-center font-semibold">2021 Summary Page</p>
        </div>
        <div>
          <img src={managers} alt="dashboard" />
          <p className="text-center font-semibold">Managers Page</p>
        </div>
        <div>
          <img src={sites} alt="dashboard" />
          <p className="text-center font-semibold">Sites Page</p>
        </div>
        <div>
          <img src={calls} alt="dashboard" />
          <p className="text-center font-semibold">Calls Performance Page</p>
        </div>
        <div>
          <img src={revenue} alt="dashboard" />
          <p className="text-center font-semibold">Revenue Page</p>
        </div>
      </main>
    </>
  );
};

export default EdnaDashboard;
