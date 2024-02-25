import React from "react";

const CardSkill = ({ img, title }) => {
  return (
    <div className="w-[35%] flex flex-col justify-center items-center bg-secondary z-[1] relative rounded-lg p-3 py-5 overflow-hidden border-animation dark:bg-slate-700 md:h-48 lg:h-56 lg:w-56">
      <img src={img} alt="" className="object-cover h-12 mx-auto md:h-[70px] lg:h-28 " />
      <h3 className="font-bold text-xs mt-2 md:text-lg lg:text-xl uppercase">{title}</h3>
    </div>
  );
};

export default CardSkill;
// shadow-[2px_2px_10px_#000] dark:shadow-[2px_2px_10px_#00e5fb]
