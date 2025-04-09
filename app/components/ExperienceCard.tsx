import Image from "next/image";
import { Experience } from "@/types/interface";
const ExperienceCard = ({ experience }: { experience: Experience }) => {
  return (
    <div className="p-5 shadow rounded  border text-justify border-white bg-black ">
      <div className="flex flex-col lg:flex-row gap gap-5">
        <Image
          src={experience.logo}
          alt={`${experience.company} logo`}
          width={100}
          height={100}
          className="object-contain"
        />
        <div className="">
          <h2 className="font-bold lg:text-xl">{experience.position}</h2>
          <h3 className="lg:text-lg">{experience.company}</h3>
          <p className="text-sm lg:text-md text-yellow-500">
            {experience.period}
          </p>
        </div>
      </div>
      <ul className="mt-2 list-disc list-inside">
        {experience.desc.split("|").map((line, i) => (
          <li key={i}>{line}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
