import React from "react";
import PortofolioDesc from "./PortofolioDesc";
import PortofolioLinks from "./PortofolioLinks";
import { portofolio } from "../../data/data";

const PortofolioCard = ({ data }) => {
  return (
    <div className="w-[40%] pb-3 rounded-xl border-[1px] border-slate-500 shadow-md relative overflow-hidden group shadow-slate-900 dark:shadow-dark dark:bg-slate-600 lg:w-[30%] ">
      <PortofolioLinks data={data} />
      <PortofolioDesc img={data.img} tool={data.tool} title={data.title} />
    </div>
  );
};

export default PortofolioCard;
