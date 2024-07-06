type routePath = { path: string; name: string };

type WEBCONFIG = {
  routePath: routePath[];
  home: {
    title: string;
    subTitle: string;
    content: string;
    button1: routePath;
    button2: routePath;
  };
};

const WebConfig: WEBCONFIG = {
  routePath: [
    { path: "#home", name: "Home" },
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
};

export default WebConfig;
