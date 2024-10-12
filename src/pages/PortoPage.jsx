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
      <div className="flex gap-8 flex-wrap mt-5 relative mx-auto lg:mt-10 ">
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
