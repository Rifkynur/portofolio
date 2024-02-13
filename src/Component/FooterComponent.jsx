import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
function FooterComponent() {
  return (
    <footer className="w-full text-center bg-slate-900 text-white mt-10 p-10 relative bottom-0 left-0 right-0">
      <div>
        <FaFacebook className="inline-block md:w-6 md:h-6" /> | <FaInstagram className="inline-block md:w-6 md:h-6" /> | <FaLinkedin className="inline-block md:w-6 md:h-6" /> | <FaGithub className="inline-block md:w-6 md:h-6" />
      </div>
      <div className="mt-2 text-xs italic md:text-lg">Copyright &copy; All Rights Reserved</div>
    </footer>
  );
}
export default FooterComponent;
