import React from "react";

const AboutHeader = () => {
  return (
    <div>
      <h1 className="mt-5 font-bold text-4xl drop-shadow-lg text-shadow">
        Hello,
        <br /> I'am Rifky <span className="animate-[hello_2s_infinite] origin-bottom inline-block dark:text-shadow-dark ">🖐</span>
      </h1>
      <p className="text-xs w-full mt-5 text-slate-700 md:text-lg md:w-full lg:w-10/12 dark:text-slate-300">
        I am a it anthusiast with passion for building beautiful and user friendly website.I am exited to put my skill to use professional setting.i am quick learning and team player, and i am confident than i can be a valueable asset to
        any development team.{" "}
      </p>
    </div>
  );
};

export default AboutHeader;
