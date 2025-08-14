"use client"; // page-ийг client component болгоно

import Navbar from "./_components/navbar";
import Home from "./home/page";
import About from "./about/page";
import Skills from "./skill/page";
import Projects from "./projects/page";
import Contact from "./contact/page";

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
