import React from "react";
import { portofolio } from "../../data/data";

const PortofolioDesc = ({ img, title, tool }) => {
  return (
    <div>
      <div className="w-full h-[60px] object-cover md:h-[100px] lg:h-[150px]">
        <img src={img} alt="dentist" className=" w-full h-40" />
      </div>
      <div className="p-1 flex flex-col justify-between md:p-2 md:h-[75px] lg:h-[110px]">
        <h3 className="text-[10px] font-bold mt-1 max-w-full lg:text-lg">{title}</h3>
        <div className="flex flex-w gap-1 mt-2">
          {tool.map((item, i) => {
            return (
              <span key={i} className=" bg-light dark:bg-dark text-black border font-semibold text-[6px] py-[2px] px-1 rounded-md border-black  md:text-[10px] lg:text-sm">
                {item}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PortofolioDesc;
