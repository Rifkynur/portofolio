import { forwardRef } from "react";
import { FaRegMoon } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";
import useDarkModeStore from "../../store/darkModeStore";
import { useRef, useEffect } from "react";

const DarkModeToggle = (ref) => {
  const { theme, setTheme } = useDarkModeStore();
  const roller = useRef("");

  const setToggleDark = (isDark) => {
    const html = document.querySelector("html");
    html.classList.toggle("dark", isDark == "dark");
    setTheme(isDark);
  };

  useEffect(() => {
    const html = document.querySelector("html");
    const currentTheme = theme === "dark";
    currentTheme && html.classList.add("dark");
  });
  return (
    <div
      className="toggle-darkmode fixed w-10 h-5 bg-slate-900 top-2 right-2 rounded-full cursor-pointer md:w-16 md:h-8 lg:right-4 lg:w-20 lg:h-10 dark:bg-slate-50 z-[9999999] "
      onClick={() => setToggleDark(theme === "dark" ? "light" : "dark")}
    >
      <div
        ref={roller}
        className={`w-3 h-3 bg-slate-50 mt-[4px] ms-1  rounded-full transition-all roller duration-300 flex justify-center items-center md:w-5 md:h-5 md:mt-[6px] lg:w-7 lg:h-7 dark:bg-slate-900 ${
          theme === "dark"
            ? "translate-x-5 md:translate-x-9 lg:translate-x-11"
            : ""
        }`}
      >
        {theme === "dark" ? (
          <FaRegMoon className="text-white w-2 md:w-5" />
        ) : (
          <IoIosSunny className="text-slate-900 w-2 md:w-5" />
        )}
      </div>
    </div>
  );
};

export default DarkModeToggle;
