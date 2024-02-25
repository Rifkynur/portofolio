import React from "react";
import { FaUser, FaTools } from "react-icons/fa";
import { IoDocument } from "react-icons/io5";
import { RiContactsBook2Fill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";

const NavList = ({ patch, icon, title }) => {
  return (
    <NavLink to={patch} className="hover:text-light transition-all rounded-lg dark:hover:text-dark">
      <div className=" w-16 p-3 rounded-lg md:w-20  border-[1px] border-slate-500">
        {icon}
        <h4 className="text-xs mt-2 md:text-lg">{title}</h4>
      </div>
    </NavLink>
  );
};

export default NavList;
