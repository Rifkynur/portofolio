import React from "react";
import { Link } from "react-router-dom";

const PortofolioLink = ({ link, icon }) => {
  return (
    <Link to={link} target="_blank">
      <div className=" text-slate-50 cursor-pointer text-[10px] hover:scale-110 md:text-base lg:text-lg">{icon}</div>
    </Link>
  );
};

export default PortofolioLink;
