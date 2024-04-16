import Title from "../util/Title";
import AboutHeader from "../Component/about/AboutHeader";
import AboutFormaleducation from "../Component/about/AboutFormalEducation";
import AboutNonformalEducation from "../Component/about/AboutNonformalEducation";
import AboutExperience from "../Component/about/AboutExperience";
import { useEffect } from "react";

function AboutPages() {
  useEffect(() => {
    document.title = "About";
  });
  return (
    <div className="main-content ">
      <Title title="About Me" />
      <AboutHeader />
      <div className="flex flex-col flex-wrap gap-4 mt-10 md:flex-row md:justify-between md:items-star">
        <AboutFormaleducation />
        <AboutNonformalEducation />
        <AboutExperience />
      </div>
    </div>
  );
}
export default AboutPages;
