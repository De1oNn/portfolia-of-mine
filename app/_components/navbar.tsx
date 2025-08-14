"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const { setTheme } = useTheme();
  const [active, setActive] = useState("home");

  const handleClick = (id: string) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // adjust offset
      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          if (
            scrollPosition >= section.offsetTop &&
            scrollPosition < section.offsetTop + section.offsetHeight
          ) {
            setActive(item.id);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full bg-[#E0E8F6] dark:bg-[#1A1A1A] sticky top-0 z-50 flex justify-center items-center h-[100px]">
      <div className="flex h-[45px] justify-between items-center w-full max-w-[1200px] px-4 md:px-8">
        <Image
          src="/Name.png"
          alt="Logo"
          className="dark:invert"
          width={100}
          height={85}
          priority
        />

        {/* Desktop nav items */}
        <div className="hidden md:flex gap-8 justify-center items-center">
          {navItems.map((item) => (
            <p
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`text-[18px] leading-[100%] font-medium font-montserrat cursor-pointer ${
                active === item.id ? "text-blue-500 dark:text-[#4FC3F7]" : ""
              }`}
            >
              {item.name}
            </p>
          ))}
        </div>

        {/* Contact Button */}
        <Button
          onClick={() => handleClick("contact")}
          className={`bg-transparent hover:bg-transparent hover:border-[3px] text-[18px] leading-[100%] font-medium font-montserrat h-[45px] w-[126px] border-[1px] border-black 
          ${active === "contact" ? "text-blue-500 dark:text-[#4FC3F7] border-[#4FC3F7]" : "text-black dark:text-white dark:border-[#4FC3F7]"}`}
        >
          Contact
        </Button>

        {/* Theme toggle */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
