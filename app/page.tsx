import { Projects } from "@/const";
import {
  ArrowBigDownDashIcon,
  Github,
  Download,
  PaperclipIcon,
} from "lucide-react";
import Link from "next/link";
import { Experiences } from "@/const";
import ExperienceCard from "@/app/components/ExperienceCard";
import ProjectCard from "./components/ProjectCard";
import TechStackMarquee from "./components/TechStacks";
import Image from "next/image";
import AnimatedText from "./components/TransitionText";
export default function Home() {
  return (
    <main className="flex flex-col row-start-2 w-full justify-center items-center font-[family-name:var(--font-geist-sans)] bg-black">
      <section className="section" id="#home">
        <div className="w-full flex flex-col gap-y-3 lg:mb-5 text-center">
          <h1 className="font-bold text-3xl lg:text-7xl">Adrianus Charlie</h1>
          <AnimatedText />
        </div>
        <h3 className="text-md text-gray-300 lg:px-56 lg:text-lg">
          Specializing in developing APIs and web services, as well as
          full-stack applications using .NET Core, Next.js, and Node.js. With a
          strong foundation in both SQL and NoSQL databases, scalable solutions
          are created to meet diverse business needs. Deployment is efficiently
          managed using Docker to ensure consistency across environments.
          Currently exploring blockchain and Web3 technologies
        </h3>
        <Link
          href={"#about"}
          className="flex items-center justify-center gap-3 px-3 py-2.5  animate-bounce cursor-pointer text-lg lg:text-2xl "
        >
          <ArrowBigDownDashIcon className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text" />
          <p className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Let&#39;s Know Me Better!
          </p>
        </Link>
      </section>
      <section className="section px-4 py-8 scroll-mt-28" id="about">
        <div className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-center gap-20 h-full lg:gap-20">
          {/* Profile Image */}
          <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-1/6 lg:h-1/6 flex-shrink-0">
            <Image
              src="/assets/profile.png"
              layout="responsive"
              width={1}
              height={1}
              alt="profile"
              className="object-cover rounded-full"
            />
          </div>

          {/* Text Content */}
          <div className="text-center lg:text-left max-w-2xl lg:h-1/6">
            <h1 className="font-bold text-3xl lg:text-5xl  text-white">
              About Me
            </h1>
            <p className="mt-4 text-gray-400 text-base">
              Hi! I&#39;m Adrianus Charlie, a tech enthusiast based in
              Yogyakarta, Indonesia. I love exploring new things—especially in
              the world of software development, blockchain, and emerging
              technologies. Whether it&#39;s building fullstack apps, diving
              into machine learning, or experimenting with Web3, I&#39;m always
              eager to learn and grow. Outside of code, you&#39;ll find me
              enjoying music, watching films, keeping up with financial markets,
              or playing sports to recharge. I believe learning is a lifelong
              journey, and I&#39;m excited to keep leveling up—both as a
              developer and as a person.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="experiences">
        <div className="w-full flex flex-col gap-y-3 lg:mb-5">
          <h1 className="font-bold text-3xl lg:text-5xl text-white">
            Experiences
          </h1>
          <p className="mt-4 text-gray-400 text-base max-w-2xl mx-auto mb-8">
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
      <section className="section" id="projects">
        <div className="w-full max-w-7xl mx-auto flex flex-col gap-y-8">
          {/* Section Heading */}
          <div className="text-center">
            <h1 className="font-bold text-3xl lg:text-5xl text-white">
              Projects
            </h1>
            <p className="mt-4 text-gray-400 text-base max-w-2xl mx-auto">
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
        <Link
          className=" flex items-center justify-center underline gap-3 text-white px-3 mt-10 "
          href={"https://github.com/adrianuscharlie/"}
          target="_blank"
        >
          <Github /> View More on Github
        </Link>
      </section>
      <section className="section py-16 px-4 lg:px-20 bg-black" id="tech">
        <div className="w-full max-w-7xl mx-auto flex flex-col gap-y-8">
          <div className="text-center">
            <h1 className="font-bold text-3xl lg:text-5xl text-white">
              Tech Stacks
            </h1>
            <p className="mt-4 text-gray-400 text-base max-w-2xl mx-auto">
              A curated collection of tools and technologies I’ve worked with,
              highlighting my experience in full-stack development, API
              integration, and building modern, responsive user interfaces using
              today’s top frameworks and libraries.
            </p>
          </div>
          <TechStackMarquee />
        </div>
      </section>
      <section className="section" id="#additional">
        <div className="text-center">
          <h1 className="font-bold text-3xl lg:text-5xl text-white">
            Additional Information
          </h1>
          <p className="mt-4 text-gray-400 text-base max-w-2xl mx-auto">
            Here&#39;s a collection of my certifications and resume to support
            my professional background and skills.
          </p>
        </div>
        <div className="flex items-center justify-center gap gap-5">
          <a
            href={"/adrianuscharlie_resume.pdf"}
            download={"/adrianuscharlie_resume.pdf"}
            className="flex gap-5 underline text-md lg:text-lg   hover:text-black hover:bg-white  text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300"
          >
            <Download /> <span>Download Resume</span>
          </a>
          <Link
            href={
              "https://drive.google.com/drive/folders/1PocPkKW_cGBzyz-Vznu_WZRcK7LRcvJI?usp=drive_link"
            }
            target="_blank"
            className="flex gap-5 underline text-md lg:text-lg  hover:text-black hover:bg-white  text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300"
          >
            <PaperclipIcon /> <span>Certificates</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
