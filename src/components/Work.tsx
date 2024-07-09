import WebConfig from "@/config";
import Image from "next/image";
import React from "react";

const Work = () => {
  return (
    <div className="mb-32 sm:mb-48">
      <h2 className="mb-8 sm:mb-20">{WebConfig.work.title}</h2>
      <div className="grid grid-cols-2 sm:grid-flow-col-4 justify-start items-center justify-items-start gap-y-10 gap-x-5">
        {WebConfig.work.imgs.map((img, index) => (
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
