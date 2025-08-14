"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MoveUpRight } from 'lucide-react';
type ProjectProps = {
  id: string;
};

export default function Projects( { id }: ProjectProps ) {
    const projects = [
      {name: "Spotty", picture: "/spotty.png", tech: "Next.js / express / postgreSQL", description: "Spotty бол газрын зураг дээр найзуудынхаа хөдөлгөөн, хотод болж буй эвентүүдийг real-time харуулдаг апп бөгөөд та эвентэд нэгдэж, чиглэл авч, найзуудаа урих боломжтой.", link: "https://spottyproject.vercel.app/"},
      {name: "InnerVoice (User)", picture: "/user.png", tech: "TypeScript / Next.js / ChatGPT / MySQL", description: "Inner Voice бол байгууллагын дотоод сүлжээнд ажилчид санал хүсэлт өгөх, “гэрэл” илгээх замаар хамт олонд эерэг уур амьсгал бүрдүүлдэг real-time communication платформ юм. Энэ төслийг Hackathon-д амжилттай оролцуулж, 2-р байр эзэлсэн.", link: "https://feedback-frontend-byambasuren11-byambasurens-projects-c3f03c93.vercel.app/"}, 
      {name: "InnerVoice (Admin)", picture: "/admin.png", tech: "TypeScript / Next.js / ChatGPT / MySQL", description: "Inner Voice Admin бол байгууллагын удирдлагад ажилчдаас ирсэн санал хүсэлтийг хянах, шийдвэр гаргах, явцыг хянах, мөн өөрсдөө ажилчдад санал хүсэлт илгээх боломжтой удирдлагын хяналтын систем юм.", link: "https://feedback-admin-byambasuren11-byambasurens-projects-c3f03c93.vercel.app/"},
      {name: "Movie WebSite", picture: "/movie.png", tech: "MovieApi / TypeScript / Next.js", description: "Movie Application бол хэрэглэгчдэд кино, трейлер, үнэлгээ, болон мэдээллийг үзүүлэх, хайх, ангилах боломжтой кино мэдээллийн платформ юм.", link: "https://movie-application-tawny.vercel.app/"},
      {name: "Weather", picture: "/weather.png", tech: "WeatherApi / TypeScript / Next.js", description: "Weather Application бол хэрэглэгчийн байршил болон хайсан хотын дагуу цаг агаарын мэдээллийг real-time авч, температур, чийгшил, салхины хурд зэрэг үзүүлэлтийг харуулах платформ юм.", link: "https://weather-application-one-kappa.vercel.app/"},
      {name: "Snake Game", picture: "/snake.png", tech: "Javascript / Html / css", description: "Snake Game бол хэрэглэгч могойг удирдаж хоол цуглуулах, оноогоо өсгөх энгийн интерактив тоглоом юм.", link: "https://snake-two-eta.vercel.app/"},
    ]; 
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-[#E0E8F6] dark:bg-[#1A1A1A] px-4 py-12" id={id}>
      <h1 className="text-5xl md:text-6xl font-extrabold mb-10 text-gray-900 dark:text-gray-100 select-none">
        Projects
      </h1>
      <div className="flex flex-wrap justify-center gap-5 max-w-5xl">
        {projects.map((project) => (
          <div className="" key={project.name}>
            <div className="relative w-[300px] h-[200px] group overflow-hidden rounded-lg shadow-md">
              <Image
                width={300}
                height={200}
                src={project.picture}
                alt={project.name}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:opacity-30"
              />
              {project.description && (
                <div className="absolute w-[300px] h-[200px] flex justify-center items-center inset-0 flex items-center justify-center bg-opacity-0 opacity-0 group-hover:opacity-100 duration-300 p-4">
                  <p className="text-black dark:text-white text-center">{project.description}</p>
                </div>
              )}
            </div>
            <h2 className="text-xl font-semibold mt-3 text-gray-900 dark:text-gray-100">
              {project.name}
            </h2>
            <div className="flex justify-between items-center mt-2">
              <p className="text-[14px] text-[#484E53] dark:text-[#A9A9A9]">
                {project.tech}
              </p>
              <Button
                className="bg-[#4FC3F7] rounded-full"
                size="icon"
                onClick={() => window.open(project.link, "_blank")}
              >
                <MoveUpRight className="dark:text-white" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
