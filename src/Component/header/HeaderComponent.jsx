import EmailLocation from "../../util/EmailLocation";
import HeaderSocial from "./HeaderSocial";

function HeaderComponent() {
  return (
    <>
      <div className="w-10/12 mx-auto bg-primary text-slate-800 relative mt-10 rounded-xl md:flex md:justify-between md:items-center lg:justify-evenly dark:bg-slate-800 dark:text-white">
        <div className="header-left">
          <div className="mx-auto absolute left-0 right-0 -top-8 md:right-full md:bottom-0 md:top-0 lg:-top-9">
            <div className="p-1 w-16 mx-auto bg-primary rounded-full  md:pt-5 md:ms-2 md:w-20 lg:w-36 lg:p-3 dark:bg-slate-800">
              <img src="./img/pp.jpg" alt="" className="w-16 top-0 mx-auto rounded-full md:w-40" />
            </div>
          </div>
          <div className="text-center pt-10 pb-3 md:pt-5 md:ps-24 md:text-left">
            <h3 className="text-md font-bold lg:text-2xl">RIFKI NUR HIDAYAT</h3>
            <h4 className="text-xs text-slate-700 lg:text-lg dark:text-slate-400">Front End Developer</h4>
            <HeaderSocial />
          </div>
        </div>
        <div className="header-right flex py-5 justify-evenly border-t-light border-t-2 md:border-none md:p-10 md:before:block md:before:w-[2px] md:before:h-10 md:before:me-10 md:before:bg-light lg:before:h-16 dark:border-t-dark dark:md:before:bg-dark ">
          <EmailLocation title={"Email"} desc={"ythrifky619@gmail.com"} />
          <EmailLocation title={"Location"} desc={"Klaten, Jawa Tengah, Indonesia"} />
        </div>
      </div>
    </>
  );
}
export default HeaderComponent;
