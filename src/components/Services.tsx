import WebConfig from "@/config";
import Image from "next/image";
import React from "react";

const Services = () => {
  const service = React.useMemo(
    () => WebConfig.routePath.find((item) => item.name.includes("services")),
    []
  );

  return (  
    <div className="mb-32 sm:mb-40" id={WebConfig.routePath.find(item => item.path === '#services')?.name.toLowerCase()}>
      <h2 className="mb-8 sm:mb-16">{WebConfig.services.title}</h2>

      <div className="flex flex-col justify-stretch items-center gap-y-8 sm:flex-row sm:justify-start sm:items-stretch w-full sm:h-max">
        {WebConfig.services.card.map((item) => (
          <div
            key={item.title}
            className="flex-1 flex flex-col gap-y-7 m-0 p-0 ml-5 justify-between items-start "
          >
            <Image
              src={item.img}
              alt={item.title}
              width={50}
              height={50}
              className="object-contain"
            />
            <h4>{item.title}</h4>
            <p>{item.content}</p>
            <h5 className="align-bottom">{item.subTitle}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
