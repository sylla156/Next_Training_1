"use client";

import { Content } from "@/context/ContentProvider";
import { theme } from "@/context/ThemeProvider";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";

const About = () => {
  const themeColor = useContext(theme);
  const { websiteContent: WebConfig, setWebsiteContent } =
    React.useContext(Content);
  return (
    <div
      className="mb-32 sm:mb-40"
      id={WebConfig.routePath
        .find((item) => item.path === "#about")
        ?.name.toLowerCase()}
    >
      <h2 className="mb-5 lg:mb-16">{WebConfig.about.title}</h2>

      <div className="flex flex-col lg:flex-row  w-full justify-between">
        <div className="w-full lg:w-[60%] flex flex-col ">
          {WebConfig.about.content.map((content) => (
            <p key={content} className="mb-5">
              {content}
            </p>
          ))}
        </div>

        <div className="w-full lg:w-[35%] mt-5 lg:mt-0 flex flex-row lg:flex-col flex-wrap lg:justify-start justify-between items-end sm:items-start gap-5">
          {WebConfig.about.card.map((card) => (
            <div key={card.title} className="w-[calc((100%)-2em)] sm:w-[calc((100%/3)-2em)]  lg:w-auto">
              <Image
                src={themeColor.theme === "light" ? card.img : card.imgDark}
                alt={card.title}
                className="w-[50px] h-auto object-cover mb-1"
              />
              <h5 className="capitalize">{card.title}</h5>
              <p className="">{card.content}</p>
              {typeof card.link === "string" ? (
                <Link href={card.link} className="text-primary">
                  <span>{card.linkContent}</span>
                </Link>
              ) : (
                card.link.map((item, index) => (
                  <Link
                    key={item}
                    href={item}
                    className="text-primary block capitalize"
                  >
                    <span>
                      {card.linkContent} {["javascript", "typescript"][index]}
                    </span>
                  </Link>
                ))
              )}
            </div>
          ))}
        </div>
      </div>

      <p className="mt-4 hidden lg:block">{WebConfig.about.quote}</p>
    </div>
  );
};

export default About;
