import React from "react";
import { portofolio } from "../../data/data";

const PortofolioDesc = ({ img, title, tool }) => {
  return (
    <>
      <div className="w-full h-[60px] object-cover md:h-[100px] lg:h-[130px]">
        <img src={img} alt="dentist" className="h-full w-full" />
      </div>
      <div className="p-1 md:p-2">
        <h3 className="text-[10px] font-semibold mt-1 max-w-full lg:text-lg">{title}</h3>
        <div className="flex flex-w gap-1 mt-2">
          {tool.map((item, i) => {
            return (
              <span key={i} className=" border-[2px] font-bold text-[6px] py-[2px] px-1 rounded-full text-light border-light dark:text-dark dark:border-dark md:text-[10px] lg:text-sm">
                {item}
              </span>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PortofolioDesc;
