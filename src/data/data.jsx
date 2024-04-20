import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaUser, FaTools, FaExternalLinkAlt } from "react-icons/fa";
// import { FaUser, FaTools } from "react-icons/fa";
import { IoDocument } from "react-icons/io5";
import { RiContactsBook2Fill } from "react-icons/ri";
export const headerSocial = [
  {
    title: "Facebook",
    patch: "https://www.facebook.com/share/BS9nJ9tLkMwjmKJH/?mibextid=qi2Omg",
    target: "__blank",
    icon: <FaFacebook />,
  },
  {
    title: "Instagram",
    patch: "https://www.instagram.com/rifkynurh_?igsh=ZWc3N3AzZjF5cmYz",
    target: "__blank",
    icon: <FaInstagram />,
  },
  {
    title: "Linkedin",
    patch: "https://www.linkedin.com/in/rifky-nur-hidayat-26646b276?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    target: "__blank",
    icon: <FaLinkedin />,
  },
  {
    title: "Github",
    patch: "https://github.com/Rifkynur",
    target: "__blank",
    icon: <FaGithub />,
  },
];
export const navbarList = [
  {
    patch: "/",
    icon: <FaUser className="mx-auto w-5 h-5 md:w-8 md:h-8" />,
    title: "About",
  },
  {
    patch: "/skill",
    icon: <FaTools className="mx-auto w-5 h-5 md:w-8 md:h-8" />,
    title: "Skill",
  },
  {
    patch: "/porto",
    icon: <IoDocument className="mx-auto w-5 h-5 md:w-8 md:h-8" />,
    title: "Porto",
  },
  {
    patch: "/contact",
    icon: <RiContactsBook2Fill className="mx-auto w-5 h-5 md:w-8 md:h-8" />,
    title: "Contact",
  },
];

export const formalEducation = [
  {
    school: "SMKN 2 Klaten",
    timeRange: "2015-2019",
    desc: "Teknik Komputer dan Jaringan",
  },
  {
    school: "SMPN 1 Wedi",
    timeRange: "2012-2015",
    desc: "Wedi Klaten",
  },
];
export const nonformalEducation = [
  {
    school: "Dicoding-FrontEnd",
    timeRange: "Okt 2023",
    desc: "Belajar front-end web untuk pemula",
  },
  {
    school: "Binar Academy",
    timeRange: "Feb 2024 - sekarang",
    desc: "FrontEnd Engineer, React js",
  },
];
export const experience = [
  {
    school: "Pt.Honda Prospect Motor",
    timeRange: "Nov 2019 - Nov 2022",
    desc: "Leica Measurement Operator",
  },
];

export const footerNavigation = [
  {
    title: "About",
    icon: <FaUser />,
    patch: "/",
  },
  {
    title: "Skill",
    icon: <FaTools />,
    patch: "/skill",
  },
  {
    title: "Portofolio",
    icon: <IoDocument />,
    patch: "/porto",
  },
  {
    title: "Contact",
    icon: <RiContactsBook2Fill />,
    patch: "/contact",
  },
];

export const portofolio = [
  {
    id: 1,
    ghLink: "https://github.com/Rifkynur/dental-clean",
    demoLink: "https://rifkynur.github.io/dental-clean",
    title: "Landing Page Dentist Services",
    tool: ["React", "Tailwind"],
    github: <FaGithub />,
    goTo: <FaExternalLinkAlt />,
    img: "./img/porto/dentist.jpg",
  },
  {
    id: 2,
    ghLink: "https://github.com/Rifkynur/course",
    demoLink: "https://rifky-course.vercel.app/",
    title: "Landing Page Course",
    tool: ["React", "Bootstrap"],
    github: <FaGithub />,
    goTo: <FaExternalLinkAlt />,
    img: "./img/porto/course.PNG",
  },
];

export const skill = [
  {
    id: 1,
    title: "html",
    img: "./img/skill/html-5.png",
  },
  {
    id: 2,
    title: "css",
    img: "./img/skill/social.png",
  },
  {
    id: 3,
    title: "bootstrap",
    img: "./img/skill/bootstrap.png",
  },
  {
    id: 4,
    title: "tailwind",
    img: "./img/skill/tailwind-css-icon.png",
  },
  {
    id: 5,
    title: "javascript",
    img: "./img/skill/java-script.png",
  },
  {
    id: 6,
    title: "react",
    img: "./img/skill/structure.png",
  },
];
