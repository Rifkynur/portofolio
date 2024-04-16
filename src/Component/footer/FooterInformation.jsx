import React from "react";

const FooterInformation = () => {
  return (
    <div>
      <h3 className="text-sm font-semibold mb-2 md:text-base lg:text-lg">Information</h3>
      <ul className="text-xs flex flex-col gap-1 md:text-sm lg:text-base">
        <li>Wedi-Klaten</li>
        <li>Jawa Tengah</li>
        <li>
          <a href="https://wa.me/6281908746609" target="_blank" className="text-dark">
            +62 8190 8746 619
          </a>
        </li>
        <li>
          <a href="mailto:ythrifky619@gmail.com" target="_blank" className="text-dark">
            ythrifky619@gmail.com
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FooterInformation;
