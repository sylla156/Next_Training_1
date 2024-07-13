import WebConfig from "@/config";
import { Content } from "@/context/ContentProvider";
import { theme } from "@/context/ThemeProvider";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

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
      <h6>{WebConfig.work.subTitle}</h6>
      <h2>{WebConfig.work.title}</h2>
      <p className="mb-8 sm:mb-20">{WebConfig.work.content}</p>
      <Project />
      {/* <div className="grid grid-cols-2 sm:grid-cols-4 justify-start items-center justify-items-start gap-y-10 gap-x-5">
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
      </div> */}
    </div>
  );
};

const Project = () => {
  const { websiteContent: WebConfig, setWebsiteContent } =
    React.useContext(Content);
  const cards = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (cards.current) {
      const children = Array.from(cards.current.children)
      children.forEach((card:any):any => {
        card.addEventListener("mousemove", (event:any) => {
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
          const offsetX = ((x - middleX) / middleX) * 15;
          const offsetY = ((y - middleY) / middleY) * 15;
          // console.log(offsetX, offsetY);

          // set rotation
          card.style.setProperty("--rotateX", offsetX + "deg");
          card.style.setProperty("--rotateY", -1 * offsetY + "deg");
        });
        card.addEventListener("mouseout", () => {
          // get mouse position
  
          // console.log(offsetX, offsetY);

          // set rotation
          card.style.setProperty("--rotateX", 0 + "deg");
          card.style.setProperty("--rotateY", -1 * 0 + "deg");
        });
      });
    }
  });
  return (
    <div
      ref={cards}
      className="grid grid-cols-1 xsm:grid-cols-2 sm:grid-cols-3 justify-items-center gap-y-10 gap-x-5"
    >
      {WebConfig.work.projects.map((project, index) => {
        return (
          <div
            key={project.title}
            className={`card_${index} m-1 card min-w-[200px] max-w-[300px] relative bg-clip-padding border-[solid] border-[3px] border-[transparent] rounded-md before:content-[''] before:absolute before:top-[0] before:right-[0] before:bottom-[0] before:left-[0] before:-m-[3px] before:[border-radius:inherit] before:bg-[linear-gradient(to_left,_#FF6666,_#336699)] before:z-[-1]`}
          >
            <div
              className={`dark:bg-slate-900 bg-slate-200 dark:text-white p-5 h-full flex flex-col justify-stretch items-start`}
            >
              <Image
                src={project.img}
                className="block w-full rounded-sm"
                alt={project.title}
              />

              <h3 className="font-semibold">{project.title}</h3>

              <p className="text-sm">{project.content}</p>

              <div>
                {project.tags.map((tag, index) => (
                  <span key={index} className={`tag_${index} mr-1 presentation_content`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      })}
      <div></div>
    </div>
  );
};

export default Work;
