import { Blocks } from "lucide-react";
import "../index.css";
import js from "../images/lang/js.png";
import html from "../images/lang/html.png";
import css from "../images/lang/css.png";
import java from "../images/lang/java.png";
import github from "../images/lang/gitHub.jpg";
import ts from "../images/lang/ts.png";
import react from "../assets/react.svg";
import express from "../images/lang/ex.png";
import mg from "../images/lang/mongodb.png";
import node from "../images/lang/node.png";
import sql from "../images/lang/sql.png";
import bs from "../images/lang/bs.png";
import c from "../images/lang/c.png";
import redux from "../images/lang/redux.png";
import git from "../images/lang/git.png";
import cpp from "../images/lang/cpp.png";
import redis from "../images/lang/redis.png";
import typeS from "../images/lang/typeS.png";
import zustand from "../images/lang/zustand.jpg";
import convex from "../images/lang/convex.jpg";
import mongoose from "../images/lang/mongoose.png";
import next from "../images/lang/next.jpg";
import sanity from "../images/lang/sanity.png";
import auth from "../images/lang/authjs.jpg";
import clerk from "../images/lang/clerk.png";
import prisma from "../images/lang/prisma.jpg";

const skillsData = [
  { name: "HTML", img: html, imgClass: "skill_img mt-1" },
  { name: "CSS", img: css, imgClass: "skill_img mt-1" },
  { name: "JAVASCRIPT", img: js, imgClass: "skill_img" },
  { name: "REACT", img: react, imgClass: "skill_img" },
  { name: "NODE JS", img: node, imgClass: "skill_img" },
  {
    name: "EXPRESS JS",
    img: express,
    imgClass: "skill_c4",
    containerClass: "skill_c_shadow",
  },
  {
    name: "MONGO DB",
    img: mg,
    imgClass: "w-[100px] h-[40px]",
    containerClass: "skill_c_shadow",
  },
  {
    name: "REDUX",
    img: redux,
    imgClass: "skill_c5",
    containerClass: "skill_c_shadow",
  },
  { name: "JAVA", img: java, imgClass: "skill_img" },
  { name: "C", img: c, imgClass: "skill_img mt-1" },
  { name: "GIT", img: git, imgClass: "w-[50px] h-[47px] mt-2" },
  { name: "C++", img: cpp, imgClass: "skill_c3 invert" },
  { name: "GITHUB", img: github, imgClass: "skill_c4 mt-4 rounded-full" },
  { name: "SQL", img: sql, imgClass: "skill_c3" },
  { name: "Tailwind", img: ts, imgClass: "skill_c3" },
  { name: "Mongoose", img: mongoose, imgClass: "skill_c5 mt-2 rounded-full" },
  { name: "BootStrap", img: bs, imgClass: "skill_c3" },
  { name: "Redis", img: redis, imgClass: "skill_c3" },
  { name: "Zustand", img: zustand, imgClass: "skill_c3 rounded-full" },
  { name: "TypeScript", img: typeS, imgClass: "skill_c2" },
  { name: "Next JS", img: next, imgClass: "skill_c2" },
  { name: "Sanity", img: sanity, imgClass: "skill_c2 rounded-full" },
  { name: "Auth JS", img: auth, imgClass: "skill_c1" },
  { name: "Clerk", img: clerk, imgClass: "skill_c1" },
  { name: "Convex", img: convex, imgClass: "skill_c1" },
  { name: "Prisma", img: prisma, imgClass: "skill_c1" },
];

const Skills = () => {
  return (
    <div
      id="skills"
      data-aos="flip-left"
      className="lg:h-[100vh] h-full w-[100%] p-10"
    >
      <h1 className="skill_heading">
        Skills
        <Blocks className="text-emerald-500 size-8" />
      </h1>
      <div className="skill_container">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className={skill.containerClass || "skill_card customSkillShadow"}
          >
            <img className={skill.imgClass} src={skill.img} alt={skill.name} />
            <h1 className="skill_t1">{skill.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
