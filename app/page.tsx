"use client";

import Navbar from "./_components/navbar";
import Home from "./home/components/Home";
import About from "./about/components/About";
import Skills from "./skill/components/Skill";
import Projects from "./projects/components/Projects";
import Contact from "./contact/components/Contact";

export default function Page() {
  return (
    <div className="w-full flex-1 flex items-center flex-col">
      <Navbar />
      <Home id="home" />
      <div className="w-[50%] h-[2px] my-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
      <About id="about" />
      <div className="w-[50%] h-[2px] my-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
      <Skills id="skills" />
      <div className="w-[50%] h-[2px] my-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
      <Projects id="projects" />
      <div className="w-[50%] h-[2px] my-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
      <Contact id="contact" />
    </div>
  );
}
