import {
  Smartphone,
  Bot,
  Gamepad2,
  Cpu,
  MemoryStick,
  Database,
  Users,
} from "lucide-react";

import file from "../assets/images/png/file.png";
import graph from "../assets/images/png/graph.png";
import rocket from "../assets/images/png/rocket.png";
import start from "../assets/images/png/start.png";
import integrity from "../assets/images/png/integrity.png";
import quality from "../assets/images/png/quality.png";
import success from "../assets/images/png/success.png";
import Infinite from "../assets/images/png/Infinite.png";
//industries
import governance from "../assets/images/industries/governance.jpg";
import fintech from "../assets/images/industries/fintech.jpg";
import healthcare from "../assets/images/industries/healthcare.jpg";
import advancedrobotics from "../assets/images/industries/advancedrobotics.jpg";
import energy from "../assets/images/industries/energy.jpg";
import edtech from "../assets/images/industries/edtech.jpg";
import space from "../assets/images/industries/space.jpg";
import security from "../assets/images/industries/security.jpg";
// porfolio image
// Import all images at the top (Web Development)
import FiveGHomesImg from "../assets/web-development-portfolio/5ghomes.png";
import BayutImg from "../assets/web-development-portfolio/bayut.png";
import ColdCreekcapImg from "../assets/web-development-portfolio/cold creekcap.png";
import EmergencyMusicImg from "../assets/web-development-portfolio/emergency music .png";
import FlatiornImg from "../assets/web-development-portfolio/flatiorn.png";
import MavenImg from "../assets/web-development-portfolio/maven.png";
import MenissaCateringsImg from "../assets/web-development-portfolio/menissa caterings.png";
import MethodistImg from "../assets/web-development-portfolio/methodist.png";
import ThinkRealityImg from "../assets/web-development-portfolio/think reality.png";

// Import all images at the top (App Development)
import DubaiTravelGuideImg from "../assets/app-development-portfolio/dubai travel guide.png";
import EloraHairPalourImg from "../assets/app-development-portfolio/elora hair palour.png";
import EvansFrancisImg from "../assets/app-development-portfolio/evans francis.png";
import HouseOfDeliverenceImg from "../assets/app-development-portfolio/house of deliverence.png";
import MybitsShopImg from "../assets/app-development-portfolio/mybitsshop.png";
import NamazImg from "../assets/app-development-portfolio/namaz.png";
import PoteaImg from "../assets/app-development-portfolio/potea.png";
import RentopBikeAndCarImg from "../assets/app-development-portfolio/rentop bike and car.png";
//portfolio
import nanoflow from "../assets/portfolio/nanoflow.png";
import padipal from "../assets/portfolio/padipal.png";
import cryptopadie from "../assets/portfolio/cryptopadie.png";

import { CgWebsite } from "react-icons/cg";
import { GoFileMedia } from "react-icons/go";
import { TfiLayoutMediaRightAlt } from "react-icons/tfi";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import {
  FaAppStoreIos,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import { SiFlutter } from "react-icons/si";
import { TbDeviceMobileCode } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";

export const companyDetails = {
  name: "Techinnoveao",
  email: "aicompany@gmail.com",
  phone: "+91-9810600446",
  address: "5/203-B lalita park laxmi nagar delhi 110092",
  socialLinks: [
    {
      href: "",
      icon: FaLinkedin,
    },
    {
      href: "",
      icon: FaInstagram,
    },
    { href: "", icon: FaXTwitter },
    {
      href: "",
      icon: FaYoutube,
    },
  ],
  whatsapp: "",
};

export const services = [
  {
    title: "App Development",
    link: "app-development",
    description:
      "Build powerful, scalable applications tailored to your business needs.",
    icon: Smartphone,
    bgColor: "bg-gray-900",
  },
  {
    title: "Chatbot Development",
    link: "chatbot-development",
    description:
      "Enhance customer support with AI-driven chatbots across multiple platforms.",
    icon: Bot,
    bgColor: "bg-gray-900",
  },
  {
    title: "Game Development",
    link: "game-development",
    description:
      "Create engaging games across mobile, console, and VR platforms.",
    icon: Gamepad2,
    bgColor: "bg-gray-900",
  },
  {
    title: "IT Consulting and Strategy",
    link: "it-consulting-strategy",
    description:
      "Expert guidance to optimize your IT infrastructure and digital strategy.",
    icon: Cpu,
    bgColor: "bg-gray-900",
  },
  {
    title: "AI Development",
    link: "ai-development",
    description:
      "Implement AI-powered systems to automate processes and gain insights.",
    icon: MemoryStick,
    bgColor: "bg-gray-900",
  },
  {
    title: "Data Analytics & Business Intelligence",
    link: "data-analytics-business-intelligence",
    description:
      "Leverage data to make informed business decisions and drive growth.",
    icon: Database,
    bgColor: "bg-gray-900",
  },
  {
    title: "UI/UX Design",
    link: "ui-ux-design",
    description:
      "Crafting intuitive interfaces that ensure accessibility and seamless user experiences.",
    icon: Users,
    bgColor: "bg-gray-900",
  },
];

export const whyChooseUs = [
  "Transparent Communication: From day one, we keep you in the loop, ensuring clarity at every stage.",
  "Agile Teams: We adapt quickly to changes, maintaining flexibility without compromising quality.",
  "Tailored Tech Stacks: We select the right tools and technologies to meet your unique business needs.",
  "On-Time Delivery: Projects are delivered as promised, with no surprises or hidden costs.",
  "Results-Driven Approach: We measure success by the value we create for your business, not just by meeting deadlines.",
];

export const testimonials = [
  {
    quote:
      "We needed more than just an app — we needed a reliable, scalable product. The team delivered exactly that. They were organized, responsive, and the final app is something we’re truly proud to share with our users.",
    author: "Michelle K., Product Owner, EdTech Startup",
    rating: 5,
    gridClass: "col-span-1",
  },
  {
    quote:
      "The chatbot they built handles our customer queries better than we expected. It feels natural, understands context, and has taken a huge load off our support team. Honestly, we wish we had done it sooner.",
    author: "Deepak V., CX Manager, eCommerce Brand",
    rating: 5,
    gridClass: "col-span-1",
  },
  {
    quote:
      "What impressed us most wasn’t just their technical skills, but how well they understood what makes a game fun. They didn’t just code it — they helped shape the whole experience. Our players love it.",
    author: "Carlos J., Creative Director, Indie Game Studio",
    rating: 5,
    gridClass: "col-span-1",
  },
  {
    quote:
      "We went from scattered spreadsheets to a sleek, real-time dashboard. Now our data is clear, organized, and actually usable. The insights we get from it are changing the way we run our business.",
    author: "Anita S., Director of Strategy, Healthcare Group",
    rating: 5,
    gridClass: "col-span-1",
  },
  {
    quote:
      "Our app looked okay before — but it didn’t feel right. Their design team gave it a whole new life. It’s more intuitive, it flows better, and users are finally enjoying the experience.",
    author: "Jordan F., Co-founder, Health & Wellness Startup",
    rating: 5,
    gridClass: "col-span-1",
  },
];

export const highlights = [
  {
    id: 1,
    icon: file,
    title: "App Development That Works for Your Business",
    description:
      "We design and develop mobile apps for iOS, Android, and cross-platform frameworks like Flutter and React Native. From MVPs to full-scale apps, we create clean, scalable apps that deliver value.",
  },
  {
    id: 2,
    icon: graph,
    title: "Smart Chatbots That Feel Human",
    description:
      "We create conversational chatbots that automate customer service, lead qualification, and e-commerce guidance while maintaining a human-like experience.",
  },
  {
    id: 3,
    icon: rocket,
    title: "Game Development That Engages and Excites",
    description:
      "From casual mobile games to immersive AR/VR experiences, we handle the entire game development process to keep players coming back.",
  },
  {
    id: 4,
    icon: start,
    title: "AI Development Tailored to Your Business",
    description:
      "We build AI solutions that are practical and effective — from predictive analytics to AI-driven automation, we deliver real-world impact.",
  },
];

export const faqs = [
  {
    question: "What does Techinnoveao do?",
    answer: `We partner with businesses to create impactful digital solutions, from mobile apps and chatbots to data analytics and AI-driven systems. Our focus is on solving real-world problems through practical, effective technology.`,
  },
  {
    question: "What services does Techinnoveao offer?",
    answer: `We offer app development, game development, AI solutions, IT consulting, data analytics, and UI/UX design. Our team is skilled in creating products that are scalable, user-friendly, and aligned with your business goals.`,
  },
  {
    question: "How does Techinnoveao handle data security?",
    answer: `We follow industry best practices for data security, including encryption, secure storage, and access controls. Our solutions are designed with security in mind to protect your data at every stage of the project.`,
  },
  {
    question: "Can Techinnoveao assist with game development?",
    answer: `Absolutely. We specialize in creating engaging mobile and desktop games using Unity and Unreal Engine. From concept to launch, we focus on crafting well-balanced, visually appealing games that keep players coming back.`,
  },
  {
    question: "How can I get started with Techinnoveao?",
    answer: `Reach out to us via our website to schedule a free consultation. We'll discuss your project, explore potential solutions, and outline the next steps.`,
  },
];

export const coreValues = [
  {
    id: 1,
    icon: integrity,
    title: "Integrity",
    description:
      "Transparency and honesty guide our interstellar relationships.",
  },
  {
    id: 2,
    icon: quality,
    title: "Quality",
    description:
      "We pursue excellence in every line of code, every design pixel, every cosmic dimension.",
  },
  {
    id: 3,
    icon: success,
    title: "Customer Success",
    description:
      " Your triumph is ours—measured by tangible impact and universal reach.",
  },
  {
    id: 4,
    icon: Infinite,
    title: "Infinite Learning",
    description:
      "We explore beyond known boundaries, continuously expanding our quantum knowledge.",
  },
];

export const visionAndMission = [
  {
    title: "Our Vision",
    description:
      "To be a trusted partner for businesses seeking impactful digital solutions, empowering them through innovative technology to achieve sustainable growth.",
  },
  {
    title: "Our Mission",
    description:
      "To deliver exceptional software solutions that solve real-world problems and drive business success through a combination of technical expertise, strategic thinking, and a commitment to quality.",
  },
  {
    title: "Our Journey",
    description:
      "From app development and game design to AI solutions and data analytics, Techinnoveao has evolved into a go-to technology partner for companies across diverse industries, committed to delivering excellence at every step.",
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerce Websites",
    // icon: require("./assets/images/icons/online-shopping.png"),
    img: CgWebsite,
    description:
      "Empowering online businesses with tailored e-commerce solutions powered by AI. Our platforms enhance customer engagement, streamline operations, and drive substantial revenue growth through personalized shopping experiences and intelligent recommendations.",
  },
  {
    id: 2,
    title: "Social Media Websites",
    img: GoFileMedia,
    // icon: require("./assets/images/icons/socialmedia.png"),
    description:
      "Creating custom social media websites that captivate audiences with AI-driven content recommendations and engagement strategies, building brand loyalty and driving growth effortlessly.",
  },
  {
    id: 3,
    title: "Landing Websites",
    img: TfiLayoutMediaRightAlt,
    // icon: require("./assets/images/icons/landing-page.png"),
    description:
      "Crafting high-converting landing pages with AI-enhanced design and user behavior tracking to grab attention and inspire action. Designs that showcase your brand’s message and maximize conversions through personalized experiences.",
  },
  {
    id: 4,
    title: "Custom Websites",
    img: MdOutlineDashboardCustomize,
    // icon: require("./assets/images/icons/software-development.png"),
    description:
      "Delivering bespoke websites powered by AI to meet your unique business needs. Our solutions seamlessly combine creativity, functionality, and AI-driven features for an exceptional online presence.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    img: FaAppStoreIos,
    // icon: require("./assets/images/icons/ios-development.png"),
    description:
      "Specializing in iOS app development using Swift and Objective-C. Delivering apps optimized for performance, speed, and responsiveness with AI-powered features like predictive analytics and personalized user experiences.",
  },
  {
    id: 2,
    title: "Android App Development",
    img: IoLogoAndroid,
    // icon: require("./assets/images/icons/android-development.png"),
    description:
      "Designing and developing Android apps tailored to your business goals. Leveraging Java and Kotlin alongside AI technologies to create robust, efficient applications with intelligent automation and enhanced user engagement.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    img: SiFlutter,

    // icon: require("./assets/images/icons/flutter-development.png"),
    description:
      "Using Flutter to create apps for both iOS and Android with a single codebase. Integrating AI-driven solutions to overcome challenges, enhance performance, and deliver smarter, feature-rich applications.",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    img: TbDeviceMobileCode,
    // icon: require("./assets/images/icons/hybrid-app-development.png"),
    description:
      "Developing feature-rich hybrid apps tailored to your business needs. Incorporating AI-powered tools to create mobile-friendly apps that work seamlessly across iOS and Android platforms while delivering intelligent insights and improved functionality.",
  },
];

export const futureTechSectors = [
  {
    id: 1,
    img: governance,
    title: "Governance & Law",
    description:
      "AI-driven governance systems, decentralized smart city infrastructure, and AI-optimized public resource management for transparent and efficient decision-making.",
  },
  {
    id: 2,
    img: fintech,
    title: "Fintech & Decentralized Economy",
    description:
      "Holo-economy platforms integrating AI, blockchain, and quantum computing, self-regulating DeFi ecosystems, and quantum-secure financial systems.",
  },
  {
    id: 3,
    img: healthcare,
    title: "Healthcare & Bioinformatics",
    description:
      "AI-augmented healthcare ecosystems, personalized genetic and consciousness-based medicine, and neural AI interfaces for mind-body optimization.",
  },
  {
    id: 4,
    img: advancedrobotics,
    title: "Advanced Robotics & Automation",
    description:
      "Quantum AI-driven manufacturing, sentient AI collaborators in R&D, and self-sustaining AI factories for intelligent industrial solutions.",
  },
  {
    id: 5,
    img: energy,
    title: "Energy & Climate Sustainability",
    description:
      "AI-based universal energy flow management, quantum blockchain for global resource distribution, and zero-point energy-powered decentralized grids.",
  },
  {
    id: 6,
    img: edtech,
    title: "Edtech & Meta-Learning",
    description:
      "AI-driven knowledge expansion networks, holo-academies for experiential learning, and quantum neuro-learning systems for accelerated education.",
  },
  {
    id: 7,
    img: space,
    title: "Space & Extraterrestrial Expansion",
    description:
      "Astrocomputing networks utilizing AI and quantum for space travel, terraforming AI systems, and extraterrestrial economy with Web 5.0 communication.",
  },
  {
    id: 8,
    img: security,
    title: "Advanced Defense & Autonomous Security",
    description:
      "AI-driven autonomous weapon systems, private military contracting for force projection, and directed energy and hypersonic tech for advanced defense.",
  },
];

export const webPortfolio = [
  {
    id: 1,
    img: FiveGHomesImg,
    title: "5g Homes",
    link: "https://5ghighspeedinternet.co",
  },
  {
    id: 2,
    img: BayutImg,
    title: "Bayut",
    link: "https://www.bayut.com",
  },
  {
    id: 3,
    img: ColdCreekcapImg,
    title: "Cold Creekcap",
    link: "https://www.coldcreekcap.com",
  },
  {
    id: 4,
    img: EmergencyMusicImg,
    title: "Emergency Music",
    link: "https://www.figma.com/proto/GwlIMQuIuFevhOEp8moALy/emergence-music-distribuBon?page-id=6298%3A7215&type=design&node-id=6298-7776&viewport=407%2C314%2C0.11&t=QCtz7M4USn6gI1CG-1&scaling=min-zoom",
  },
  {
    id: 5,
    img: FlatiornImg,
    title: "Flatiorn",
    link: "",
  },
  {
    id: 6,
    img: MavenImg,
    title: "Maven",
    link: "",
  },
  {
    id: 7,
    img: MenissaCateringsImg,
    title: "Menissa Caterings",
    link: "https://messinascatering.com",
  },
  {
    id: 8,
    img: MethodistImg,
    title: "Methodist",
    link: "",
  },
  {
    id: 9,
    img: ThinkRealityImg,
    title: "Think Reality",
    link: "https://thinkrealty.ae",
  },
];

export const appPortfolio = [
  {
    id: 1,
    img: DubaiTravelGuideImg,
    title: "Dubai Travel Guide",
    link: "https://play.google.com/store/apps/details?id=com.eBps.dubai.travel.guide&pcampaignid=web_share",
  },
  {
    id: 2,
    img: EloraHairPalourImg,
    title: "Elora Hair Palour",
    link: "https://play.google.com/store/apps/details?id=app.barbera.io&pcampaignid=web_share",
  },
  {
    id: 3,
    img: EvansFrancisImg,
    title: "Evans Francis",
    link: "https://play.google.com/store/apps/details?id=com.chrisBanappdevelopers.evansfrancis&pcampaignid=web_share",
  },
  {
    id: 4,
    img: HouseOfDeliverenceImg,
    title: "House of Deliverence",
    link: "https://play.google.com/store/apps/details?id=com.chrisBanappdevelopers.hod&pcampaignid=web_share",
  },
  {
    id: 5,
    img: MybitsShopImg,
    title: "Mybits Shop",
    link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
  },
  {
    id: 6,
    img: NamazImg,
    title: "Namaz",
    link: "https://play.google.com/store/apps/details?id=com.iccbrossard.prayerBmes&pcampaignid=web_share",
  },
  {
    id: 7,
    img: PoteaImg,
    title: "Potea",
    link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
  },
  {
    id: 8,
    img: RentopBikeAndCarImg,
    title: "Rentop Bike and Car",
    link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
  },
];

export const blockchainPortfolio = [
  {
    id: 1,
    img: nanoflow,
    title: "Nanoflow",
    link: "https://play.google.com/store/apps/details?id=com.nanfolo.user.app",
  },
  {
    id: 2,
    img: padipal,
    title: "Padipal",
    link: "https://padiepal.com",
  },
  {
    id: 3,
    img: cryptopadie,
    title: "Cryptopadie",
    link: "https://cryptopadie.com/",
  },
];
