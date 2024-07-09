import About from "@/components/About";
import Contact from "@/components/Contact";
import Home from "@/components/Home";
import Services from "@/components/Services";
import Work from "@/components/Work";

export default function app() {
  return (
    <>
      <Home />
      <Services />
      <Work />
      <About />
      <Contact />
    </>
  );
}
