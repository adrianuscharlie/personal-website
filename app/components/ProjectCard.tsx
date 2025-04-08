import { Project } from "@/types/interface";
import { Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="flex flex-col justify-between rounded-2xl h-full text-justify border overflow-hidden w-full max-w-md shadow-md bg-white dark:bg-black dark:text-white">
      {/* Project Details */}
      <div className="p-5 flex flex-col gap-4 flex-grow">
        <h2 className="text-xl font-semibold text-yellow-500 text-start">
          {project.name}
        </h2>

        {/* Make the description flex-grow to push the rest down */}
        <p className="text-gray-700 dark:text-white flex-grow">
          {project.desc.split(" ").length > 50
            ? project.desc.split(" ").slice(0, 50).join(" ") + "..."
            : project.desc}
        </p>
      </div>

      {/* Bottom Section: Tech + GitHub */}
      <div className="p-5 pt-0 flex flex-col gap-5">
        {/* Tech Stack */}
        <ul className="flex flex-wrap gap-3 text-sm text-gray-500">
          {project.tech.map((tech, index) => (
            <li
              key={tech + index}
              className="bg-gray-100 font-semibold px-2 py-1 rounded-md"
            >
              {tech}
            </li>
          ))}
        </ul>

        {/* GitHub Link */}
        <Link
          href={project.link}
          className="flex items-center gap-2 text-blue-600 dark:text-white hover:underline text-sm lg:text-md"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={18} /> View on GitHub
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
