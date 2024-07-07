import WebConfig from "@/config";
import Image from "next/image";
import React from "react";

const Work = () => {
  return (
    <div className="my-48">
      <h2 className="mb-20">{WebConfig.work.title}</h2>
      <div className="grid grid-cols-4 justify-start items-center justify-items-start gap-y-10 gap-x-5">
        {WebConfig.work.imgs.map((img, index) => (
          <Image
            src={img}
            alt="networks"
            key={index}
            className="object-cover w-auto h-[55px]"
          />
        ))}
      </div>
    </div>
  );
};

export default Work;
