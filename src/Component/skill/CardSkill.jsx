import React from "react";

const CardSkill = ({ img, title }) => {
  return (
    <div className="w-full flex shadow-cardShadowSmall flex-col justify-center items-center bg-secondary z-[1] relative rounded-lg p-3 py-5 overflow-hidden dark:shadow-darkShadowSmall dark:bg-slate-700 md:h-48 md:shadow-cardShadowBig md:dark:shadow-darkShadowBig lg:h-56 lg:w-56">
      <img src={img} alt="" className="object-contain h-16 mx-auto md:h-[90px] lg:h-32 " />
      <h3 className="font-bold text-xs mt-2 md:text-lg lg:text-xl uppercase">{title}</h3>
    </div>
  );
};

export default CardSkill;
