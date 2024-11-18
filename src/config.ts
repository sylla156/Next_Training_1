import mobile from "../public/icons/mobile_web.png";
import graphic from "../public/icons/Graphic.png";
import frontend from "../public/icons/frontend.png";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

import codingGameLogo from "../public/images/codingGameLogo.jpeg";
import hub2Logo from "../public/images/hub2Logo.jpeg";
import wazaLogo from "../public/images/wazaLogo.jpeg";
import coollionLogo from "../public/images/coollionLogo.png";
import novateDigitale from "../public/images/NovateDigitalLogo.jpeg";

import linkedin from "../public/icons/linkedin.svg";
import upwork from "../public/icons/upwork.svg";
import githubLogo from "../public/icons/githubLogo.svg";

import coollionfinance from "../public/images/coollionfinance.png";
import coollionfinanceap from "../public/images/coollionfinanceapp.png";
import fasto from "../public/images/fasto.png";
import fastoapp from "../public/images/fastoapp.png";
import kori from "../public/images/koriinvest.png";
import adinkra from "../public/images/adinkra.png";
import gapila from "../public/images/gapila.png";
import nanapicks from "../public/images/nanapicks.png";

type routePath = { path: string; name: string; hidden?: boolean };
type servicesPath = {
  img: string | StaticImport;
  title: string;
  subTitle: string;
  content: string;
};
type Card = {
  img: string | StaticImport;
  imgDark: string | StaticImport;
  title: string;
  content: string;
  linkContent: string;
  link: string | string[];
};

export type languages = "en";

export interface WEBCONFIG {
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
    subTitle: string;
    content: string;
    projects: {
      title: string;
      content: string;
      img: string | StaticImport;
      tags: string[];
      link: string;
      github?: string;
    }[];
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
      imgs: { img: StaticImport; link: string }[];
    };
    form: {
      [key: string]: string;
    };
  };
  footer: {
    section1: {
      name: string;
      title: string;
    };
    section2: {
      title: string;
      github: {
        title: string;
        link: string;
      };
    };
  };
}

interface GLOBALEWEBCONFIG {
  languages: languages[];
  translations: { [key in languages]: WEBCONFIG };
}

export const languageTable: {
  language: languages;
  name: { [key in languages]: string };
  logo: string;
}[] = [
  {
    language: "en",
    name: { en: "" },
    logo: "🇺🇸",
  },
  // {
  //   language: "en",
  //   name: { en: "", fr: "", es: "" },
  //   logo: "🇺🇸",
  // },
  // {
  //   language: "es",
  //   name: { en: "", fr: "", es: "" },
  //   logo: "🇪🇸",
  // },
];

const GlobaleWebConfig: GLOBALEWEBCONFIG = {
  languages: ["en"],
  translations: {
    en: {
      routePath: [
        { path: "#services", name: "services", hidden: false },
        { path: "#work", name: "Work" },
        { path: "#about", name: "About" },
        { path: "#contact", name: "contact" },
      ],
      home: {
        title: "Full Stack Developer",
        subTitle: "Hi 👋, I'm Sylla Ibrahim",
        content: "Join me in turning your project ideas into reality!",
        button1: { path: "#work", name: "My Work" },
        button2: { path: "#contact", name: "Let's talk" },
      },
      services: {
        title: "What I Do",
        card: [
          {
            img: mobile,
            title: "Front-End Development",
            content:
              "Specializing in creating responsive and engaging user interfaces. Transforming designs into seamless front-end experiences that enhance user interaction.",
            subTitle: "UI Development",
          },
          {
            img: graphic,
            title: "Back-End Development",
            content:
              "Expertise in developing scalable APIs and robust server-side applications. Ensuring secure and efficient functionality to support seamless application operations.",
            subTitle: "API Development",
          },
          {
            img: frontend,
            title: "Full-Stack Development",
            content:
              "Combining front-end and back-end technologies to deliver comprehensive web solutions. From UI design to server-side architecture, ensuring cohesive and efficient applications that meet business needs.",
            subTitle: "Full-Stack Solutions",
          },
        ],
      },
      work: {
        title: "A Showcase of My Work and Accomplishments",
        subTitle: "My work",
        content:
          "Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.",
        projects: [
          {
            title: "Adinkra Institute",
            img: adinkra,
            content:
              "The Adinkra Distinguished Black Achievers Honors is a prestigious recognition program under the Adinkra Alliance Institute, dedicated to honoring individuals who have demonstrated exceptional leadership and impact in their communities.",
            tags: ["#Reactjs", "#MUI", "#Typescript", "#Mapbox"],
            link: "https://www.adinkrainstitute.com/",
            github: "https://github.com/sylla156/Adinkra_Institute.git",
          },
          {
            title: "Gapila",
            img: gapila,
            content: `Un système de génération d’avis ludique : Avec GAPILA, collectez des avis Google de façon amusante grâce à des QR codes personnalisés et des jeux concours. Offrez des récompenses pour encourager vos clients à participer, boostant votre visibilité et leur engagement.`,
            tags: ["#Nextjs", "#Shadcn", "#Strapi", "#Tailwind"],
            link: "https://www.gapila.com/",
          },
          {
            title: "Nanapicks",
            img: nanapicks,
            content:
              "NanaPicks is a revolutionary prediction platform empowering users worldwide to make bold predictions on real-world events and earn big rewards. From sports to finance and beyond, NanaPicks lets you turn your insights into earnings.",
            tags: ["#Reactjs", "#Shadcn", "#Tailwind"],
            link: "https://nanapicks.com/",
            github: "https://github.com/coollionfinance1/nana-picks.git",
          },
          {
            title: "Invest Kori",
            img: kori,
            content:
              "Invest Kori is a robust investment platform developed by Cool Lion Finance. It aims to provide non-residents in Côte d'Ivoire with the opportunity to counter the depreciation of their local currencies (cedi, naira) by converting them into foreign currencies (FCFA pegged to the euro) and investing in real estate projects or property placements.",
            tags: ["#Nextjs", "#Redux", "#Prisma", "#Typescript"],
            link: "https://investkori.com/",
            github: "https://github.com/sylla156/Invest-kori.git",
          },
          {
            title: "Cool Lion Finance",
            img: coollionfinance,
            content:
              "Cool Lion Finance is an innovative lending platform that revolutionizes the way borrowers and lenders connect, offering a secure and convenient investment experience. Our platform supports various payment methods, with a focus on crypto and Web3 integrations, ensuring users can invest easily and securely",
            tags: ["#Reactjs", "#Formik", "#Redux", "#MUI"],
            link: "https://coollionfi.com/",
            github:
              "https://github.com/COOLLIONFINANCEDEV/cool-lion-finance.git",
          },
          {
            title: "Crypto Payments",
            img: coollionfinanceap,
            content:
              "Cool Lion Finance enables users to invest in projects using cryptocurrencies, such as Bitcoin and Ethereum. Our platform integrates with Web3 wallets, facilitating fast and secure transactions with low fees. Additionally, users can easily convert their cryptocurrencies into stablecoins like USD Coin (USDC), ensuring stability amidst crypto market volatility.",
            tags: ["#Nestjs", "#Prisma", "#Mysql", "#Nodejs"],
            link: "https://app.coollionfi.com/",
            github: "https://github.com/sylla156/coollionfinance.git",
          },
          {
            title: "My Fasto",
            img: fasto,
            content:
              "FASTO is your broker for financing your equipment. With FASTO, you only need to make your request once. We take care of sending it to all leasing institutions in Côte d’Ivoire.",
            tags: ["#laravel", "#Livewire", "#Boostrap", "#PHP"],
            link: "https://app.coollionfi.com/",
            github:
              "https://github.com/COOLLIONFINANCEDEV/Cool-Ling-Heroes-.git",
          },
          {
            title: "My Fasto App",
            img: fastoapp,
            content:
              "Fasto dashboard is an app that has been developed to handle the company's user requests, such as requests to loan and borrow money. It is great, powerful, and fluid.",
            tags: ["#Reactjs", "#Formik", "#MUI", "#Typescript"],
            link: "https://app.myfasto.com/",
            github:
              "https://github.com/COOLLIONFINANCEDEV/COOLLIONFINANCEDEVAPI.git",
          },
        ],
      },

      about: {
        title: "About 👱‍♂️ 💼 Me",
        content: [
          "Experienced Full Stack Developer | React.js | Node.js | Express.js | Proficient in English 🚀",
          "Hello there! I am an experienced Full Stack Developer with over 5 years of hands-on experience in building robust and scalable web applications. My expertise lies in front-end development with React.js and back-end development with Node.js and Nest.js",
          "Throughout my career, I have successfully delivered numerous projects, showcasing my proficiency in creating modern and intuitive user interfaces using React.js. I have a deep understanding of React's component-based architecture, state management, and popular libraries such as NextJs and Angular. I take pride in writing clean, maintainable, and efficient code, adhering to industry best practices and coding standards.",
          "On the back-end, I am well-versed in building RESTful APIs and server-side applications using Node.js or Nest.js. I have experience in designing database schemas, integrating with third-party APIs, and implementing authentication and authorization mechanisms for secure user access. I am proficient in working with databases like MongoDB and MySQL, ensuring efficient data storage and retrieval.",
          "Communication is vital in any development project, and I have professional proficiency in English, enabling effective collaboration with cross-functional teams and clients. I am comfortable communicating technical concepts and discussing project requirements in English, ensuring smooth and efficient teamwork.",
          "I am passionate about staying up-to-date with the latest industry trends and continuously learning new technologies. I actively participate in developer communities and engage in personal projects to expand my knowledge and skills.",
        ],
        quote: "Let's have fun discussing your project! 💬",
        card: [
          {
            img: wazaLogo,
            imgDark: wazaLogo,
            title: "Waza.",
            content: "Full Stack Software Engineer",
            link: "https://www.waza.solutions/",
            linkContent: "View the company",
          },
          {
            img: hub2Logo,
            imgDark: hub2Logo,
            title: "Hub2",
            content: "Full Stack Software Engineer",
            link: "https://www.linkedin.com/company/hub2/",
            linkContent: "View the company",
          },
          {
            img: novateDigitale,
            imgDark: novateDigitale,
            title: "Novate Digital",
            content:
              "Front-End Developer",
            link: "https://www.linkedin.com/company/novate-media-cote-d-ivoire/",
            linkContent: "View the company",
          },
          {
            img: coollionLogo,
            imgDark: coollionLogo,
            title: "Cool Lion Finance",
            content: "Full Stack Engineer",
            link: "https://www.linkedin.com/in/richardseshie/",
            linkContent: "View the company",
          },
          {
            img: codingGameLogo,
            imgDark: codingGameLogo,
            title: "Coding Game",
            content: "Certification javascript and typescript",
            link: [
              "https://www.codingame.com/certification/N2ieM4oRBEGvt4phtYRh9g",
              "https://www.codingame.com/certification/NTLexEb1A8_oXOsx7SbS3w",
            ],
            linkContent: "View certification",
          },
        ],
      },
      contact: {
        title: "📅 Schedule a consult.",
        content: "I am always open to discuss",
        email: {
          title: "📧 Email me at",
          link: "contact@ibrahimcode.dev",
        },
        network: {
          title: "Follow",
          imgs: [
            { img: linkedin, link: "https://www.linkedin.com/in/brahimcode" },
            {
              img: upwork,
              link: "https://www.upwork.com/freelancers/~0140cffc59ed461e0d",
            },
            { img: githubLogo, link: "https://github.com/sylla156" },
            {
              img: codingGameLogo,
              link: "https://www.codingame.com/profile/c8c5191e5f8cb032d0340a49031a96659295806",
            },
          ],
        },
        form: {
          name: "Your name",
          email: "Your email",
          website: "Your website (if exists)",
          desc: "How can I help?",
          submit: "Get in touch",
        },
      },
      footer: {
        section1: {
          name: "Sylla Ibrahim",
          title: "Freelance Full Stack Designer",
        },
        section2: {
          title: "Designed using Figma",
          github: {
            title: "Hosted on Github",
            link: "https://github.com/sylla156/Next_Training_1.git",
          },
        },
      },
    },
  },
};

export default GlobaleWebConfig;
