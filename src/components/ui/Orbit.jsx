import { Bot } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { FaReddit, FaGithub, FaXTwitter } from "react-icons/fa6";
import {
  SiNotion,
  SiMedium,
  SiStackoverflow,
  SiOpenai,
  SiReact,
  SiPrisma,
} from "react-icons/si";

const icons1 = [FaReddit, FaGithub, FaXTwitter, SiNotion, SiMedium, Bot];
const icons2 = [
  FaReddit,
  FaGithub,
  FaXTwitter,
  SiPrisma,
  SiReact,
  Bot,
  SiStackoverflow,
  SiOpenai,
];

export default function RevolvingIcons() {
  const [angle, setAngle] = useState(0);
  const animationRef = useRef(null);

  useEffect(() => {
    const animate = () => {
      setAngle((prev) => prev + 0.005);
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () =>
      animationRef.current && cancelAnimationFrame(animationRef.current);
  }, []);

  return (
    <div className="relative flex items-center justify-center h-screen p-64">
      <div className="absolute w-[200px] h-[200px] border border-gray-600 rounded-full"></div>
      <div className="absolute w-[400px] h-[400px] border border-gray-600 rounded-full"></div>

      {icons1.map((Icon, index) => {
        const theta = (index * (2 * Math.PI)) / icons1.length + angle;
        const x = Math.cos(theta) * 100;
        const y = Math.sin(theta) * 100;

        return (
          <div
            key={`inner-${index}`}
            className="absolute flex items-center justify-center w-16 h-16 bg-gray-800 rounded-full"
            style={{ transform: `translate(${x}px, ${y}px)` }}
          >
            <Icon className="text-white text-3xl" />
          </div>
        );
      })}

      {icons2.map((Icon, index) => {
        const theta = (index * (2 * Math.PI)) / icons2.length - angle;
        const x = Math.cos(theta) * 200;
        const y = Math.sin(theta) * 200;

        return (
          <div
            key={`outer-${index}`}
            className="absolute flex items-center justify-center w-16 h-16 bg-gray-700 rounded-full"
            style={{ transform: `translate(${x}px, ${y}px)` }}
          >
            <Icon className="text-white text-3xl" />
          </div>
        );
      })}
    </div>
  );
}
