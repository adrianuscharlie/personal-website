import Image from "next/image";
import { Projects, SocialMedia } from "@/const";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { Experiences } from "@/const";
import ExperienceCard from "@/app/components/ExperienceCard";
import ProjectCard from "./components/ProjectCard";
export default function Home() {
  return (
    <main className="flex flex-col row-start-2 w-full justify-center items-center font-[family-name:var(--font-geist-sans)] dark:bg-black">
      <section className="section ">
        <div className="w-full flex flex-col gap-y-3 lg:mb-5">
          <h1 className="font-bold text-3xl lg:text-7xl">Adrianus Charlie</h1>
          <h2 className="font-semibold text-lg lg:text-3xl text-yellow-500">
            Software Engineer - .NET Developer
          </h2>
        </div>
        <h3 className="text-md text-gray-300 lg:px-56 lg:text-lg">
          Specializing in developing APIs and web services, as well as
          full-stack applications using .NET Core, Next.js, and Node.js. With a
          strong foundation in both SQL and NoSQL databases, scalable solutions
          are created to meet diverse business needs. Deployment is efficiently
          managed using Docker to ensure consistency across environments.
          Currently exploring blockchain and Web3 technologies
        </h3>
        {/* <div className="flex justify-center items-center gap-5">
          <Link
            href={"https://github.com/adrianuscharlie/"}
            target="_blank"
            className=" p-1 border border-black rounded-md hover:text-white hover:bg-black dark:hover:text-black dark:hover:bg-white"
          >
            <Github />
          </Link>
          <Link
            href="https://linkedin.com/in/adrianuscharlie/"
            target="_blank"
            className=" p-1 border border-black rounded-md hover:text-white hover:bg-black dark:hover:text-black dark:hover:bg-white"
          >
            <Linkedin />
          </Link>
          <Link
            href="mailto:adrianus.charlie02@gmail.com"
            className="p-1 border border-black rounded-md hover:text-white hover:bg-black dark:hover:text-black dark:hover:bg-white"
          >
            <Mail />
          </Link>
        </div> */}
      </section>
      <section className="section">
        <div className="w-full flex flex-col gap-y-3 lg:mb-5">
          <h1 className="font-bold text-3xl lg:text-5xl text-black dark:text-white">
            Experiences
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-400 text-base max-w-2xl mx-auto mb-8">
            A curated timeline of my professional journey, highlighting roles,
            responsibilities, and contributions across various industries and
            technologies.
          </p>
          <div className="grid grid-cols-1 gap gap-y-10 lg:px-32 lg:gap-10 lg:grid-cols-1">
            {Experiences.map((item, index) => (
              <ExperienceCard experience={item} key={item.company + index} />
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 px-4 lg:px-20 bg-white dark:bg-black">
        <div className="w-full max-w-7xl mx-auto flex flex-col gap-y-8">
          {/* Section Heading */}
          <div className="text-center">
            <h1 className="font-bold text-3xl lg:text-5xl text-black dark:text-white">
              Projects
            </h1>
            <p className="mt-4 text-gray-600 dark:text-gray-400 text-base max-w-2xl mx-auto">
              A collection of work showcasing my experience with fullstack
              development, API integration, and modern UI frameworks.
            </p>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {Projects.map((project, index) => (
              <div className="h-full" key={project.name + index}>
                <ProjectCard project={project} key={project.name + index} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
