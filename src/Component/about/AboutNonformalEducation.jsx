import React from "react";
import { IoSchool } from "react-icons/io5";
import { nonformalEducation } from "../../data/data";

const AboutNonformalEducation = () => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2 ">
        <IoSchool className="md:text-lg lg:text-xl" />
        <h3 className="text-sm font-semibold md:text-lg lg:text-xl">Nonformal Education</h3>
      </div>
      <div className="ps-4 border-l-[1px] border-light relative dark:border-dark flex flex-col gap-3">
        {nonformalEducation.map((data, index) => {
          return (
            <div key={index} className="relative bg-secondary rounded-md w-3/4 px-2 py-2 timeline md:w-full dark:bg-slate-600">
              <h4 className="text-sm font-semibold md:text-base">{data.school}</h4>
              <p className="text-xs text-slate-700 md:text-base dark:text-slate-400">{data.timeRange}</p>
              <p className="text-xs md:text-base lg:w-56  ">{data.desc} </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutNonformalEducation;
