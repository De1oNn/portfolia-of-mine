"use client";
import { Button } from "@/components/ui/button";

type AboutProps = {
  id: string;
};
export default function About({ id }: AboutProps) {
  return (
    <div className="w-full h-screen justify-center items-center flex" id={id}>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center mt-4">
          <h1 className="text-[63px] dark:text-white text-[#484E53] font-bold">About me</h1>
          <p className="text-[26px] bg-gradient-to-r from-[#4FC3F7] to-[#484E53] bg-clip-text text-transparent">
            Get to know me
          </p>
        </div>

        <p className="text-[19px] dark:text-white text-center text-[#484E53] font-medium w-[800px] mt-4">
          Сайн байна уу! Би Х. Насанжаргал, вэб хөгжүүлэлт болон хиймэл оюун ухааны чиглэлд карьераа хөгжүүлэх зорилготой junior програм хангамжийн инженер...
        </p>

        <a href="/cv final.docx" download>
          <Button className="dark:border-[#4FC3F7] dark:text-white bg-transparent text-[15px] text-[#484E53] hover:bg-transparent hover:border-[3px] h-[55px] w-[187px] border-[1px] border-black text-black mt-[40px] rounded-[75px]">
            Download CV
          </Button>
        </a>
      </div>
    </div>
  );
}
