import React from "react";
import "./loader.css";

const Loader = () => {
  return (
    <div className=" flex justify-center items-center h-[100dvh] w-[100dvw]">
      <div className="loader">
        <div className="box1"></div>
        <div className="box2"></div>
        <div className="box3"></div>
      </div>
    </div>
  );
};

export default Loader;
