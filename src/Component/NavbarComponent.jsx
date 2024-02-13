import { FaUser, FaTools } from "react-icons/fa";
import { IoDocument } from "react-icons/io5";
import { RiContactsBook2Fill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";

function NavbarComponent() {
  const darkMode = () => {
    const roller = document.querySelector(".roller");
    const html = document.querySelector("html");
    html.classList.toggle("dark");
    roller.classList.toggle("translate-x-5");
    roller.classList.toggle("md:translate-x-9");
    roller.classList.toggle("lg:translate-x-11");
    // console.log(html);
  };
  return (
    <>
      <nav className="w-10/12 sticky top-0 flex justify-between items-center p-2 bg-slate-200 mx-auto mt-4 text-slate-900 rounded-lg text-center  md:flex-col md:w-28 md:gap-4 md:py-4 md:ms-[70px] lg:ms-[105px] dark:bg-slate-800 dark:text-slate-50">
        <NavLink to={"/"} className="hover:text-slate-600 transition-all rounded-lg ">
          <div className=" w-16 p-3 rounded-lg md:w-20  border-[1px] border-slate-500">
            <FaUser className="mx-auto w-5 h-5 md:w-8 md:h-8 " />
            <h4 className="text-xs mt-2 md:text-lg">About</h4>
          </div>
        </NavLink>
        <NavLink to={"/skill"} className="hover:text-slate-600 transition-all rounded-lg">
          <div className="w-16 p-3 rounded-lg md:w-20  border-[1px] border-slate-500">
            <FaTools className="mx-auto w-5 h-5 md:w-8 md:h-8" />
            <h4 className="text-xs mt-2 md:text-lg">Skill</h4>
          </div>
        </NavLink>
        <NavLink to={"/porto"} className="hover:text-slate-600 transition-all rounded-lg">
          <div className="w-16 p-3 rounded-lg md:w-20  border-[1px] border-slate-500">
            <IoDocument className="mx-auto w-5 h-5 md:w-8 md:h-8" />
            <h4 className="text-xs mt-2 md:text-lg ">Porto</h4>
          </div>
        </NavLink>
        <NavLink to={"/contact"} className="hover:text-slate-600 transition-all rounded-lg">
          <div className="w-16 p-3 rounded-lg md:w-20  border-[1px] border-slate-500">
            <RiContactsBook2Fill className="mx-auto w-5 h-5 md:w-8 md:h-8" />
            <h4 className="text-xs mt-2 md:text-lg">Contact</h4>
          </div>
        </NavLink>
      </nav>

      <div className="toggle-darkmode fixed w-10 h-4 bg-slate-900 top-2 right-2 rounded-full cursor-pointer md:w-16 md:h-8 lg:right-4 lg:w-20 lg:h-10 dark:bg-slate-50 " onClick={() => darkMode()}>
        <div className="w-3 h-3 bg-slate-50 mt-[2px] ms-1 rounded-full transition-all roller duration-300 md:w-5 md:h-5 md:mt-[6px] lg:w-7 lg:h-7 dark:bg-slate-900"></div>
      </div>
    </>
  );
}
export default NavbarComponent;
