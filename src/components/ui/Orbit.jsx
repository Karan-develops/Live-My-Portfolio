import { Bot } from "lucide-react";
import { useEffect, useState } from "react";
import { FaReddit, FaGithub, FaXTwitter } from "react-icons/fa6";
import {
  SiNotion,
  SiMedium,
  SiStackoverflow,
  SiOpenai,
  SiReact,
  SiPrisma,
} from "react-icons/si";

const icons1 = [
  { Icon: FaReddit },
  { Icon: FaGithub },
  { Icon: FaXTwitter },
  { Icon: SiNotion },
  { Icon: SiMedium },
  { Icon: Bot },
];
const icons2 = [
  { Icon: FaReddit },
  { Icon: FaGithub },
  { Icon: FaXTwitter },
  { Icon: SiPrisma },
  { Icon: SiReact },
  { Icon: Bot },
  { Icon: SiStackoverflow },
  { Icon: SiOpenai },
];

export default function RevolvingIcons() {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prev) => prev + 0.02);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex items-center justify-center h-screen p-64">
      <div className="absolute w-[200px] h-[200px] border border-gray-600 rounded-full"></div>
      <div className="absolute w-[400px] h-[400px] border border-gray-600 rounded-full"></div>
      {icons1.map(({ Icon }, index) => {
        const theta = (index * (2 * Math.PI)) / icons1.length + angle;
        const radius = 100;
        const x = Math.cos(theta) * radius;
        const y = Math.sin(theta) * radius;

        return (
          <div
            key={index}
            className="absolute flex items-center justify-center w-16 h-16 bg-gray-800 rounded-full"
            style={{
              transform: `translate(${x}px, ${y}px)`,
              transition: "transform 0.02s linear",
            }}
          >
            <Icon className="text-white text-3xl" />
          </div>
        );
      })}
      {icons2.map(({ Icon }, index) => {
        const theta = (index * (2 * Math.PI)) / icons2.length - angle;
        const radius = 200;
        const x = Math.cos(theta) * radius;
        const y = Math.sin(theta) * radius;

        return (
          <div
            key={`outer-${index}`}
            className="absolute flex items-center justify-center w-16 h-16 bg-gray-700 rounded-full"
            style={{
              transform: `translate(${x}px, ${y}px)`,
              transition: "transform 0.02s linear",
            }}
          >
            <Icon className="text-white text-3xl" />
          </div>
        );
      })}
    </div>
  );
}
