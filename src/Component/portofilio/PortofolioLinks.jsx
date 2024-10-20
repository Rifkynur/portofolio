import PortofolioLink from "./PortofolioLink";

const PortofolioLinks = ({ data }) => {
  return (
    <div>
      <div className="bg-black absolute right-0 top-0 flex gap-2 p-2 rounded-bl-xl group-hover:right-0 duration-300 md:p-2 md:gap-2 lg:px-4 lg:py-3 lg:gap-4 lg:-right-28">
        <PortofolioLink link={data.ghLink} icon={data.github} />
        {data.status === "deploy" ? <PortofolioLink link={data.demoLink} icon={data.goTo} /> : ""}
      </div>
    </div>
  );
};

export default PortofolioLinks;
