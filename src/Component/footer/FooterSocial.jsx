import React from "react";
import FooterLinkList from "../../util/FooterLinkList";
import { headerSocial } from "../../data/data";

const FooterSocial = () => {
  return (
    <div>
      <h3 className="text-sm font-semibold mb-2 md:text-base lg:text-lg">Social Media</h3>
      {headerSocial.map((data, i) => {
        return <FooterLinkList key={i} data={data} />;
      })}
    </div>
  );
};

export default FooterSocial;
