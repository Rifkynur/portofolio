import { formalEducation } from "../../data/data";
import { IoSchool } from "react-icons/io5";
import EachUtils from "../../util/EachUtils";
const AboutFormaleducation = () => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2 ">
        <IoSchool className="md:text-lg lg:text-xl" />
        <h2 className="text-sm font-semibold md:text-lg lg:text-xl">Formal Education</h2>
      </div>
      <div className="ps-4 border-l-[1px] border-light relative dark:border-dark flex flex-col gap-3">
        <EachUtils
          of={formalEducation}
          render={(data) => {
            return (
              <div className="relative bg-secondary rounded-md w-3/4 px-2 py-2 timeline md:w-full dark:bg-slate-600">
                <h3 className="text-sm font-semibold  md:text-base">{data.school}</h3>
                <p className="text-xs  md:text-base dark:text-slate-400">{data.timeRange}</p>
                <p className="text-xs md:text-base lg:w-56 ">{data.desc}</p>
              </div>
            );
          }}
        />
      </div>
    </div>
  );
};

export default AboutFormaleducation;
