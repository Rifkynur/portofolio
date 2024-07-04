import CardSkill from "../Component/skill/CardSkill";
import Title from "../util/Title";
import { useEffect } from "react";
import { skill } from "../data/data";

function SkillPage() {
  useEffect(() => {
    document.title = "Skill";
  });
  return (
    <div className="main-content ">
      <Title title="My Skill" />
      <div
        className="flex flex-wrap items-center justify-around gap-5 text-center mt-5 lg:mt-10
      lg:justify-evenly "
      >
        {skill.map((data) => {
          return <CardSkill img={data.img} title={data.title} key={data.id} />;
        })}
      </div>
    </div>
  );
}
export default SkillPage;
