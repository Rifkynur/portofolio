import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaUser, FaTools, FaExternalLinkAlt } from "react-icons/fa";
// import { FaUser, FaTools } from "react-icons/fa";
import { IoDocument } from "react-icons/io5";
import { RiContactsBook2Fill } from "react-icons/ri";

// data social media
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

// data navbar
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

// data formal education
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

// data nonformal education
export const nonformalEducation = [
  {
    school: "Binar Academy",
    timeRange: "Feb 2024 - juni 2024",
    desc: "FrontEnd Engineer, React js",
  },
  {
    school: "Dicoding-FrontEnd",
    timeRange: "Okt 2023",
    desc: "Belajar front-end web untuk pemula",
  },
];

// data experience
export const experience = [
  {
    school: "Doiscode Technology",
    timeRange: "Sep 2024 - Des 2024",
    desc: "Mobile App Using React Native",
  },
  {
    school: "Brandin Indonesia",
    timeRange: "Agu 2024 - Sep 2024",
    desc: "Building Website Using React JS",
  },
  {
    school: "Pt.Honda Prospect Motor",
    timeRange: "Nov 2019 - Nov 2022",
    desc: "Leica Measurement Operator",
  },
];

// data footer
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

// data portofolio
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
    status: "deploy",
  },
  {
    id: 2,
    ghLink: "https://github.com/Rifkynur/templatePodcast",
    demoLink: "https://template-podcast.vercel.app",
    title: "Landing Page Podcast and Blog",
    tool: ["React", "Tailwind"],
    github: <FaGithub />,
    goTo: <FaExternalLinkAlt />,
    img: "./img/porto/podcast.PNG",
    status: "deploy",
  },
  {
    id: 2,
    ghLink: "https://github.com/Rifkynur/portofolio",
    demoLink: "https://portofolio-rifkynur.vercel.app/",
    title: "Personal Portofolio Website",
    tool: ["React", "Tailwind"],
    github: <FaGithub />,
    goTo: <FaExternalLinkAlt />,
    img: "./img/porto/porto.PNG",
    status: "deploy",
  },
  {
    id: 3,
    ghLink: "https://github.com/Rifkynur/BCR-Binar_Rental_Car",
    demoLink: "https://bcr-binar-rental-car.vercel.app/",
    title: "Binar Rental Car",
    tool: ["React", "Bootstrap"],
    github: <FaGithub />,
    goTo: <FaExternalLinkAlt />,
    img: "./img/porto/binar.PNG",
    status: "deploy",
  },
  {
    id: 4,
    ghLink: "https://github.com/Rifkynur/clone-youtube",
    demoLink: "https://clone-youtube-indol-five.vercel.app/",
    title: "Clone Youtube",
    tool: ["React"],
    github: <FaGithub />,
    goTo: <FaExternalLinkAlt />,
    img: "./img/porto/cloneYt.PNG",
    status: "deploy",
  },
  {
    id: 5,
    ghLink: "https://github.com/Rifkynur/shopping-cart",
    demoLink: "https://shopping-cart-coral-omega.vercel.app/",
    title: "Shopping Cart",
    tool: ["React", "Tailwind", "Zustand"],
    github: <FaGithub />,
    goTo: <FaExternalLinkAlt />,
    img: "./img/porto/shoppingCart.PNG",
    status: "deploy",
  },
  {
    id: 6,
    ghLink: "https://github.com/Rifkynur/vue-Job-listing",
    demoLink: "",
    title: "Vue Job Listings",
    tool: ["Vue", "Tailwind", "json-server"],
    github: <FaGithub />,
    goTo: <FaExternalLinkAlt />,
    img: "./img/porto/vueJob.PNG",
    status: "undeploy",
  },
  {
    id: 7,
    ghLink: "https://github.com/Rifkynur/shoppingCartVuePinia",
    demoLink: "https://shopping-cart-vue-pinia.vercel.app/",
    title: "Vue Shoppig Cart",
    tool: ["Vue", "Tailwind", "Pinia"],
    github: <FaGithub />,
    goTo: <FaExternalLinkAlt />,
    img: "./img/porto/shoppingCartVue.PNG",
    status: "deploy",
  },
  {
    id: 8,
    ghLink: "https://github.com/Rifkynur/kas",
    demoLink: "https://jimpitan-desa-pesu.vercel.app/",
    title: "Dashboard Jimpitan",
    tool: ["Vue", "Tailwind", "Pinia", "Express", "Prisma", "Supabase"],
    github: <FaGithub />,
    goTo: <FaExternalLinkAlt />,
    img: "./img/porto/jimpitan.PNG",
    status: "deploy",
  },
  {
    id: 9,
    ghLink: "https://github.com/Rifkynur/rentCar",
    // demoLink: "https://jimpitan-desa-pesu.vercel.app/",
    title: "Rental Car",
    tool: ["Laravel", "Bootstrap", "Livewire", "Sqlite"],
    github: <FaGithub />,
    goTo: <FaExternalLinkAlt />,
    img: "./img/porto/rentCar.PNG",
    status: "undeploy",
  },
  {
    id: 10,
    ghLink: "https://github.com/Rifkynur/traveleena",
    demoLink: "https://traveleena-eight.vercel.app/",
    title: "Traveleena",
    tool: ["Next js", "Tailwind"],
    github: <FaGithub />,
    goTo: <FaExternalLinkAlt />,
    img: "./img/porto/traveleena.PNG",
    status: "deploy",
  },
];

// data skill
export const skill = [
  {
    id: 1,
    title: "html",
    img: "./img/skill/svg/html.svg",
    type: "programmingLanguage",
  },
  {
    id: 2,
    title: "css",
    img: "./img/skill/svg/css.svg",
    type: "programmingLanguage",
  },
  {
    id: 3,
    title: "bootstrap",
    img: "./img/skill/svg/bootstrap.svg",
    type: "framework",
  },
  {
    id: 4,
    title: "tailwind",
    img: "./img/skill/svg/tailwind.svg",
    type: "framework",
  },
  {
    id: 5,
    title: "javascript",
    img: "./img/skill/svg/javascript.svg",
    type: "programmingLanguage",
  },
  {
    id: 6,
    title: "typescript",
    img: "./img/skill/svg/typescript.svg",
    type: "programmingLanguage",
  },
  {
    id: 7,
    title: "Php",
    img: "./img/skill/svg/php.svg",
    type: "programmingLanguage",
  },
  {
    id: 8,
    title: "react js",
    img: "./img/skill/svg/react.svg",
    type: "framework",
  },
  {
    id: 9,
    title: "react native",
    img: "./img/skill/svg/react.svg",
    type: "framework",
  },
  {
    id: 10,
    title: "redux",
    img: "./img/skill/svg/redux.svg",
    type: "tool",
  },
  {
    id: 11,
    title: "Next js",
    img: "./img/skill/svg/next.svg",
    type: "framework",
  },
  {
    id: 12,
    title: "Vue js",
    img: "./img/skill/svg/vue.svg",
    type: "framework",
  },
  {
    id: 13,
    title: "express",
    img: "./img/skill/svg/express.svg",
    type: "framework",
  },
  {
    id: 14,
    title: "mysql",
    img: "./img/skill/svg/mysql.svg",
    type: "tool",
  },
  {
    id: 15,
    title: "git",
    img: "./img/skill/svg/git.svg",
    type: "tool",
  },
  {
    id: 16,
    title: "figma",
    img: "./img/skill/svg/figma.svg",
    type: "tool",
  },
  {
    id: 17,
    title: "vs code",
    img: "./img/skill/svg/vccode.svg",
    type: "tool",
  },
  {
    id: 18,
    title: "laravel",
    img: "./img/skill/svg/laravel.svg",
    type: "framework",
  },
];
