import React, { useEffect } from "react";
import Title from "../util/Title";

import PortofolioCard from "../Component/portofilio/PortofolioCard";
import { portofolio } from "../data/data";

const PortoPage = () => {
  useEffect(() => {
    document.title = "Portofolio";
  });
  return (
    <div className="main-content">
      <Title title="Portofolio" />
      <div className="flex gap-8 flex-wrap mt-5 relative mx-auto ">
        {portofolio.map((data, i) => {
          return <PortofolioCard data={data} key={i} />;
        })}
      </div>
    </div>
  );
};

export default PortoPage;
