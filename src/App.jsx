import NavbarComponent from "./Component/NavbarComponent";
import HeaderComponent from "./Component/HeaderComponent";
import FooterComponent from "./Component/FooterComponent";
import AboutPages from "./pages/AboutPages";
import ContactPage from "./pages/ContactPage";
import SkillPage from "./pages/skillPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="min-h-screen">
        <HeaderComponent />
        <div className="md:flex md:justify-start md:gap-4 md:items-start">
          <NavbarComponent />
          <Routes>
            <Route path="/" Component={AboutPages}></Route>
            <Route path="/contact" Component={ContactPage}></Route>
            <Route path="/skill" Component={SkillPage}></Route>
          </Routes>
        </div>
        <FooterComponent />
      </div>
    </>
  );
}

export default App;
