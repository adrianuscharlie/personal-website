import { Projects } from "@/const";
import {
  ArrowBigDownDashIcon,
  Github,
  Download,
  PaperclipIcon,
  Linkedin,
  Mail,
  PhoneCall,
} from "lucide-react";
import Link from "next/link";
import { Experiences } from "@/const";
import ExperienceCard from "@/app/components/ExperienceCard";
import ProjectCard from "./components/ProjectCard";
import TechStackMarquee from "./components/TechStacks";
import Image from "next/image";
import AnimatedText from "./components/TransitionText";
import { BsWhatsapp } from "react-icons/bs";
export default function Home() {
  return (
    <main className="flex flex-col row-start-2 w-full justify-center items-center font-[family-name:var(--font-geist-sans)] ">
      <section className="section" id="#home">
        <div className="w-full flex flex-col gap-y-3 lg:mb-5 text-center">
          <h1 className="font-bold text-3xl lg:text-7xl bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Adrianus Charlie H.A
          </h1>
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
          className="flex items-center text-white shadow-lg hover:underline bg-black border border-yellow-500 rounded-xl justify-center gap-3 px-3 py-2.5  animate-bounce cursor-pointer text-lg lg:text-xl "
        >
          <ArrowBigDownDashIcon className="text-white" />
          <p className="text-white">Let&#39;s Know Me Better!</p>
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
          className=" flex items-center justify-center text-sm lg:text-lg  gap-3 px-3 mt-10 py-2.5 rounded-xl border border-whitebg-white text-black bg-white hover:underline"
          href={"https://github.com/adrianuscharlie?tab=repositories"}
          target="_blank"
        >
          <Github className=" " size={26} /> <span>View More on Github</span>
        </Link>
      </section>
      <section className="section py-16 px-4 lg:px-20" id="tech">
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
      <section className="section" id="contacts">
        <div className="text-center">
          <h1 className="font-bold text-3xl lg:text-5xl text-white">
            Contacts & Additional Information
          </h1>
          <p className="mt-4 text-gray-400 text-base max-w-2xl mx-auto">
            Feel free to reach out if you&#39;d like to connect, collaborate, or
            just say hi! Below, you&#39;ll also find a collection of my
            certifications and resume that showcase my professional experience
            and skills. I&#39;m always open to exciting opportunities and
            meaningful conversations.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:flex text-sm lg:text-lg items-center justify-center gap gap-3 text-white">
          <Link
            href={"https://linkedin.com/in/adrianuscharlie"}
            target="_blank"
            className="flex justify-center gap-3 items-center  border px-3 py-2 rounded-lg hover:underline  shadow-lg border-white hover:text-yellow-500  hover:border-yellow-500"
          >
            <Linkedin />
            <span className="font-bold">Linkedin</span>
          </Link>
          <Link
            href={"mailto:adrianus.charlie02@gmail.com"}
            target="_blank"
            className="flex justify-center gap-3 items-center  border px-3 py-2 rounded-lg hover:underline  shadow-lg border-white hover:text-yellow-500 hover:border-yellow-500"
          >
            <Mail />
            Email
          </Link>
          <Link
            href={"https://wa.me/6281381429485"}
            target="_blank"
            className="flex justify-center gap-3 items-center border px-3 py-2 rounded-lg hover:underline  shadow-lg border-white hover:text-yellow-500  hover:border-yellow-500"
          >
            <BsWhatsapp />
            Whatsapp
          </Link>

          <p className="flex justify-center gap-3 items-center  border px-3 py-2 rounded-lg hover:underline  shadow-lg border-white hover:text-yellow-500  hover:border-yellow-500">
            <PhoneCall />
            <span>6281381429485</span>
          </p>
        </div>
        <div className="flex items-center justify-center gap gap-5">
          <a
            href={"/adrianuscharlie_cv.pdf"}
            download={"/adrianuscharlie_cv.pdf"}
            className="flex gap-3 underline text-sm lg:text-lg px-3 py-2  hover:text-black hover:bg-white  text-white font-semibold rounded-lg shadow-md transition duration-300"
          >
            <Download /> <span>Download Resume</span>
          </a>
          <Link
            href={
              "https://drive.google.com/drive/folders/1PocPkKW_cGBzyz-Vznu_WZRcK7LRcvJI?usp=drive_link"
            }
            target="_blank"
            className="flex gap-3 underline text-sm lg:text-lg px-3 py-2  hover:text-black hover:bg-white  text-white font-semibold  rounded-lg shadow-md transition duration-300"
          >
            <PaperclipIcon /> <span>Certificates</span>
          </Link>
        </div>
        <h1 className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent  mt-10 lg:mt-30 text-xl lg:text-3xl font-bold underline ">
          {'"Never stop learning — because life never stops teaching!"'}
        </h1>
        <h2 className="text-yellow-500 font-semibold text-lg lg:text-xl">
          Have a good day :)
        </h2>
      </section>
    </main>
  );
}
