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
import driDark from "../public/images/dribbleDark.png";
import devDark from "../public/images/deviantDark.png";
import artDark from "../public/images/artstationDark.png";
import skeDark from "../public/images/sketchfabDark.png";
import cgDark from "../public/images/cgsocietyDark.png";
import beDark from "../public/images/behanceDark.png";
import artmDark from "../public/images/antmajeurDark.png";
import spDark from "../public/images/spreadshirtDark.png";
import adDark from "../public/images/adobeDark.png";
import frDark from "../public/images/freepikDark.png";
import udacityDark from "../public/icons/udacityDark.png";
import upworkDark from "../public/icons/upworkDark.png";
import dashboardImg from '../public/images/dashboard.png';

import tweeter from "../public/icons/tweeter.svg";
import linkedin from "../public/icons/linkedin.svg";
import notion from "../public/icons/notion.svg";

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
};

export type languages = "en" | "fr" | "es";

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
    content:string;
    projects: {
      title: string;
      content: string;
      img: string | StaticImport;
      tags: string[];
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
      imgs: StaticImport[];
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
    language: "fr",
    name: { en: "", fr: "", es: "" },
    logo: "🇫🇷",
  },
  {
    language: "en",
    name: { en: "", fr: "", es: "" },
    logo: "🇺🇸",
  },
  {
    language: "es",
    name: { en: "", fr: "", es: "" },
    logo: "🇪🇸",
  },
];

const GlobaleWebConfig: GLOBALEWEBCONFIG = {
  languages: ["en", "es", "fr"],
  translations: {
    en: {
      routePath: [
        { path: "#services", name: "services", hidden: false },
        { path: "#work", name: "Work" },
        { path: "#about", name: "About" },
        { path: "#contact", name: "contact" },
      ],
      home: {
        title: "Freelance Full Stack Developer",
        subTitle: "Hi 👋, I'm Sylla Ibrahim",
        content: "good design makes the world a better place",
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
        content:"Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.",
        projects: [
          {
            title: "Projec title",
            img: dashboardImg,
            content:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has",
            tags: ["#nextjs", "#tallwincss"],
          },
          {
            title: "Projec title",
            img: dashboardImg,
            content:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has",
            tags: ["#nextjs", "#tallwincss"],
          },
          {
            title: "Projec title",
            img: dashboardImg,
            content:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has",
            tags: ["#nextjs", "#tallwincss"],
          },
          {
            title: "Projec title",
            img: dashboardImg,
            content:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has",
            tags: ["#nextjs", "#tallwincss"],
          },
          {
            title: "Projec title",
            img: dashboardImg,
            content:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has",
            tags: ["#nextjs", "#tallwincss"],
          },
          {
            title: "Projec title",
            img: dashboardImg,
            content:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has",
            tags: ["#nextjs", "#tallwincss"],
          },
        ],
      },
      about: {
        title: "About 👱‍♂️ 💼 Me",
        content: [
          "I started as a frontend developer in college, and later I co-founded Aroliant Internet Private Limited with a friend. As a director and a developer, I learned a lot about managing a company, team, and projects.",
          "And in two years, I found my passion for design. In 2020 for personal reasons, I became a freelancer. Now, I’m selling digital goods on the web and working on freelance projects. I love helping small businesses to create their online presence and help setting up their own online store (e-commerce) to boost their business.",
          "My design work ensures that it is developer-friendly as it passes through the lens of my experience as a frontend developer. When I design, I make sure it is 100% implementable by a frontend developer without any difficulties. I call it “Design for Code.”",
        ],
        quote: "❤️ I love good design, gaming, art, Netflix, and gadgets.",
        card: [
          {
            img: udacity,
            imgDark: udacityDark,
            title: "User Experience Nanodegree",
            content: "The right way to design anything.",
            linkContent: "View Certificate",
          },
          {
            img: upwork,
            imgDark: upworkDark,
            title: "Available via Upwork",
            content: "Top rated freelancer on Upwork",
            linkContent: "Hire Me",
          },
        ],
      },
      contact: {
        title: "📅 Schedule a consult.",
        content:
          "I am always open to discuss your project, improve your online presence or help with your UX/UI design challenges.",
        email: {
          title: "📧 Email me at",
          link: "hi@narendra.design",
        },
        network: {
          title: "Follow",
          imgs: [tweeter, linkedin, notion],
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
            title: "Hosted on Github Pages",
            link: "https://github.com",
          },
        },
      },
    },
    es: {
      routePath: [
        { path: "#services", name: "servicios", hidden: false },
        { path: "#work", name: "Trabajo" },
        { path: "#about", name: "Acerca de" },
        { path: "#contact", name: "contacto" },
      ],
      home: {
        title: "Diseñador Freelance Full Stack",
        subTitle: "Hola 👋, soy Sylla Ibrahim",
        content: "el buen diseño hace del mundo un lugar mejor",
        button1: { path: "#work", name: "Mi Trabajo" },
        button2: { path: "#contact", name: "Hablemos" },
      },
      services: {
        title: "Lo que hago",
        card: [
          {
            img: mobile,
            title: "Diseño Móvil y Web",
            content:
              "¿Necesitas un sitio web o una aplicación móvil? Puedo crear hermosos sitios web o aplicaciones móviles basadas en tu contenido, o rediseñar tu antiguo sitio web para mejorar la interacción del usuario o alcanzar tus objetivos comerciales.",
            subTitle: "Obtén una estimación",
          },
          {
            img: graphic,
            title: "Diseño Gráfico",
            content:
              "¿Necesitas arte para tu proyecto? Puedo crear hermosas obras de arte, diseños basados en los requisitos de tu proyecto, como tarjetas de visita, banners digitales, iconos, logotipos, personajes dibujados a mano, abstractos, texturas, etc.",
            subTitle: "Obtén una estimación",
          },
          {
            img: frontend,
            title: "Desarrollo Frontend",
            content:
              "¿Ya tienes el diseño? Puedo crear sitios web estáticos, como páginas de destino, sitios de empresas y sitios web personalizados con JavaScript mínimo. Entregaré un código bien documentado.",
            subTitle: "Obtén una estimación",
          },
        ],
      },
      work: {
        title: "Project",
        subTitle: "My work",
        content:'Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.',
        projects: [
          {
            title: "Projec title",
            img: dri,
            content:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has",
            tags: ["#nextjs", "#tallwincss"],
          },
          {
            title: "Projec title",
            img: dri,
            content:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has",
            tags: ["#nextjs", "#tallwincss"],
          },
          {
            title: "Projec title",
            img: dri,
            content:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has",
            tags: ["#nextjs", "#tallwincss"],
          },
        ],
      },
      about: {
        title: "Acerca de 👱‍♂️ 💼 Mí",
        content: [
          "Comencé como desarrollador frontend en la universidad, y luego cofundé Aroliant Internet Private Limited con un amigo. Como director y desarrollador, aprendí mucho sobre la gestión de una empresa, equipo y proyectos.",
          "Y en dos años, descubrí mi pasión por el diseño. En 2020 por razones personales, me convertí en freelancer. Ahora, vendo bienes digitales en la web y trabajo en proyectos freelance. Me encanta ayudar a pequeñas empresas a crear su presencia en línea y ayudar a configurar su propia tienda en línea (e-commerce) para impulsar su negocio.",
          "Mi trabajo de diseño garantiza que sea amigable para el desarrollador, ya que pasa por la lente de mi experiencia como desarrollador frontend. Cuando diseño, me aseguro de que sea 100% implementable por un desarrollador frontend sin ninguna dificultad. Lo llamo 'Diseño para Código'.",
        ],
        quote:
          "❤️ Me encanta el buen diseño, los juegos, el arte, Netflix y los gadgets.",
        card: [
          {
            img: udacity,
            imgDark: udacityDark,
            title: "Nanodegree de Experiencia de Usuario",
            content: "La manera correcta de diseñar cualquier cosa.",
            linkContent: "Ver Certificado",
          },
          {
            img: upwork,
            imgDark: upworkDark,
            title: "Disponible a través de Upwork",
            content: "Freelancer con mejor calificación en Upwork",
            linkContent: "Contrátame",
          },
        ],
      },
      contact: {
        title: "📅 Agenda una consulta.",
        content:
          "Siempre estoy abierto a discutir tu proyecto, mejorar tu presencia en línea o ayudar con tus desafíos de diseño UX/UI.",
        email: {
          title: "📧 Envíame un correo a",
          link: "hi@narendra.design",
        },
        network: {
          title: "Sígueme",
          imgs: [tweeter, linkedin, notion],
        },
        form: {
          name: "Tu nombre",
          email: "Tu correo electrónico",
          website: "Tu sitio web (si existe)",
          desc: "¿Cómo puedo ayudarte?",
          submit: "Ponte en contacto",
        },
      },
      footer: {
        section1: {
          name: "Sylla Ibrahim",
          title: "Diseñador Freelance Full Stack",
        },
        section2: {
          title: "Diseñado usando Figma",
          github: {
            title: "Alojado en Github Pages",
            link: "https://github.com",
          },
        },
      },
    },
    fr: {
      routePath: [
        { path: "#services", name: "services", hidden: false },
        { path: "#work", name: "Travail" },
        { path: "#about", name: "À propos" },
        { path: "#contact", name: "contact" },
      ],
      home: {
        title: "Designer Full Stack Freelance",
        subTitle: "Salut 👋, je suis Sylla Ibrahim",
        content: "un bon design rend le monde meilleur",
        button1: { path: "#work", name: "Mon Travail" },
        button2: { path: "#contact", name: "Discutons" },
      },
      services: {
        title: "Ce que je fais",
        card: [
          {
            img: mobile,
            title: "Design Mobile & Web",
            content:
              "Besoin d'un site web ou d'une application mobile ? Je peux créer de beaux sites web ou applications mobiles basés sur votre contenu, ou redessiner votre ancien site web pour améliorer l'engagement des utilisateurs ou atteindre vos objectifs commerciaux.",
            subTitle: "Obtenez une estimation",
          },
          {
            img: graphic,
            title: "Design Graphique",
            content:
              "Besoin d'art pour votre projet ? Je peux créer de belles œuvres d'art, des designs basés sur les exigences de votre projet, comme des cartes de visite, des bannières numériques, des icônes, des logos, des personnages dessinés à la main, des abstraits, des textures, etc.",
            subTitle: "Obtenez une estimation",
          },
          {
            img: frontend,
            title: "Développement Frontend",
            content:
              "Vous avez déjà le design ? Je peux créer des sites web statiques comme des pages de destination, des sites d'entreprise et des sites web personnalisés avec un minimum de JavaScript. Je livrerai un code bien documenté.",
            subTitle: "Obtenez une estimation",
          },
        ],
      },
      work: {
        title: "My Projects",
        subTitle: "My work",
        content:'Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.',
        projects: [
          {
            title: "Projec title",
            img: dri,
            content:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has",
            tags: ["#nextjs", "#tallwincss"],
          },
          {
            title: "Projec title",
            img: dri,
            content:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has",
            tags: ["#nextjs", "#tallwincss"],
          },
          {
            title: "Projec title",
            img: dri,
            content:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has",
            tags: ["#nextjs", "#tallwincss"],
          },
        ],
      },
      about: {
        title: "À propos 👱‍♂️ 💼 de moi",
        content: [
          "J'ai commencé comme développeur frontend à l'université, puis j'ai cofondé Aroliant Internet Private Limited avec un ami. En tant que directeur et développeur, j'ai beaucoup appris sur la gestion d'une entreprise, d'une équipe et de projets.",
          "Et en deux ans, j'ai découvert ma passion pour le design. En 2020 pour des raisons personnelles, je suis devenu freelance. Maintenant, je vends des biens numériques sur le web et je travaille sur des projets freelance. J'aime aider les petites entreprises à créer leur présence en ligne et à configurer leur propre boutique en ligne (e-commerce) pour booster leur activité.",
          "Mon travail de design garantit qu'il est convivial pour les développeurs, car il passe par le prisme de mon expérience en tant que développeur frontend. Lorsque je conçois, je m'assure qu'il est 100% implémentable par un développeur frontend sans aucune difficulté. Je l'appelle 'Design for Code'.",
        ],
        quote:
          "❤️ J'aime le bon design, les jeux, l'art, Netflix et les gadgets.",
        card: [
          {
            img: udacity,
            imgDark: udacityDark,
            title: "Nanodegree d'Expérience Utilisateur",
            content: "La bonne façon de concevoir n'importe quoi.",
            linkContent: "Voir le Certificat",
          },
          {
            img: upwork,
            imgDark: upworkDark,
            title: "Disponible via Upwork",
            content: "Freelance très bien noté sur Upwork",
            linkContent: "Engagez-moi",
          },
        ],
      },
      contact: {
        title: "📅 Planifiez une consultation.",
        content:
          "Je suis toujours ouvert à discuter de votre projet, à améliorer votre présence en ligne ou à vous aider avec vos défis de conception UX/UI.",
        email: {
          title: "📧 Envoyez-moi un email à",
          link: "hi@narendra.design",
        },
        network: {
          title: "Suivez-moi",
          imgs: [tweeter, linkedin, notion],
        },
        form: {
          name: "Votre nom",
          email: "Votre email",
          website: "Votre site web (si existe)",
          desc: "Comment puis-je vous aider ?",
          submit: "Prenez contact",
        },
      },
      footer: {
        section1: {
          name: "Sylla Ibrahim",
          title: "Designer Full Stack Freelance",
        },
        section2: {
          title: "Conçu avec Figma",
          github: {
            title: "Hébergé sur Github Pages",
            link: "https://github.com",
          },
        },
      },
    },
  },
};

export default GlobaleWebConfig;
