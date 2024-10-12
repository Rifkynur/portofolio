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
      <div
        className="grid grid-cols-2 gap-5 text-center mt-5 lg:mt-10
      lg:grid-cols-3 lg:gap-12 lg:px-10 "
      >
        <EachUtils
          of={skill}
          render={(data) => {
            return <CardSkill img={data.img} title={data.title} />;
          }}
        />
      </div>
    </div>
  );
}
export default SkillPage;
