import React from "react";
import { Link } from "react-router-dom";

const FooterLinkList = ({ data }) => {
  return (
    <div className="text-xs md:text-sm lg:text-base">
      <Link to={data.patch} target={data.target} className="flex gap-4 items-center my-1 hover:text-dark ">
        <span>{data.icon}</span>
        <span>{data.title}</span>
      </Link>
    </div>
  );
};

export default FooterLinkList;
