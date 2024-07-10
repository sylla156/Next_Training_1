"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Home from "@/components/Home";
import Services from "@/components/Services";
import Work from "@/components/Work";

export default function app() {
  console.count();
  return (
    <main className="w-[90%] lg:w-[85%] xl:w-[80%] 2xl:w-[70vw] mx-auto">
      <Home />
      <Services />
      <Work />
      <About />
      <Contact />
    </main>
  );
}
