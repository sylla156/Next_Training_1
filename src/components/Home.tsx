import React from "react";
import Image from "next/image";
import logo from "../../public/icons/logo.png";
import profile from "../../public/images/profile.jpeg";
import WebConfig from "@/config";
import Link from "next/link";

const Home = () => {
  return (
    <div className="mt-2">
      <Header />
      <Presentation />
    </div>
  );
};

const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <Image
        src={logo}
        alt="Sylla Ibrahim"
        width={70}
        height={70}
        className="object-contain"
      />

      <nav>
        <ul className="flex justify-between gap-x-5 ">
          {WebConfig.routePath.map((route, index) => (
            <li key={route.path}>
              <Link
                href={route.path}
                className="font-spartan text-secondary text-3xl"
              >
                <span className="text-primary">{index + 1}. </span>
                <span className="capitalize font-spartan">{route.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

const Presentation = () => {
  const { title, subTitle, content, button1, button2 } = WebConfig.home;

  return (
    <div className=" py-10 my-32 flex justify-center items-center gap-x-28">
      <Image
        src={profile}
        alt="Photo de profile"
        className="object-contain -rotate-6 border-8 border-gray-300"
        width={250}
        height={250}
      />
      <div className=" flex flex-col gap-y-8">
        <h3>{subTitle}</h3>
        <div>
          <h1>{title}</h1>
          <p>{content}</p>
        </div>
        <div className="flex items-center gap-x-6 mt-2">
          <button className="button_primary">{button1.name}</button>
          <button className="button_secondary">{button2.name}</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
