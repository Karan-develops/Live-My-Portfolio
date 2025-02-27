import { Github, Linkedin, Twitter } from "lucide-react";
import { FC } from "react";
import React from "react";
import { BsDiscord } from "react-icons/bs";

interface SocialMediaProps {
  links: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    discord?: string;
  };
}

const SocialMedia: FC<SocialMediaProps> = ({ links }) => {
  const { twitter, linkedin, github, discord } = links;

  return (
    <div className="flex gap-4">
      {twitter && (
        <a href={twitter} target="_blank" rel="noopener noreferrer">
          <Twitter className="singleIcons" />
        </a>
      )}
      {linkedin && (
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <Linkedin className="relative group text-gray-300 hover:text-blue-600 transition duration-300 ease-in-out text-lg hover:cursor-pointer" />
        </a>
      )}
      {github && (
        <a href={github} target="_blank" rel="noopener noreferrer">
          <Github className="relative group text-gray-300 hover:text-emerald-400 transition duration-300 ease-in-out text-lg hover:cursor-pointer" />
        </a>
      )}
      {discord && (
        <a href={discord} target="_blank" rel="noopener noreferrer">
          <BsDiscord className="relative group text-gray-300 hover:text-cyan-400 transition duration-300 ease-in-out text-lg hover:cursor-pointer size-6" />
        </a>
      )}
    </div>
  );
};

export default SocialMedia;
