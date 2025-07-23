import NavbarComponent from "./Component/navbar/NavbarComponent";
import HeaderComponent from "./Component/header/HeaderComponent";
import FooterComponent from "./Component/footer/FooterComponent";
import AboutPages from "./pages/AboutPages";
import ContactPage from "./pages/ContactPage";
import SkillPage from "./pages/skillPage";
import PortoPage from "./pages/PortoPage";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import ReactGA from "react-ga4";
import usePageTracking from "./util/usePageTracking";
// import ThanksPage from "./pages/ThanksPage";
import ParticlesBackground from "./Component/ParticleBackground";

ReactGA.initialize(import.meta.env.VITE_GA_MEASUREMENT_ID);

function App() {
  usePageTracking();
  return (
    <>
      <ParticlesBackground />
      <div className="min-h-screen flex flex-col justify-between">
        <div className="max-w-[1324px] mx-auto  w-full">
          <HeaderComponent />
          <div className="w-11/12 mx-auto md:flex md:gap-4 md:items-start h-full">
            <NavbarComponent />
            <div className="w-full ">
              <Routes>
                <Route path="/" Component={AboutPages}></Route>
                <Route path="/contact" Component={ContactPage}></Route>
                <Route path="/skill" Component={SkillPage}></Route>
                <Route path="/porto" Component={PortoPage}></Route>
                <Route path="*" Component={NotFound}></Route>
              </Routes>
            </div>
          </div>
        </div>
        <FooterComponent />
      </div>
    </>
  );
}

export default App;
