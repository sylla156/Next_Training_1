import WebConfig from "@/config";
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
      <h2 className="mb-5 sm:mb-16">{WebConfig.about.title}</h2>

      <div className="flex flex-row  w-full justify-between">
        <div className="w-[60%] flex flex-col ">
          {WebConfig.about.content.map((content) => (
            <p key={content} className="my-5">
              {content}
            </p>
          ))}
        </div>

        <div className="w-[35%] flex flex-col justify-start items-end sm:items-center gap-16">
          {WebConfig.about.card.map((card) => (
            <div key={card.title}>
              <Image
                src={themeColor.theme === "light" ? card.img : card.imgDark}
                alt={card.title}
                className="w-30 h-auto object-cover mb-5"
              />
              <h5>{card.title}</h5>
              <p className="mb-5">{card.content}</p>
              <Link href={"https://google.com"} className="text-primary">
                {card.linkContent}
              </Link>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-4">{WebConfig.about.quote}</p>
    </div>
  );
};

export default About;
