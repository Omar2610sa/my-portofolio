import About from "@/sections/About/About";
import Hero from "@/sections/Hero/Hero";
import Projects from "@/sections/Projects/Projects";

export default function Home() {
  return (
    <div className="">
      {/* Hero Section */}
      <Hero />
      {/* About Secton */}
      <About />
      {/* Projects Secton */}
      <Projects />
    </div>
  );
}
