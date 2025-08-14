"use client";
type SkillsProps = {
  id: string; // id prop нэмлээ
};
export default function Skills({ id }: SkillsProps) {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "NoSQL",
    "GitHub",
    "CI/CD",
    "Next.js",
    "Tailwind CSS",
    "GraphQL",
    "REST APIs",
  ];

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-[#E0E8F6] dark:bg-[#1A1A1A] px-4 py-12" id={id}  >
      <h1 className="text-5xl md:text-6xl font-extrabold mb-10 text-gray-900 dark:text-gray-100 select-none">
        Skills
      </h1>

      <div className="flex flex-wrap justify-center gap-5 max-w-4xl">
        {skills.map((skill) => (
          <div
            key={skill}
            className="flex items-center justify-center text-center border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-semibold px-4 py-3 cursor-default
              hover:shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 hover:scale-105
              transition-transform transition-colors duration-300 ease-in-out
              break-words max-w-[120px]"
            style={{ minWidth: 120, minHeight: 120, fontSize: 14 }}
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}
