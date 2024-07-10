'use client'

import React, { SetStateAction, use } from "react";
import Image from "next/image";
import profile from "../../public/images/profile.jpeg";
import burger from '../../public/icons/burger.svg';
import close from '../../public/icons/close.svg';
import WebConfig from "@/config";
import Link from "next/link";
import Logo from "@/utils/Logo";

const Home = () => {
  const [toogle,setToggle] = React.useState(true);

  return (
    <div className="mt-2" id={WebConfig.routePath.find(item => item.path === '#home')?.name.toLowerCase()} >
      <Header setToggle={setToggle}/>
      <Presentation />
      <Navbar toggle={toogle} setToggle={setToggle} />
    </div>
  ); 
};

const Header = ({setToggle}:{setToggle:React.Dispatch<SetStateAction<boolean>>}) => {
  return (
    <header className="flex justify-between items-center">
      <Logo />
      <nav className='hidden sm:block'>
        <ul className="flex justify-between gap-x-5">
          {WebConfig.routePath.map((route, index) => (
            <li key={route.path}>
              <Link
                href={route.path}
                className="font-spartan text-secondary dark:text-primary text-3xl"
              >
                <span className="text-primary dark:text-secondary">{index + 1}. </span>
                <span className="capitalize font-spartan">{route.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button className="sm:hidden" onClick={() => setToggle(false)}><Image src={burger} alt="close" width={50}/></button>

    </header>
  );
};

const Presentation = () => {
  const { title, subTitle, content, button1, button2 } = WebConfig.home;

  return (
    <div className="mt-10 mb-32 flex flex-col justify-between items-center gap-y-16 sm:py-10 sm:my-32 sm:flex-row sm:justify-center sm:gap-x-28 sm:gap-y-0">
      <Image
        src={profile}
        alt="Photo de profile"
        className="object-contain -rotate-6 border-8 border-gray-300"
        width={250}
        height={250}
      />
      <div className=" flex flex-col text-center sm:text-start gap-y-8">
        <h3>{subTitle}</h3>
        <div>
          <h1>{title}</h1>
          <p>{content}</p>
        </div>
        <div className="flex justify-center flex-wrap gap-y-5 sm:gap-y-0 sm:justify-start sm:items-center gap-x-6 mt-2 sm:flex-none">
          <button className="button_primary w-full xsm:w-auto">{button1.name}</button>
          <button className="button_secondary w-full xsm:w-auto">{button2.name}</button>
        </div>
      </div>
    </div>
  );
};


const Navbar = ({setToggle,toggle}:{ toggle: boolean; setToggle: React.Dispatch<SetStateAction<boolean>>; }) => {
  const classname =  toggle ? 'translate-x-[200vw]' : 'fixtranslate-x-[-200vw]'

  return     <div className={`bg-gray-300 h-screen w-screen fixed top-0 left-0 transition ease-in-out duration-500 ${classname} overflow-hidden`} >
  <button className="absolute top-0 right-5 py-10 px-5" onClick={() => setToggle(true)}><Image src={close} alt="close" width={35}/></button>
<nav className="h-full w-full ">
  <ul className="h-full w-full flex flex-col justify-center items-center gap-y-3">
    {WebConfig.routePath.map((route, index) => (
     <li key={route.path} onClick={() => setToggle(true)}>
        <Link
          href={route.path}
          className="font-spartan text-secondary text-3xl hover:underline"
        >
          <span className="text-primary">{index + 1}. </span>
          <span className="capitalize font-spartan">{route.name}</span>
        </Link>
      </li>
    ))}
  </ul>
</nav>
</div>
}

export default Home;
