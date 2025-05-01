import FooterHeader from "./FooterHeader";
import FooterNavigation from "./FooterNavigation";
import FooterSocial from "./FooterSocial";
import FooterInformation from "./FooterInformation";
import FooterBottom from "./FooterBottom";
function FooterComponent() {
  return (
    <footer className="w-full bg-slate-900 text-white mt-10 p-10 relative bottom-0 left-0 right-0 ">
      <div className="flex flex-col gap-2 md:flex-row justify-between lg:justify-around max-w-[1324px] mx-auto">
        <FooterHeader />
        <FooterNavigation />
        <FooterSocial />
        <FooterInformation />
      </div>
      <FooterBottom />
    </footer>
  );
}
export default FooterComponent;
