import CardSkill from "../util/CardSkill";
import Title from "../util/Title";
import { useEffect } from "react";
function SkillPage() {
  useEffect(() => {
    document.title = "Skill";
    console.log("hello");
  });
  return (
    <div className="main-content ">
      <Title title="My Skill" />
      <div className="flex flex-wrap items-center justify-around gap-5 text-center mt-5 lg:justify-evenly ">
        <CardSkill img="./img/skill/html-5.png" title="html" />
        <CardSkill img="./img/skill/social.png" title="css" />
        <CardSkill img="./img/skill/bootstrap.png" title="bootstrap" />
        <CardSkill img="./img/skill/tailwind-css-icon.png" title="tailwind" />
        <CardSkill img="./img/skill/java-script.png" title="javascript" />
        <CardSkill img="./img/skill/structure.png" title="javascript" />
      </div>
    </div>
  );
}
export default SkillPage;
