import { useState, useRef, useEffect } from "react";
import DarkModeToggle from "./DarkModeToggle";
import NavbarList from "./NavbarList";

function NavbarComponent() {
  const [dark, setDark] = useState(false);
  const roller = useRef("");

  const darkMode = () => {
    const html = document.querySelector("html");
    html.classList.toggle("dark");
    setDark(!dark);
    localStorage.setItem("theme", dark);
    console.log(`state saat ini ${dark}`);
  };

  // useEffect(() => {
  //   if (localStorage.getItem("theme") === true) {
  //     setDark(!dark);
  //   }
  //   setDark(dark);
  // }, [dark]);
  return (
    <>
      <NavbarList />
      <DarkModeToggle darkMode={darkMode} ref={roller} dark={dark} />
    </>
  );
}
export default NavbarComponent;
