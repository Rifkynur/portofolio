import React from "react";

const FooterBottom = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-8 text-xs md:text-base">
      <p>Built with ❤ and ☕ in 2024</p>
      <p>
        Inspired By{" "}
        <a href="https://adityacprtm.dev/" target="blank" className="text-dark">
          @adityacprtm
        </a>
      </p>
    </div>
  );
};

export default FooterBottom;
