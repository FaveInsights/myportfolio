import React from "react";
import overview from "../assets/images/overview.jpg";
import teldash from "../assets/images/teldash.jpg";
import calldash from "../assets/images/calldash.jpg";

const Dashboards = () => {
  return (
    <section
      className="p-4 md:px-6 bg-[#F1F0E8] dark:dark dark:bg-inherit"
      id="dashboards"
    >
      <div>
        <h2 className="text-[#89A8B2] text-center my-3 text-xl font-bold unbounded md:text-3xl">
          Dashboards
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4 place-items-center">
        <div>
          <img src={overview} alt="dashboard" />
        </div>
        <div>
          <img src={teldash} alt="dashboard" />
        </div>
        <div>
          <img src={calldash} alt="dashboard" />
        </div>
      </div>
    </section>
  );
};

export default Dashboards;
