"use client";
import Image from "next/image";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Home from "./home/page";
import About from "./about/page";
import Skills from "./skill/page";
import Projects from "./projects/page";

export default function page() {

  const { setTheme, theme } = useTheme()
  return (
    <div className="w-full flex-1 flex items-center flex-col">
      <div className="w-full bg-[#E0E8F6] dark:bg-[#1A1A1A] sticky top-0 z-50 flex justify-center items-center h-[100px]">
        <div className="flex h-[45px] justify-between items-center w-[1200px] ">
          <Image
            src="/Name.png"
            alt="Next.js Logo"
            className="dark:invert"
            width={100}
            height={85}
            priority
          />
          <div className="flex gap-[50px] justify-center items-center">
            <p className="text-[18px] leading-[100%] font-medium font-montserrat">Home</p>
            <p className="text-[18px] leading-[100%] font-medium font-montserrat">About</p>
            <p className="text-[18px] leading-[100%] font-medium font-montserrat">Skills</p>
            <p className="text-[18px] leading-[100%] font-medium font-montserrat">Projects</p>
          </div>  
          <Button className="bg-transparent hover:bg-transparent hover:border-[3px] text-[18px] leading-[100%] font-medium font-montserrat h-[45px] w-[126px] border-[1px] border-black text-black dark:border-[#4FC3F7] dark:text-white">
            Contact
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <Home />
      <div className="w-[50%] h-[2px] my-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
      <About />
      <div className="w-[50%] h-[2px] my-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
      <Skills />
      <div className="w-[50%] h-[2px] my-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
      <Projects />
    </div>  
  )}