import postman from "../images/tools/postman.png";
import vsCode from "../images/tools/vsCode.jpg";
import mongo from "../images/tools/mongo.jpg";
import convex from "../images/lang/convex.jpg";
import sanity from "../images/lang/sanity.png";
import node from "../images/lang/node.png";
import chrome from "../images/tools/chrome.jpg";
import github from "../images/lang/gitHub.jpg";
import git from "../images/lang/git.png";
import figma from "../images/tools/figma.png";
import { Wrench } from "lucide-react";
import npm from "../images/tools/npm.png";
import vercel from "../images/tools/vercel.png";
import docker from "../images/tools/docker.png";
import netlify from "../images/tools/netlify.png";
import cloudinary from "../images/tools/cloudinary.png";
import chatgpt from "../images/tools/chatgpt.png";
import vite from "../images/tools/vite.jpg";
import lemon from "../images/tools/lemon.jpg";

const Marquee = () => {
  const tools = [
    { src: postman, name: "Postman" },
    { src: vsCode, name: "VS Code" },
    { src: chatgpt, name: "ChatGPT", specialClass: "object-cover" },
    { src: mongo, name: "MongoDB" },
    { src: convex, name: "Convex" },
    { src: sanity, name: "Sanity" },
    { src: github, name: "GitHub" },
    { src: git, name: "Git" },
    { src: figma, name: "Figma" },
    { src: npm, name: "NPM" },
    { src: vite, name: "Vite", specialClass: "object-cover" },
    { src: docker, name: "Docker" },
    { src: chrome, name: "Chrome DevTools" },
    { src: vercel, name: "Vercel" },
    { src: netlify, name: "Netlify" },
    { src: node, name: "Node.js" },
    { src: lemon, name: "Lemonade.js" },
    { src: cloudinary, name: "Cloudinary" },
  ];

  return (
    <div className="overflow-hidden mt-28 z-auto">
      <h1 className="skill_heading">
        <span>
          <Wrench className="text-3xl text-[#817ffa]" />{" "}
        </span>{" "}
        Tools I Use
      </h1>
      <div className="flex w-[200%] animate-marquee mt-20 mb-28">
        {[...tools, ...tools].map((tool, index) => (
          <img
            key={index}
            src={tool.src}
            alt={tool.name}
            className={`mr-8 size-12 rounded-full ${tool.specialClass || ""}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Marquee;
