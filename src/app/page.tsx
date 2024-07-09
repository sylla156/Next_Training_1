import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Home from "@/components/Home";
import Services from "@/components/Services";
import Work from "@/components/Work";

export default function app() {
  return (
    <main className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] 2xl:w-[70vw] mx-auto">
      <Home />
      <Services />
      <Work />
      <About />
      <Contact />
    </main>
  );
}
