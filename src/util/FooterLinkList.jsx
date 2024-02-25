import React from "react";
import { Link } from "react-router-dom";

const FooterLinkList = ({ icon, title, patch, target }) => {
  return (
    <div className="text-xs md:text-sm lg:text-base">
      <Link to={patch} target={target} className="flex gap-4 items-center my-1 ">
        <span className="">{icon}</span>
        <span className="">{title}</span>
      </Link>
    </div>
  );
};

export default FooterLinkList;
