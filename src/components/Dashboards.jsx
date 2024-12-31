import React from 'react'
import overview from "../assets/images/overview.jpg";

const Dashboards = () => {
  return (
    <section className="p-4 md:px-6 bg-[#F1F0E8] dark:dark dark:bg-inherit" id='dashboards'>
        <div>
        <h2 className="text-[#89A8B2] text-center my-3 text-xl md:text-3xl">
          Dashboards
        </h2>
      </div>
<img src = {overview} alt='dashboard' />
      <div>

      </div>
    </section>
  );
}

export default Dashboards