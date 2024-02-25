import Title from "../util/Title";
import { IoSchool } from "react-icons/io5";
import { FaUsersGear } from "react-icons/fa6";
import { useEffect } from "react";

function AboutPages() {
  useEffect(() => {
    document.title = "About";
  });
  return (
    <div className="main-content ">
      <Title title="About Me" />
      <h1 className="mt-5 font-bold text-4xl drop-shadow-lg text-shadow">
        Hello,
        <br /> I'am Rifky <span className="animate-[hello_2s_infinite] origin-bottom inline-block dark:text-shadow-dark ">🖐</span>
      </h1>
      <p className="text-xs mt-5 indent-2 text-slate-700 md:text-lg dark:text-slate-300 w-3/4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure doloribus odio dolores nihil, tempore deleniti repudiandae, suscipit,</p>
      <div className="flex flex-col flex-wrap gap-4 mt-6 md:flex-row md:justify-between md:items-star ">
        <div>
          <div className="flex items-center gap-2 mb-2 ">
            <IoSchool className="md:text-lg lg:text-xl" />
            <h4 className="text-sm font-semibold md:text-lg lg:text-xl">Formal Education</h4>
          </div>
          <div className="ps-4 border-l-[1px] border-light relative dark:border-dark flex flex-col gap-3">
            <div className="relative bg-secondary rounded-md w-3/4 px-2 py-2 timeline md:w-full dark:bg-slate-600">
              <h3 className="text-sm font-semibold md:text-base">SMKN 2 Klaten</h3>
              <p className="text-xs text-slate-700 md:text-base dark:text-slate-400">2015-2019</p>
              <p className="text-xs md:text-base lg:w-56 ">Teknik Komputer dan Jaringan</p>
            </div>
            <div className="relative bg-secondary rounded-md w-3/4 px-2 py-2 timeline md:w-full dark:bg-slate-600">
              <h3 className="text-sm font-semibold md:text-base">SMPN 1 Wedi</h3>
              <p className="text-xs text-slate-700 md:text-base dark:text-slate-400 ">2012-2015</p>
              <p className="text-xs md:text-base lg:w-56 ">Wedi Klaten</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-2 ">
            <IoSchool className="md:text-lg lg:text-xl" />
            <h4 className="text-sm font-semibold md:text-lg lg:text-xl">Nonformal Education</h4>
          </div>
          <div className="ps-4 border-l-[1px] border-light relative dark:border-dark flex flex-col gap-3">
            <div className="relative bg-secondary rounded-md w-3/4 px-2 py-2 timeline md:w-full dark:bg-slate-600">
              <h3 className="text-sm font-semibold md:text-base">Dicoding-FrontEnd</h3>
              <p className="text-xs text-slate-700 md:text-base dark:text-slate-400">Okt 2023</p>
              <p className="text-xs md:text-base lg:w-56  ">Belajar front-end web untuk pemula </p>
            </div>
            <div className="relative bg-secondary rounded-md w-3/4 px-2 py-2 timeline md:w-full dark:bg-slate-600">
              <h3 className="text-sm font-semibold md:text-base">Binar Academy</h3>
              <p className="text-xs text-slate-700 md:text-base dark:text-slate-400 ">Feb 2023 - Jun 2023</p>
              <p className="text-xs md:text-base lg:w-56 ">FrontEnd Engineer, React js</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-2 md:mt-2 lg:mt-0 ">
            <FaUsersGear className="md:text-lg lg:text-xl" />
            <h4 className="text-sm font-semibold md:text-lg lg:text-xl">Experience</h4>
          </div>
          <div className="ps-4 border-l-[1px] border-light relative dark:border-dark flex flex-col gap-3">
            <div className="relative bg-secondary rounded-md w-3/4 px-2 py-2 timeline md:w-full dark:bg-slate-600">
              <h3 className="text-sm font-semibold md:text-base">Pt.Honda Prospect Motor</h3>
              <p className="text-xs text-slate-700 md:text-base dark:text-slate-400">Nov 2019 - Nov 2022</p>
              <p className="text-xs md:text-base lg:w-56 ">Leica Measurement Operator</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutPages;
