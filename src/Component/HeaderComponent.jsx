import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

function HeaderComponent() {
  return (
    <>
      <div className="w-10/12 mx-auto bg-slate-200  text-slate-800 relative mt-10 rounded-xl md:flex md:justify-between md:items-center lg:justify-evenly dark:bg-slate-800 dark:text-white">
        <div className="header-left">
          <div className="mx-auto absolute left-0 right-0 -top-8 md:right-full md:bottom-0 md:top-0 lg:-top-9">
            <div className="p-1 w-16 mx-auto bg-slate-200 rounded-full  md:pt-5 md:ms-2 md:w-20 lg:w-36 lg:p-3 dark:bg-slate-800">
              <img src="./img/Takimm.jpg" alt="" className="w-16 top-0 mx-auto rounded-full md:w-40" />
            </div>
          </div>
          <div className="text-center pt-10 pb-3 md:pt-5 md:ps-24 md:text-left">
            <h3 className="text-md font-bold lg:text-2xl">RIFKI NUR HIDAYAT</h3>
            <h5 className="text-xs text-slate-700 lg:text-lg dark:text-slate-400">Front End Developer</h5>
            <ul className="flex justify-center items-center text-sm mt-3 text-slate-800 md:justify-start lg:text-lg dark:text-slate-400">
              <li className="mx-1 hover:text-blue-700">
                <a href="">
                  <FaFacebook />
                </a>
              </li>
              <li className="mx-1 hover:text-pink-600">
                <a href="">
                  <FaInstagram />
                </a>
              </li>
              <li className="mx-1 hover:text-slate-500">
                <a href="">
                  <FaLinkedin />
                </a>
              </li>
              <li className="mx-1 hover:text-slate-50">
                <a href="">
                  <FaGithub />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="header-right flex py-5 justify-evenly border-t-slate-800 border-t-2 md:border-none md:p-10 md:before:block md:before:w-[2px] md:before:h-10 md:before:me-10 md:before:bg-slate-800 lg:before:h-16 dark:border-t-slate-300 dark:md:before:bg-slate-300 ">
          <div className="text-xs">
            <h4 className="font-bold md:text-lg lg:text-xl text-slate-900 dark:text-white">Email</h4>
            <p className="text-[10px] text-slate-600 lg:text-base dark:text-slate-400">ythrifky619@gmail.com</p>
          </div>
          <div className="text-xs ps-2">
            <h4 className="font-bold md:text-lg lg:text-xl text-slate-900 dark:text-white">Location</h4>
            <p className="text-[10px] text-slate-600 lg:text-base dark:text-slate-400">Klaten, Jawa Tengah, Indonesia</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default HeaderComponent;
