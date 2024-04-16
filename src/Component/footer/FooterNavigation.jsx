import React from "react";
import FooterLinkList from "../../util/FooterLinkList";
import { footerNavigation } from "../../data/data";

const FooterNavigation = () => {
  return (
    <div>
      <h3 className="text-sm font-semibold mb-2 md:text-base lg:text-lg">Navigation</h3>
      {footerNavigation.map((data, i) => {
        return <FooterLinkList key={i} data={data} />;
      })}
    </div>
  );
};

export default FooterNavigation;
