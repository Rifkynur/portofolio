function SkillPage() {
  return (
    <div className="main-content ">
      <h2 className="text-sm font-bold after:block after:w-20 after:h-[2px] after:bg-gradient-to-r after:from-sky-500 after:to-lime-400 md:text-xl md:after:w-28">My Skill</h2>
      <div className="flex flex-wrap items-center justify-around gap-5 text-center mt-5">
        <div className="w-[45%] bg-slate-300 rounded-lg p-3 dark:bg-slate-700 ">
          <img src="./img/skill/html-5.png" alt="" className="object-cover h-12 mx-auto md:h-[70px] lg:h-28" />
          <h3 className="font-bold text-xs mt-2 md:text-lg lg:text-xl">HTML</h3>
        </div>
        <div className="w-[45%] bg-slate-300 rounded-lg p-3 dark:bg-slate-700 ">
          <img src="./img/skill/social.png" alt="" className="object-cover h-12 mx-auto md:h-[70px] lg:h-28" />
          <h3 className="font-bold text-xs mt-2 md:text-lg lg:text-xl">CSS</h3>
        </div>
        <div className="w-[45%] bg-slate-300 rounded-lg p-3 dark:bg-slate-700">
          <img src="./img/skill/bootstrap.png" alt="" className="object-cover h-12 mx-auto md:h-[70px] lg:h-28" />
          <h3 className="font-bold text-xs mt-2 md:text-lg lg:text-xl">BOOTSTRAP</h3>
        </div>
        <div className="w-[45%] bg-slate-300 rounded-lg p-3 dark:bg-slate-700">
          <img src="./img/skill/tailwind-css-icon.png" alt="" className="object-cover h-12 mx-auto md:h-[70px] lg:h-28" />
          <h3 className="font-bold text-xs mt-2 md:text-lg lg:text-xl">TAILWIND</h3>
        </div>
        <div className="w-[45%] bg-slate-300 rounded-lg p-3 dark:bg-slate-700">
          <img src="./img/skill/java-script.png" alt="" className="object-cover h-12 mx-auto md:h-[70px] lg:h-28" />
          <h3 className="font-bold text-xs mt-2 md:text-lg lg:text-xl">JAVASCRIPT</h3>
        </div>
        <div className="w-[45%] bg-slate-300 rounded-lg p-3 dark:bg-slate-700">
          <img src="./img/skill/structure.png" alt="" className="object-cover h-12 mx-auto md:h-[70px] lg:h-28" />
          <h3 className="font-bold text-xs mt-2 md:text-lg lg:text-xl">REACT JS</h3>
        </div>
      </div>
    </div>
  );
}
export default SkillPage;
