import NavbarComponent from "./Component/navbar/NavbarComponent";
import HeaderComponent from "./Component/header/HeaderComponent";
import FooterComponent from "./Component/footer/FooterComponent";
import AboutPages from "./pages/AboutPages";
import ContactPage from "./pages/ContactPage";
import SkillPage from "./pages/skillPage";
import PortoPage from "./pages/PortoPage";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-between">
        <div>
          <HeaderComponent />
          <div className="md:flex md:justify-start md:gap-4 md:items-start h-full">
            <NavbarComponent />
            <Routes>
              <Route path="/" Component={AboutPages}></Route>
              <Route path="/contact" Component={ContactPage}></Route>
              <Route path="/skill" Component={SkillPage}></Route>
              <Route path="/porto" Component={PortoPage}></Route>
              <Route path="*" Component={NotFound}></Route>
            </Routes>
          </div>
        </div>
        <FooterComponent />
      </div>
    </>
  );
}

export default App;
