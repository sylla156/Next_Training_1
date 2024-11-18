"use client";

import WebConfig from "@/config";
import { Content } from "@/context/ContentProvider";
import { theme } from "@/context/ThemeProvider";
import Image from "next/image";
import Link from "next/link";
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
      const children = Array.from(cards.current.children);
      children.forEach((card: any): any => {
        card.addEventListener("mousemove", (event: any) => {
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
          const offsetX = ((x - middleX) / middleX) * 2;
          const offsetY = ((y - middleY) / middleY) * 2;
          // console.log(offsetX, offsetY);

          // set rotation
          card.style.setProperty("--rotateX", -1 * offsetX + "deg");
          card.style.setProperty("--rotateY", offsetY + "deg");
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
            className={`card_${index}  m-1 card min-w-[200px] max-w-[300px] relative bg-clip-padding border-[solid] border-[3px] rounded-md before:content-[''] before:absolute before:top-[0] before:right-[0] before:bottom-[0] before:left-[0] before:-m-[3px] before:[border-radius:inherit] before:bg-[linear-gradient(to_left,_#FF6666,_#336699)] before:z-[-1]`}
          >
            <div
              className={`dark:bg-slate-900 bg-pink-50 dark:text-white p-5 h-full flex flex-col justify-between items-start`}
            >
              <Link href={project.link} target="_blank">
                <Image
                  src={project.img}
                  className="block w-full rounded-sm cursor-pointer"
                  alt={project.title}
                />
              </Link>

              <h3 className="font-semibold">{project.title}</h3>

              <p className="text-sm">{project.content}</p>

              <div>
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className={`tag_${index} mr-1 presentation_content`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex justify-end w-full items-center mt-5">
                {project.github && (
                  <Link href={project.github} target="_blank">
                    <svg
                      width="25px"
                      height="25px"
                      viewBox="-1.2 -1.2 22.40 22.40"
                      version="1.1"
                      fill="#FF6666"
                      stroke="#FF6666"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <title>github [#142]</title>{" "}
                        <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                        <g
                          id="Page-1"
                          stroke="none"
                          strokeWidth="1"
                          fill="none"
                          fillRule="evenodd"
                        >
                          {" "}
                          <g
                            id="Dribbble-Light-Preview"
                            transform="translate(-140.000000, -7559.000000)"
                            fill="#FF6666"
                          >
                            {" "}
                            <g
                              id="icons"
                              transform="translate(56.000000, 160.000000)"
                            >
                              {" "}
                              <path
                                d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                                id="github-[#142]"
                              >
                                {" "}
                              </path>{" "}
                            </g>{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                  </Link>
                )}
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
