"use client";
import WebConfig from "@/config";
import { theme } from "@/context/ThemeProvider";
import Logo from "@/utils/Logo";
import Link from "next/link";
import React, { useContext } from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 dark:bg-slate-800 ">
      <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] 2xl:w-[70vw] items-end mx-auto flex justify-between sm:items-center py-16 ">
        <div className="flex flex-col justify-start items-start sm:flex-row sm:gap-x-5 sm:justify-center sm:items-center">
          <Logo />
          <ul className="flex flex-col gap-y-1">
            <li>
              <p className="footerText">{WebConfig.footer.section1.name}</p>
            </li>
            <li>
              <p className="footerText">{WebConfig.footer.section1.title}</p>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col text-end justify-end items-end sm:text-right sm:gap-y-1">
            <li>
              <p className="footerText">{WebConfig.footer.section2.title}</p>
            </li>
            <li>
              <Link href={WebConfig.footer.section2.github.link}>
                <p className="footerText underline">
                  {WebConfig.footer.section2.github.title}
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] 2xl:w-[70vw] mx-auto flex justify-end items-center pb-5">
        <ToggleButton />
      </div>
    </footer>
  );
};

const ToggleButton = () => {
  const themeColor = useContext(theme);
  const handleTheme = () => {
    if (themeColor.setTheme) {
      themeColor.theme === "light"
        ? themeColor?.setTheme({ theme: "dark" })
        : themeColor?.setTheme({ theme: "light" });
    }
  };

  React.useEffect(() => {
    
  }, [themeColor]);

  return (
    <button className="flex justify-center items-center gap-x-2">
      Dark Mode
      <label className="relative inline-flex cursor-pointer items-center">
        <input
          id="switch"
          type="checkbox"
          className="peer sr-only"
          onChange={handleTheme}
          checked={themeColor.theme === 'dark'}
        />
        <label className="hidden" htmlFor="switch"></label>
        <div className="peer h-6 w-11 rounded-full border bg-slate-200 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-slate-800 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300"></div>
      </label>
    </button>
  );
};

export default Footer;
