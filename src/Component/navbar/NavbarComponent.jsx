import { useState, useRef, useEffect } from "react";
import DarkModeToggle from "./DarkModeToggle";
import NavbarList from "./NavbarList";
import useDarkModeStore from "../../store/darkModeStore";

function NavbarComponent() {
  return (
    <>
      <NavbarList />
      <DarkModeToggle />
    </>
  );
}
export default NavbarComponent;
