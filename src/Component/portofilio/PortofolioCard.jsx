import PortofolioDesc from "./PortofolioDesc";
import PortofolioLinks from "./PortofolioLinks";

const PortofolioCard = ({ data }) => {
  return (
    <div className="w-full pb-2 h-full rounded-xl border-[2px] border-black shadow-cardShadowSmall relative overflow-hidden group shadow-slate-900 dark:bg-slate-600 md:shadow-cardShadowBig dark:md:shadow-darkShadowBig dark:shadow-darkShadowSmall">
      <PortofolioLinks data={data} />
      <PortofolioDesc img={data.img} tool={data.tool} title={data.title} />
    </div>
  );
};

export default PortofolioCard;
