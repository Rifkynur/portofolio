import React from "react";
import { headerSocial } from "../../data/data";
import { Link } from "react-router-dom";

const HeaderSocial = () => {
  return (
    <ul className="flex justify-center items-center text-sm mt-3 text-slate-800 md:justify-start lg:text-lg dark:text-slate-400">
      {headerSocial.map((data, index) => {
        return (
          <li key={index} className={`mx-1 hover:text-light dark:hover:text-dark`}>
            <Link to={data.patch} target="_blank" aria-label={data.title}>
              {data.icon}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default HeaderSocial;
