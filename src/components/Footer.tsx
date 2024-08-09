"use client";
import GlobaleWebConfig, { languageTable, languages } from "@/config";
import { Content } from "@/context/ContentProvider";
import { theme } from "@/context/ThemeProvider";
import Logo from "@/utils/Logo";
import { Span } from "next/dist/trace";
import Link from "next/link";
import React, { useContext } from "react";

const Footer = () => {
  const { websiteContent: WebConfig, setWebsiteContent } =
    React.useContext(Content);
  return (
    <footer className="w-full bg-pink-50 dark:bg-slate-800 ">
      <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] 2xl:w-[70vw] items-end mx-auto flex justify-between sm:items-center pt-10 pb-5 ">
        <div className="flex flex-col justify-start items-start sm:flex-row sm:gap-x-5 sm:justify-center sm:items-center">
          <Logo />
          <ul className="flex flex-col gap-y-1">
            <li>
              <p className="footerText">{WebConfig.footer.section1.name}</p>
            </li>
            <li>
              <p className="footerText">
                <span className="tag_3 presentation_content">{WebConfig.footer.section1.title}</span>
              </p>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col text-end justify-end items-end sm:text-right sm:gap-y-1">
            <li>
              <p className="footerText">{WebConfig.footer.section2.title}</p>
            </li>
            <li>
              <Link href={WebConfig.footer.section2.github.link} target="_blank">
                <p className="footerText underline">
                  {WebConfig.footer.section2.github.title}
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] 2xl:w-[70vw] mx-auto flex justify-between items-baseline pb-10">
        <ToggleLanguage />
        <ToggleButton />
      </div> */}
    </footer>
  );
};

const ToggleLanguage = () => {
  const { setWebsiteContent, currentLanguage } = React.useContext(Content);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value && setWebsiteContent) {
      setWebsiteContent(
        GlobaleWebConfig.translations[
          languageTable.find((item) => item.language === e.target.value)
            ?.language ?? "en"
        ]
      );
    }
  };

  return (
    <div>
      <label
        htmlFor="countries"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
      ></label>
      <select
        id="countries"
        defaultValue={currentLanguage}
        onChange={handleChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        {languageTable.map((item) => (
          <option
            key={item.language}
            value={item.language}
            className="text-center"
          >
            {item.logo}
            {item.name[currentLanguage]}
          </option>
        ))}
      </select>
    </div>
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

  return (
    <button className="flex justify-center items-center gap-x-2">
      <p className="footerText text-sm">
        {themeColor.theme === "dark" ? "Dark Mode" : "Light Mode"}
      </p>
      <label className="relative inline-flex cursor-pointer items-center">
        <input
          id="switch"
          type="checkbox"
          className="peer sr-only"
          onChange={handleTheme}
          checked={themeColor.theme === "dark"}
        />
        <label className="hidden" htmlFor="switch"></label>
        <div className="peer h-6 w-11 rounded-full border bg-pink-50 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-slate-800 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300"></div>
      </label>
    </button>
  );
};

export default Footer;
