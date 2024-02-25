import { FaUser, FaTools, FaRegMoon } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";
import { IoDocument } from "react-icons/io5";
import { RiContactsBook2Fill } from "react-icons/ri";
import NavList from "../util/NavList";
import { useState } from "react";

function NavbarComponent() {
  const [dark, setDark] = useState(false);
  const darkMode = () => {
    const roller = document.querySelector(".roller");
    const html = document.querySelector("html");
    html.classList.toggle("dark");
    roller.classList.toggle("translate-x-5");
    roller.classList.toggle("md:translate-x-9");
    roller.classList.toggle("lg:translate-x-11");
    setDark(!dark);
  };
  return (
    <>
      <nav className="w-10/12 sticky z-50 top-0 flex justify-between items-center p-2 bg-primary mx-auto mt-4 text-slate-900 rounded-lg text-center  md:flex-col md:w-28 md:gap-4 md:py-4 md:ms-[70px] lg:ms-[105px] dark:bg-slate-800 dark:text-white">
        <NavList patch={"/"} icon={<FaUser className="mx-auto w-5 h-5 md:w-8 md:h-8" />} title="About" />
        <NavList patch="/skill" icon={<FaTools className="mx-auto w-5 h-5 md:w-8 md:h-8" />} title="Skill" />
        <NavList patch="/porto" icon={<IoDocument className="mx-auto w-5 h-5 md:w-8 md:h-8" />} title="Porto" />
        <NavList patch={"/contact"} icon={<RiContactsBook2Fill className="mx-auto w-5 h-5 md:w-8 md:h-8" />} title="Contact" />
      </nav>
      <div className="toggle-darkmode fixed w-10 h-5 bg-slate-900 top-2 right-2 rounded-full cursor-pointer md:w-16 md:h-8 lg:right-4 lg:w-20 lg:h-10 dark:bg-slate-50 z-[9999999] " onClick={() => darkMode()}>
        <div className="w-3 h-3 bg-slate-50 mt-[4px] ms-1  rounded-full transition-all roller duration-300 flex justify-center items-center md:w-5 md:h-5 md:mt-[6px] lg:w-7 lg:h-7 dark:bg-slate-900 ">
          {dark ? <FaRegMoon className="text-white" /> : <IoIosSunny className="text-slate-900" />}
        </div>
      </div>
    </>
  );
}
export default NavbarComponent;
