import React from "react";

const Frame = (props) => {
  

  return (
    <div className="max-w-sm h-full border border-gray-200 rounded-lg shadow bg-[#F1F0E8]  dark:bg-[#3C3C3C] dark:border-gray-700">
      <img
        className="rounded-t-lg h-48 w-96 md:w-full object-cover"
        src={props.image}
        alt={props.title}
      />
      <div className="p-5 w-full">
        <p className="text-[#89A8B2] font-bold mb-2 text-sm">{props.tool}</p>
        <h2 className="mb-2 text-2xl tracking-tight text-gray-900 font-bold secondary dark:text-white">
          {props.title}
        </h2>

        <p className="mb-3 font-normal">{props.desc}</p>
        {/* <div className="flex items-center justify-center gap-x-3">
          <p className="font-bold">Tools:</p>
          <p className="text-xl">{icon(props.icon)}</p>
        </div> */}
        <div className=" justify-center items-center py-4">
          <button className="btn">
            <a href={props.github} target="_blank">
              View
            </a>
          </button>
          <button
            className={`${props.medium == null ? `hidden` : `block btn ml-6`}`}
          >
            <a href={props.medium} target="_blank">
              Read Article
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Frame;
