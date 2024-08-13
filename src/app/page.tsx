"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Feedback from "@/components/Feedback";
import Footer from "@/components/Footer";
import Home from "@/components/Home";
import Loader from "@/components/loader/loader";
import Services from "@/components/Services";
import Work from "@/components/Work";
import React from "react";

export default function App() {
  const [loader, setLoader] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <>
          <main className="w-[90%] lg:w-[85%] xl:w-[80%] 2xl:w-[70vw] mx-auto relative">
            <Feedback />
            <Home />
            <Services />
            <Work />
            <About />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
