import { headerSocial } from "../../data/data";
import { Link } from "react-router-dom";
import EachUtils from "../../util/EachUtils";

const HeaderSocial = () => {
  return (
    <ul className="flex justify-center items-center text-sm mt-3 text-slate-800 md:justify-start lg:text-lg dark:text-slate-400">
      <EachUtils
        of={headerSocial}
        render={(data) => {
          return (
            <li className={`mx-1 hover:text-light dark:hover:text-dark`}>
              <Link to={data.patch} target="_blank" rel="noopener noreferrer" aria-label={data.title}>
                {data.icon}
              </Link>
            </li>
          );
        }}
      />
    </ul>
  );
};

export default HeaderSocial;
