import About from "@/sections/About/About";
import Experience from "@/sections/Experience/Experience";
import Hero from "@/sections/Hero/Hero";
import Info from "@/sections/Info/Info";
import Projects from "@/sections/Projects/Projects";

export default function Home() {
  return (
    <div className="">
      {/* Hero Section */}
      <Hero />
      {/* About Secton */}
      <About />
      {/* Info Secton */}
      <Info />
      {/* Projects Secton */}
      <Projects />
      {/* Experience Secton */}
      <Experience />
      
    </div>
  );
}
