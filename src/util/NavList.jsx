import { NavLink } from "react-router-dom";

const NavList = ({ patch, icon, title }) => {
  return (
    <NavLink to={patch} className="hover:text-light transition-all rounded-lg dark:hover:text-dark md:w-[80%] ">
      <div className=" w-16 p-3 rounded-lg md:w-full flex flex-col items-center justify-center border border-slate-500 ">
        {icon}
        <h4 className="text-xs font-medium mt-2 md:text-lg">{title}</h4>
      </div>
    </NavLink>
  );
};

export default NavList;
