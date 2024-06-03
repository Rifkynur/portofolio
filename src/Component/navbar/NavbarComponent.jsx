import { useState, useRef, useEffect } from "react";
import DarkModeToggle from "./DarkModeToggle";
import NavbarList from "./NavbarList";

function NavbarComponent() {
  const [dark, setDark] = useState(false);
  const roller = useRef("");

  const setToggleDark = (isDark) => {
    const html = document.querySelector("html");
    html.classList.toggle("dark", isDark);
    setDark(isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };
  // console.log(`state saat ini ${dark}`);

  useEffect(() => {
    const isSavedDark = localStorage.getItem("theme") === "dark";
    setToggleDark(isSavedDark);
  }, []);

  return (
    <>
      <NavbarList />
      <DarkModeToggle setToggleDark={setToggleDark} ref={roller} dark={dark} />
    </>
  );
}
export default NavbarComponent;
