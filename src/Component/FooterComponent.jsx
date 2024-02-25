import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { IoDocument } from "react-icons/io5";
import { RiContactsBook2Fill } from "react-icons/ri";
import { FaUser, FaTools } from "react-icons/fa";
import FooterLinkList from "../util/FooterLinkList";
function FooterComponent() {
  return (
    <footer className="w-full bg-slate-900 text-white mt-10 p-10 relative bottom-0 left-0 right-0 ">
      <div className="flex flex-col gap-2 md:flex-row justify-between lg:justify-around">
        <div>
          <h5 className="text-dark font-bold lg:text-xl">RIFKI NUR HIDAYAT</h5>
          <p className="text-slate-300 lg:text-lg">FrontEnd Developer</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-2 md:text-base lg:text-lg">Navigation</h3>
          <div>
            <FooterLinkList icon={<FaUser />} title="About" patch="/" />
            <FooterLinkList icon={<FaTools />} title="Skill" patch="/skill" />
            <FooterLinkList icon={<IoDocument />} title="Porto" patch="/porto" />
            <FooterLinkList icon={<RiContactsBook2Fill />} title="Contact" patch="/contact" />
          </div>
        </div>
        {/* <FooterLink head="Social Media" /> */}
        <div>
          <h3 className="text-sm font-semibold mb-2 md:text-base lg:text-lg">Social Media</h3>
          <FooterLinkList icon={<FaFacebook />} title="Facebook" target="_blank" patch="https://facebook.com" />
          <FooterLinkList icon={<FaInstagram />} title="Instagram" target="_blank" patch="https://instagram.com" />
          <FooterLinkList icon={<FaLinkedin />} title="Linkedin" target="_blank" patch="https://linkedin.com" />
          <FooterLinkList icon={<FaGithub />} title="Github" target="_blank" patch="https://github.com" />
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-2 md:text-base lg:text-lg">Information</h3>
          <ul className="text-xs flex flex-col gap-1 md:text-sm lg:text-base">
            <li>Wedi-Klaten</li>
            <li>Jawa Tengah</li>
            <li>
              <a href="https://wa.me/6281908746609" target="_blank" className="text-dark">
                +62 8190 8746 619
              </a>
            </li>
            <li>
              <a href="mailto:ythrifky619@gmail.com" target="_blank" className="text-dark">
                ythrifky619@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-8 text-xs md:text-base">
        <p>Built white ❤ and 🧃 in 2024</p>
        <p>
          Inspired By{" "}
          <a href="https://adityacprtm.dev/" target="blank" className="text-dark">
            @adityacprtm
          </a>
        </p>
      </div>
    </footer>
  );
}
export default FooterComponent;
