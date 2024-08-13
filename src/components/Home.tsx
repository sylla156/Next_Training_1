"use client";

import React, { useContext, useRef } from "react";
import Image from "next/image";
import profile from "../../public/images/profile.jpeg";
import burger from "../../public/icons/burger.svg";
import burgerDark from "../../public/icons/burgerDark.svg";
import close from "../../public/icons/close.svg";
import Link from "next/link";
import Logo from "@/utils/Logo";
import { Content } from "@/context/ContentProvider";
import { theme } from "@/context/ThemeProvider";

const Home = () => {
  const [toogle, setToggle] = React.useState(true);
  const { websiteContent: WebConfig } = React.useContext(Content);
  return (
    <div
      className="mt-2"
      id={WebConfig.routePath
        .find((item) => item.path === "#home")
        ?.name.toLowerCase()}
    >
      <Header setToggle={setToggle} />
      <Presentation />
      <Navbar toggle={toogle} setToggle={setToggle} />
    </div>
  );
};

const Header = ({
  setToggle,
}: {
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { websiteContent: WebConfig } = React.useContext(Content);
  const { theme: themeColor } = useContext(theme);

  return (
    <header className="flex justify-between items-center">
      <Logo />
      <nav className="hidden sm:block">
        <ul className="flex justify-between gap-x-5">
          {WebConfig.routePath.map((route, index) => (
            <li key={route.path}>
              <Link
                href={route.path}
                className="font-spartan text-secondary dark:text-primary text-3xl"
              >
                <div className="title_link">
                  <span className="text-primary dark:text-secondary z-0">
                    {index + 1}.{" "}
                  </span>
                  <span className="capitalize font-spartan ">{route.name}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button className="sm:hidden" onClick={() => setToggle(false)}>
        {themeColor === "light" ? (
          <Image src={burger} alt="close" width={50} />
        ) : (
          <Image src={burgerDark} alt="close" width={50} />
        )}
      </button>
    </header>
  );
};

const Presentation = () => {
  const { websiteContent: WebConfig, setWebsiteContent } =
    React.useContext(Content);
  const ThreeD = useRef<HTMLDivElement>(null);
  const HeaderTag = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (ThreeD.current) {
      const pre = ThreeD.current;

      document.addEventListener("mousemove", (event) => {
        // get mouse position
        const x = event.clientX;
        const y = event.clientY;
        // console.log(x, y)

        // find the middle
        const middleX = window.innerWidth / 2;
        const middleY = window.innerHeight / 2;
        // console.log(middleX, middleY)

        // get offset from middle as a percentage
        // and tone it down a little
        const offsetX = ((x - middleX) / middleX) * 45;
        const offsetY = ((y - middleY) / middleY) * 45;
        

        // set rotation
        pre.style.setProperty("--rotateX", offsetX + "deg");
        pre.style.setProperty("--rotateY", -1 * offsetY + "deg");
      });
    }
  }, []);

  const { title, subTitle, content, button1, button2 } = WebConfig.home;

  return (
    <div
      ref={HeaderTag}
      className="mt-10 mb-32 flex flex-col justify-between items-center gap-y-16 sm:py-10 sm:my-32 sm:flex-row sm:justify-center sm:gap-x-28 sm:gap-y-0"
    >
      <div className="pre" ref={ThreeD}>
        <Image
          src={profile}
          alt="Photo de profile"
          className="object-contain rounded-xl"
          width={250}
          height={250}
        />
      </div>
      <div className=" flex flex-col text-center sm:text-start gap-y-8 presentation_content">
        <h2>{subTitle}</h2>
        <div>
          <h1>
            {title}
            <span className="invisible">ii</span>
          </h1>
          <p className="subtitle first-letter:capitalize">{content}</p>
        </div>
        <div className="flex justify-center flex-wrap gap-y-5 sm:gap-y-0 sm:justify-start sm:items-center gap-x-6 mt-2 sm:flex-none">
          <Link href={button1.path}>
            {" "}
            <button className="button_primary w-full xsm:w-auto">
              {button1.name}
            </button>
          </Link>
          <Link href={button2.path}>
            <button className="button_secondary w-full xsm:w-auto">
              {button2.name}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Navbar = ({
  setToggle,
  toggle,
}: {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { websiteContent: WebConfig, setWebsiteContent } =
    React.useContext(Content);
  const classname = toggle ? "translate-x-[200vw]" : "fixtranslate-x-[-200vw]";

  return (
    <div
      className={`bg-gray-300 h-screen w-screen fixed top-0 left-0 transition ease-in-out duration-500 ${classname} overflow-hidden`}
    >
      <button
        className="absolute top-0 right-5 py-10 px-5"
        onClick={() => setToggle(true)}
      >
        <Image src={close} alt="close" width={35} />
      </button>
      <nav className="h-full w-full ">
        <ul className="h-full w-full flex flex-col justify-center items-center gap-y-3">
          {WebConfig.routePath.map((route, index) => (
            <li key={route.path} onClick={() => setToggle(true)}>
              <Link
                href={route.path}
                className="font-spartan text-secondary text-[3em] hover:underline "
              >
                <span className="text-primary">{index + 1}. </span>
                <span className="title_link capitalize font-spartan">
                  {route.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Home;
