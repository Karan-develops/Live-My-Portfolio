import React from "react";

import {
  Code,
  ShoppingCart,
  Layers,
  Paintbrush,
  Zap,
  WrenchIcon,
  LightbulbIcon,
  Sparkles,
  ArrowUpWideNarrow,
  CloudCog,
} from "lucide-react";
import MagicBtn from "./ui/MagicBtn";

const services = [
  {
    title: "Custom Web Development",
    icon: Code,
  },
  {
    title: "E-Commerce",
    icon: ShoppingCart,
  },
  {
    title: "API Integration & Backend",
    icon: Layers,
  },
  {
    title: "UI/UX Implementation",
    icon: Paintbrush,
  },
  {
    title: "Web Optimization",
    icon: Zap,
  },
  {
    title: "Maintenance & Support",
    icon: WrenchIcon,
  },
  {
    title: "Consulting & Strategy",
    icon: LightbulbIcon,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 flex w-full justify-center align-middle items-center"
    >
      <div className="md:max-w-7xl flex justify-center align-middle items-center gap-8 flex-col">
        {/* heading */}
        <div
          className={` md:text-6xl text-4xl text-white font-semibold flex gap-2 justify-center align-middle items-center`}
        >
          Services
          <span className="flex text-emerald-500">
            Offered
            <CloudCog className="size-10" />
          </span>
        </div>
        {/* services and CTA  */}
        <div className=" flex md:flex-row flex-col justify-center align-middle items-center gap-16 md:w-full md:h-96">
          <div className="services flex  flex-wrap gap-2 rounded-2xl md:max-w-xl md:p-1 p-11   ">
            {services.map((service, index) => (
              <div
                key={index}
                className="border border-dashed rounded-md md:p-4 p-1 border-white flex justify-center align-middle items-center gap-1 group hover:cursor-pointer hover:rotate-6 duration-1000"
              >
                <Sparkles className="fill-white group-hover:scale-150  ease-in-out duration-250 size-4" />
                <div className="text-lg text-white">{service.title}</div>
                <service.icon className="text-green-500" />
              </div>
            ))}
          </div>
          <div className="flex justify-end align-middle items-center min-h-72 h-full p-2 hover:-rotate-6 ease-in-out duration-1000">
            <div className="md:w-[28rem] flex flex-col justify-center align-middle items-start gap-2 h-full py-10 rounded-lg shadow-lg px-8 bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-gray-600 via-gray-900 to-gray-500">
              <span className="md:text-5xl text-3xl leading-snug text-white font-semibold">
                <ArrowUpWideNarrow />
                Your Next Big Idea, Just a Call Away
              </span>
              <p className="text-white">
                Connect with me to discuss how I can make your project stand
                out.
              </p>
              <MagicBtn text={"Get in Touch"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
