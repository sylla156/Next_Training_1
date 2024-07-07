import mobile from "../public/icons/mobile_web.png";
import graphic from "../public/icons/Graphic.png";
import frontend from "../public/icons/frontend.png";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import dri from "../public/images/dribble.png";
import dev from "../public/images/deviant.png";
import art from "../public/images/artstation.png";
import ske from "../public/images/sketchfab.png";
import cg from "../public/images/cgsociety.png";
import be from "../public/images/behance.png";
import artm from "../public/images/antmajeur.png";
import sp from "../public/images/spreadshirt.png";
import ad from "../public/images/adobe.png";
import fr from "../public/images/freepik.png";
import udacity from "../public/icons/udacity.png";
import upwork from "../public/icons/upwork 1.svg";
import tweeter from "../public/icons/tweeter.svg";
import linkedin from "../public/icons/linkedin.svg";
import notion from "../public/icons/notion.svg";

type routePath = { path: string; name: string };
type servicesPath = {
  img: string | StaticImport;
  title: string;
  subTitle: string;
  content: string;
};
type Card = {
  img: string | StaticImport;
  title: string;
  content: string;
  linkContent: string;
};

type WEBCONFIG = {
  routePath: routePath[];
  home: {
    title: string;
    subTitle: string;
    content: string;
    button1: routePath;
    button2: routePath;
  };
  services: {
    title: string;
    card: servicesPath[];
  };
  work: {
    title: string;
    imgs: StaticImport[];
  };
  about: {
    title: string;
    content: string[];
    quote: string;
    card: Card[];
  };
  contact: {
    title: string;
    content: string;
    email: {
      title: string;
      link: string;
    };
    network: {
      title: string;
      imgs: StaticImport[];
    };
    form: {
      [key: string]: string;
    };
  };
};

const WebConfig: WEBCONFIG = {
  routePath: [
    { path: "#services", name: "services" },
    { path: "#work", name: "Work" },
    { path: "#about", name: "About" },
    { path: "#contact", name: "contact" },
  ],
  home: {
    title: "Freelance Full Stack Designer",
    subTitle: "Hi 👋, i'm Sylla Ibrahim",
    content: '"good design makes the world a better places"',
    button1: { path: "#work", name: "My Work" },
    button2: { path: "#contact", name: "Let's talk" },
  },
  services: {
    title: "What I do",
    card: [
      {
        img: mobile,
        title: "Mobile & Web Design",
        content:
          "Need a website or mobile app? I can create beautiful websites or mobile apps based on your content, or redesign your old website to improve user engagement or achieve your business goals.",
        subTitle: "Get an estimate",
      },
      {
        img: graphic,
        title: "Graphic Design",
        content:
          "Need art for your project? I can create beautiful art, designs based on your project requirements such as business cards, digital banners, icons, logos, hand-drawn characters, abstracts, textures, etc. ",
        subTitle: "Get an estimate",
      },
      {
        img: frontend,
        title: "Frontend Development",
        content:
          "Already have the design? I can create static websites such as landing pages, company sites, and custom websites with minimal javascript. Will deliver a well-documented code. ",
        subTitle: "Get and estimate",
      },
    ],
  },

  work: {
    title: "Where to find 🔍 my work",
    imgs: [dri, dev, art, ske, cg, be, artm, sp, ad, fr],
  },

  about: {
    title: "About 👱‍♂️ 💼 Me",
    content: ["", "", ""],
    quote: "❤️ I love good design, gaming, art, netflix, and gadgets.",
    card: [
      {
        img: udacity,
        title: "User Experience Nanodegree",
        content: "The right way to design anything.",
        linkContent: "View Certificate",
      },
      {
        img: upwork,
        title: "Available via Upwork",
        content: "Top rated freelancer on upwork",
        linkContent: "Hire Me",
      },
    ],
  },

  contact: {
    title: "",
    content: "",
    email: {
      title: "",
      link: "",
    },
    network: {
      title: "",
      imgs: [tweeter, linkedin, notion],
    },
    form: {
      name: "Your name",
      email: "Your email",
      websit: "Your website (if exists)",
      desc: "How can i help ?",
      submit: "Get in touch",
    },
  },
};

export default WebConfig;
