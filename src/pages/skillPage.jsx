import CardSkill from "../Component/skill/CardSkill";
import Title from "../util/Title";
import { useEffect } from "react";
import { skill } from "../data/data";
import EachUtils from "../util/EachUtils";

function SkillPage() {
  useEffect(() => {
    document.title = "Skill";
  });
  return (
    <div className="main-content ">
      <Title title="My Skill" />
      <h3 className="text-sm w-full mt-5 lg:mt-10 font-semibold lg:text-base lg:py-2">Programming Language</h3>
      <div
        className="grid grid-cols-2 gap-5 text-center 
      lg:grid-cols-3 lg:gap-y-12 lg:px-10 lg:justify-center"
      >
        <EachUtils
          of={skill.filter((item) => item.type == "programmingLanguage")}
          render={(data) => {
            return <CardSkill img={data.img} title={data.title} />;
          }}
        />
      </div>
      <h3 className="text-sm w-full mt-5 lg:mt-10 font-semibold lg:text-base lg:py-2">Framework</h3>
      <div
        className="grid grid-cols-2 gap-5 text-center 
      lg:grid-cols-3 lg:gap-12 lg:px-10 "
      >
        <EachUtils
          of={skill.filter((item) => item.type == "framework")}
          render={(data) => {
            return <CardSkill img={data.img} title={data.title} />;
          }}
        />
      </div>
      <h3 className="text-sm w-full mt-5 lg:mt-10 font-semibold lg:text-base lg:py-2">Tool</h3>
      <div
        className="grid grid-cols-2 gap-5 text-center 
      lg:grid-cols-3 lg:gap-12 lg:px-10 "
      >
        <EachUtils
          of={skill.filter((item) => item.type == "tool")}
          render={(data) => {
            return <CardSkill img={data.img} title={data.title} />;
          }}
        />
      </div>
    </div>
  );
}
export default SkillPage;
