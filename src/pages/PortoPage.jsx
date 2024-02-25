import React, { useEffect } from "react";
import Title from "../util/Title";

const PortoPage = () => {
  useEffect(() => {
    document.title = "Portofolio";
  });
  return (
    <div className="main-content">
      <Title title="Portofolio" />
    </div>
  );
};

export default PortoPage;
