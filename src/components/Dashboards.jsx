import React from "react"
import overview from "../assets/images/overview_11zon.jpg"
import teldash from "../assets/images/teldash.JPG"
import calldash from "../assets/images/calldash.JPG"
import sociala from "../assets/images/socialmediaa.jpg"
import { Link } from "react-router-dom"

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
      <Link to='/smedia'>
        <img
        src={sociala}
        className="transition duration-200 ease-in-out hover:scale-110"
        alt = "dashboard"
        />
        </Link>
        <Link to="/edna">
          <img
            className="transition duration-200 ease-in-out hover:scale-110"
            src={overview}
            alt="dashboard"
          />
        </Link>
        <Link to="/callcenter">
          <img
            className="transition duration-200 ease-in-out hover:scale-110"
            src={calldash}
            alt="dashboard"
          />
        </Link>
        <Link to="/telecom">
          <img
            className="transition duration-200 ease-in-out hover:scale-110"
            src={teldash}
            alt="dashboard"
          />
        </Link>
        
      </div>
    </section>
  );
};

export default Dashboards;
