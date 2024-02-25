import React from "react";

const Title = ({ title }) => {
  return <h2 className="text-sm font-bold after:block after:w-20 after:h-[2px] after:bg-light dark:after:bg-dark md:text-xl md:after:w-28">{title}</h2>;
};

export default Title;
