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
            <p key={content} className="mb-5">
              {content}
            </p>
          ))}
        </div>

        <div className="w-[35%] flex flex-col justify-start items-end sm:items-start gap-10">
          {WebConfig.about.card.map((card) => (
            <div key={card.title}>
              <Image
                src={themeColor.theme === "light" ? card.img : card.imgDark}
                alt={card.title}
                className="w-[50px] h-auto object-cover mb-5"
              />
              <h5 className="capitalize">{card.title}</h5>
              <p className="mb-2">{card.content}</p>
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

      <p className="mt-4">{WebConfig.about.quote}</p>
    </div>
  );
};

export default About;
