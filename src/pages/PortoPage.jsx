import { useEffect } from "react";
import Title from "../util/Title";
import EachUtils from "../util/EachUtils";

import PortofolioCard from "../Component/portofilio/PortofolioCard";
import { portofolio } from "../data/data";

const PortoPage = () => {
  useEffect(() => {
    document.title = "Portofolio";
  });
  return (
    <div className="main-content">
      <Title title="Portofolio" />
      <div className="grid grid-cols-2 mt-5 gap-2 md:gap-4 lg:gap-8 relative mx-auto lg:mt-10 lg:grid-cols-3">
        <EachUtils
          of={portofolio}
          render={(data) => {
            return <PortofolioCard data={data} />;
          }}
        />
      </div>
    </div>
  );
};

export default PortoPage;
