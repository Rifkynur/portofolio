import EachUtils from "../../util/EachUtils";
const PortofolioDesc = ({ img, title, tool }) => {
  return (
    <div className="h-[230px] md:h-[250px] lg:h-[300px] flex flex-col ">
      <div className="w-full h-[180px] object-cover md:h-[300px] lg:h-[200px] bg-blue-300">
        <img src={img} alt={title} className=" w-full h-full object-cover " />
      </div>
      <div className="p-1 flex flex-col justify-between w-full h-full md:p-2 lg:h-[110px]">
        <h3 className="text-sm font-bold mt-1 max-w-full lg:text-lg">{title}</h3>
        <div className="flex flex-wrap gap-1 mt-2 ">
          <EachUtils
            of={tool}
            render={(data) => {
              return <span className="bg-light dark:bg-dark text-black border font-semibold text-xs py-[2px] px-1 rounded-md border-black lg:text-sm dark:text-gray-300">{data}</span>;
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PortofolioDesc;
