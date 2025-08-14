"use client"
import { Mail, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea";

type ContactProps = { id: string };

export default function Contact({ id }: ContactProps) {
  return (
    <div className="w-full max-h-screen flex flex-col bg-[#E0E8F6] dark:bg-[#1A1A1A] px-4 py-12" id={id}>
      <div className="w-full mx-auto flex flex-col gap-12">
        <div className="flex-1 flex flex-col items-center gap-4">
            <h1 className='text-[#282938] text-[45px] font-[800] dark:text-white'>Get In Touch</h1>
            <label htmlFor="">
                <p className='text-[#282938] text-[18px] mb-2 dark:text-white'>Name</p>
                <Input type="text" placeholder="Your Name" className="h-[70px] w-[700px] border-[1px] border-[#484E53]" />
            </label>
            <label htmlFor="">
                <p className='text-[#282938] text-[18px] mb-2 dark:text-white'>Email</p>
                <Input type="email" placeholder="Your Email" className="h-[70px] w-[700px] border-[1px] border-[#484E53]"/>
            </label>
            <label htmlFor="">
                <p className='text-[#282938] text-[18px] mb-2 dark:text-white'>Message</p>
                <Textarea placeholder="Your Message" className="h-[150px] w-[700px] border-[1px] border-[#484E53]" />
            </label>
            <Button
                type="button"
                className="dark:border-[#4FC3F7] dark:text-white bg-[#484E53] text-[15px] text-white hover:bg-transparent hover:border-[3px] h-[55px] w-[700px] border-[1px] rounded-[10px] mt-4"
                onClick={() => {
                const nameInput = (document.querySelector('input[placeholder="Your Name"]') as HTMLInputElement).value;
                const emailInput = (document.querySelector('input[placeholder="Your Email"]') as HTMLInputElement).value;
                const messageInput = (document.querySelector('textarea[placeholder="Your Message"]') as HTMLTextAreaElement).value;

                window.location.href = `mailto:nasanjargal20040524@gmail.com?subject=Contact from ${nameInput}&body=Name: ${nameInput}%0AEmail: ${emailInput}%0AMessage: ${messageInput}`;
                }}
            >
                Get in Touch
            </Button>
        </div>
        <div className="flex-1 flex flex-col justify-between w-full px-10">
            <div className='flex justify-between'>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
                    Let’s Work Together
                </h2>
                <a href="mailto:nasanjargal20040524@gmail.com">
                    <Button className="flex items-center gap-3 border-2 border-[#484E53] dark:border-[#4FC3F7] rounded-full px-4 py-2 cursor-pointer bg-transparent dark:bg-transparent text-[#484E53] dark:text-[#4FC3F7] hover:bg-transparent">
                    <Mail />
                    nasanjargal20040524@gmail.com
                    </Button>
                </a>
            </div>
        </div>
      </div>
        <div className="w-full h-[1px] bg-gray-400"></div>
        <div className='flex justify-between w-full mt-7 px-10'>
            <p className="text-center text-gray-600 dark:text-gray-400">© 2025 All rights reserved.</p>
            <div className='flex gap-4'>
                <a href="https://www.facebook.com/nasanjargal.khasherdene"><Facebook /></a>
                <a href="https://www.instagram.com/nasanjargal_kh/"><Instagram /></a>
                <a href="https://www.linkedin.com/in/%D1%85-%D0%BD%D0%B0%D1%81%D0%B0%D0%BD%D0%B6%D0%B0%D1%80%D0%B3%D0%B0%D0%BB-4b0693300/"><Linkedin /></a>
                <a href="tel:90015676">
                <Phone className="w-6 h-6 text-gray-700 dark:text-white" />
                </a>
            </div>
        </div>
    </div>
  );
}
