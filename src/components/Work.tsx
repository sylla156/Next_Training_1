import WebConfig from "@/config";
import { Content } from "@/context/ContentProvider";
import { theme } from "@/context/ThemeProvider";
import Image from "next/image";
import React from "react";

const Work = () => {
  const themeColor = React.useContext(theme);
  const { websiteContent: WebConfig, setWebsiteContent } =
    React.useContext(Content);
  return (
    <div
      className="mb-32 sm:mb-48"
      id={WebConfig.routePath
        .find((item) => item.path === "#work")
        ?.name.toLowerCase()}
    >
      <h2 className="mb-8 sm:mb-20">{WebConfig.work.title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 justify-start items-center justify-items-start gap-y-10 gap-x-5">
        {themeColor.theme === "light"
          ? WebConfig.work.imgs.map((img, index) => (
              <Image
                src={img}
                alt="networks"
                key={index}
                className="object-contain w-auto h-[55px]"
              />
            ))
          : WebConfig.work.darkImgs.map((img, index) => (
              <Image
                src={img}
                alt="networks"
                key={index}
                className="object-contain w-auto h-[55px]"
              />
            ))}
      </div>
    </div>
  );
};

export default Work;
