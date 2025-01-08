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
      <main>
        <div>
          <img src={overview} alt="dashboard" />
        </div>
        <div>
          <img src={p2018} alt="dashboard" />
        </div>
        <div>
          <img src={p2019} alt="dashboard" />
        </div>
        <div>
          <img src={p2020} alt="dashboard" />
        </div>
        <div>
          <img src={p2021} alt="dashboard" />
        </div>
        <div>
          <img src={managers} alt="dashboard" />
        </div>
        <div>
          <img src={sites} alt="dashboard" />
        </div>
        <div>
          <img src={calls} alt="dashboard" />
        </div>
        <div>
          <img src={revenue} alt="dashboard" />
        </div>
      </main>
    </>
  );
};

export default EdnaDashboard;
