import { navbarList } from "../../data/data";
import NavList from "../../util/NavList";
import EachUtils from "../../util/EachUtils";

const NavbarList = () => {
  return (
    <nav className="w-full sticky z-50 top-0 flex justify-between items-center p-1 bg-primary mx-auto mt-4 text-slate-900 rounded-lg text-center md:flex-col md:w-[15%] md:gap-4 md:py-4 lg:w-[11%] dark:bg-slate-800 dark:text-white">
      <EachUtils
        of={navbarList}
        render={(data) => {
          return <NavList patch={data.patch} icon={data.icon} title={data.title} />;
        }}
      />
    </nav>
  );
};

export default NavbarList;
