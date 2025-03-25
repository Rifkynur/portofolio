import EachUtils from "../../util/EachUtils";
const PortofolioDesc = ({ img, title, tool }) => {
  return (
    <div className="h-full flex flex-col justify-between items-start">
      <div className="w-full h-[60px] object-cover md:h-[100px] lg:h-[150px]">
        <img src={img} alt={title} className=" w-full h-[70px] md:h-24 lg:h-40" />
      </div>
      <div className="p-1 flex flex-col justify-between md:p-2 md:h-[75px] lg:h-[110px]">
        <h3 className="text-[10px] font-bold mt-1 max-w-full lg:text-lg">{title}</h3>
        <div className="flex flex-wrap gap-1 mt-2">
          <EachUtils
            of={tool}
            render={(data) => {
              return <span className="bg-light dark:bg-dark text-black border font-semibold text-[6px] py-[2px] px-1 rounded-md border-black  md:text-[10px] lg:text-sm">{data}</span>;
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PortofolioDesc;
