import React from "react";
import { SiAmp } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaFileExcel } from "react-icons/fa";

const Frame = (props) => {
  const icon = () => {
    if (props.tool == "PowerBI") {
      return <SiAmp className="text-[#e67e22]" />;
    } else if (props.tool == "SQL") {
      return <BiLogoPostgresql className="text-[#0064A5]" />;
    } else if (props.tool == "PowerBI, Excel") {
      return (
        <span className="flex">
          <FaFileExcel className="text-[#1D6F42]" />
          <SiAmp className="text-[#e67e22]" />
        </span>
      );
    }
  };

  return (
    <div className="max-w-sm h-full border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700">
      <img
        className="rounded-t-lg h-48 w-96 md:w-full object-cover"
        src={props.image}
        alt={props.title}
      />
      <div className="p-5 w-full">
        <h2 className="mb-2 text-2xl tracking-tight text-gray-900 font-bold text-center secondary dark:text-white">
          {props.title}
        </h2>
        <p className="mb-3 font-normal">{props.desc}</p>
        <div className="flex items-center justify-center gap-x-3">
          <p className="font-bold">Tools:</p>
          <p className="text-xl">{icon(props.icon)}</p>
        </div>
        <div className="flex justify-center items-center py-4">
          <button className="btn">
            <a href={props.github} target="_blank">
              View
            </a>
          </button>
          <button
            className={`${props.medium == null ? `hidden` : `block btn ml-6`}`}
          >
            Read Article
          </button>
        </div>
      </div>
    </div>
  );
};

export default Frame;
