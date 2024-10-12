import { experience } from "../../data/data";
import { FaUsersGear } from "react-icons/fa6";
import EachUtils from "../../util/EachUtils";

const AboutExperience = () => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2 md:mt-2 lg:mt-0 ">
        <FaUsersGear className="md:text-lg lg:text-xl" />
        <h3 className="text-sm font-semibold md:text-lg lg:text-xl">Experience</h3>
      </div>
      <div className="ps-4 border-l-[1px] border-light relative dark:border-dark flex flex-col gap-3">
        <EachUtils
          of={experience}
          render={(data) => {
            return (
              <div className="relative bg-secondary rounded-md w-3/4 px-2 py-2 timeline md:w-full dark:bg-slate-600">
                <h4 className="text-sm font-semibold md:text-base">{data.school}</h4>
                <p className="text-xs text-slate-700 md:text-base dark:text-slate-400">{data.timeRange}</p>
                <p className="text-xs md:text-base lg:w-56 ">{data.desc}</p>
              </div>
            );
          }}
        />
      </div>
    </div>
  );
};

export default AboutExperience;
