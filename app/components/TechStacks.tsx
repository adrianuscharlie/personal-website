import Marquee from "react-fast-marquee";
import {
  SiSharp,
  SiPython,
  SiJavascript,
  SiNodedotjs,
  SiDotnet,
  SiReact,
  SiNextdotjs,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiDocker,
  SiRedis,
  SiLinux,
  SiTensorflow,
  SiPytorch,
  SiSolidity,
  SiWeb3Dotjs,
} from "react-icons/si";

const row1 = [
  SiSharp,
  SiPython,
  SiJavascript,
  SiNodedotjs,
  SiDotnet,
  SiReact,
  SiNextdotjs,
];

const row2 = [
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiRedis,
  SiLinux,
  SiTensorflow,
  SiPytorch,
  SiSolidity,
  SiWeb3Dotjs,
];

export default function TechStackMarquee() {
  return (
    <div className="relative w-full overflow-hidden py-4 md:py-6 space-y-4">
      {/* Fade overlays */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-8 sm:w-10 md:w-12 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-8 sm:w-10 md:w-12 bg-gradient-to-l from-black to-transparent z-10" />

      {/* Row 1 */}
      <Marquee gradient={false} speed={100}>
        <div className="flex gap-6 sm:gap-8 md:gap-10 px-2 sm:px-4 text-3xl sm:text-4xl md:text-5xl text-yellow-400">
          {row1.map((Icon, index) => (
            <Icon key={index} />
          ))}
        </div>
      </Marquee>

      {/* Row 2 */}
      <Marquee gradient={false} speed={100} direction="right">
        <div className="flex gap-6 sm:gap-8 md:gap-10 px-2 sm:px-4 text-3xl sm:text-4xl md:text-5xl text-yellow-400">
          {row2.map((Icon, index) => (
            <Icon key={index} />
          ))}
        </div>
      </Marquee>
    </div>
  );
}
