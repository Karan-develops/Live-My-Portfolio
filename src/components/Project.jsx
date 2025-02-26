import React from "react";
import ProjectCard from "./ProjectCard";
import chatApp from "../images/projects/chatApp.png";
import ecommerce from "../images/projects/ec.png";
import sumz from "../images/projects/Sumz.png";
import pitch from "../images/projects/ps.png";
import codeEd from "../images/projects/codeEd.png";
import momentz from "../images/projects/momentz.png";
import newzly from "../images/projects/newzly.png";
import bookops from "../images/projects/bookops.png";
import campus from "../images/projects/campus.png";
import {
  BookMarkedIcon,
  BugPlay,
  GithubIcon,
  GraduationCap,
  LucideChartNoAxesCombined,
  Medal,
  MessageCircleCodeIcon,
  MoonStar,
  Newspaper,
  Sigma,
  Waypoints,
} from "lucide-react";
import { BiStore } from "react-icons/bi";

const projectsData = [
  {
    id: 0,
    image: campus,
    title: "Open Source Campus Connect",
    icon: <GraduationCap className="text-emerald-500 mr-1 -mt-1 text-2xl" />,
    deployedStatus: "Un-Deployed 💻",
    liveUrl: "https://github.com/Karan-develops",
    githubUrl: "https://github.com/Karan-develops/Campus-Connect",
    description: [
      "• User authentication and authorization.",
      "• Profile management for Users.",
      "• Connect with Peers & Grow your Network.",
      "• Event scheduling and notifications.",
      "• Discussion forums and messaging.",
      "• Course Details and Forms.",
      "• Brilliant UI & UX.",
      "• Create & Organize Clubs, Sports, Events.",
      "• ShowCase your Projects.",
    ],
    tech: "Technologies Used:- NextJS, React.js, React.js , Shadcn-ui, TailwindCSS, TypeScript, Zod - Form Validation, Framer-motion, State Management:Zustand, Node.js, Prisma, Express-JS, Mongoose, Neon, PostgreSQL, MongoDB, Clerk, vercel.",
  },
  {
    id: 1,
    image: codeEd,
    title: "Full Stack Code Editor - NextJS",
    icon: <BugPlay className="text-amber-500 mr-1 -mt-1 text-2xl" />,
    deployedStatus: "Deployed ✅",
    liveUrl: "https://karan-code-dev.vercel.app/",
    githubUrl: "https://github.com/Karan-develops/Live-Full-Stack-Code-Editor",
    description: [
      "• Online IDE with multi-language support (10 languages).",
      "• Customizable experience with 5 VSCode themes.",
      "• Smart output handling with Success & Error states.",
      "• Flexible pricing with Free & Pro plans.",
      "• Community-driven code sharing system.",
      "• Advanced filtering & search capabilities.",
      "• Personal profile with execution history tracking.",
      "• Webhook integration support",
    ],
    tech: "Technologies Used:- NextJS, Convex, Clerk, Zustand, TypeScript, vercel.",
  },
  {
    id: 2,
    image: ecommerce,
    title: "Full Stack E-Comm. Store",
    icon: <BiStore className="text-green-500 mr-1 -mt-1 text-2xl" />,
    deployedStatus: "Deployed ✅",
    liveUrl: "https://karan-ecommerce.onrender.com",
    githubUrl: "https://github.com/Karan-develops/E-Commerce-Deployed",
    description: [
      "• This is a full stack e-commerce that fully functional user can create an account via email and add items to cart.",
      "Admins can track the sales analytics and much more.",
      "• MongoDB , Redis && Cloudinary Integration.",
      "• Authentication System JWT with Refresh/Access Tokens.",
      "• User Signup & Login.",
      "• Admin Dashboard with Sales Analytics.",
      "• Create real-time products with pics on Cloudinary.",
    ],
    tech: "Technologies Used:- MERN, Recharts (Analytics) , Zustand,Postman, MongoDB Atlas, render, cloudinary, upstash redis.",
  },
  {
    id: 3,
    image: pitch,
    title: "NextJS - Startup pitching platform",
    icon: <Waypoints className="text-purple-400 mr-1 -mt-1 size-7" />,
    deployedStatus: "Deployed ✅",
    liveUrl: "https://karan-startup.vercel.app",
    githubUrl: "https://github.com/Karan-develops/Live-Startup-pitch-sync",
    description: [
      "This project showcases the latest features of Next.js 15, including Next.js Form for seamless client-side form submissions, Unstable After for background tasks, Server Component HMR Cache for faster development, and Partial Prerendering for performance optimization.",
    ],
    tech: "Technologies Used:- React 19, Next.js 15, Sanity, TailwindCSS, ShadCN, TypeScript.",
  },
  {
    id: 4,
    image: momentz,
    title: "Momentz - Full Stack Social App",
    icon: <MoonStar className="text-amber-300 mr-1 -mt-1 size-7" />,
    deployedStatus: "Deployed ✅",
    liveUrl: "https://momentz-tawny.vercel.app/",
    githubUrl:
      "https://github.com/Karan-develops/Mometz-FullStack-SocialMedia-App",
    description: [
      "A Modern Full Stack Social Media App with features like Post, Like, Comment, Follow, Unfollow, Profile, and more. Powered By Next.js.",
    ],
    tech: "Technologies Used:- Next.js, TailwindCSS, ShadCN, TypeScript, prisma, postgresql, uploadthing, vercel.",
  },
  {
    id: 5,
    image: newzly,
    title: "Newzly - Daily Dose of news",
    icon: <Newspaper className="text-gray-400 mr-1 -mt-1 size-6" />,
    deployedStatus: "Deployed ✅",
    liveUrl: "https://newzly-karan.vercel.app/",
    githubUrl: "https://github.com/Karan-develops/Newzly",
    description: [
      "A news app having built on Next Js, having backend and frontend separate. It has cron-job enabled to fetch news and store it in database.",
    ],
    tech: "Technologies Used:- Next.js, TailwindCSS, TypeScript, node, express, render, mongoDB, vercel.",
  },
  {
    id: 6,
    image: chatApp,
    title: "Real-Time Chat App (Socket - IO)",
    icon: <MessageCircleCodeIcon className="text-cyan-400 mr-1 -mt-1 size-7" />,
    deployedStatus: "Deployed ✅",
    liveUrl: "https://chat-verse-karan.onrender.com",
    githubUrl: "https://github.com/Karan-develops/MERN-ChatApp-Deployed",
    description:
      "Developed a responsive, full-stack chat application with real-time messaging using modern web technologies. Implemented features such as user authentication, message storage, and seamless deployment on Render.",
    tech: "Technologies Used:- Node JS, Mongo DB, Express,JWT,Socket.io",
  },
  {
    id: 7,
    image: bookops,
    title: "Book-Ops Library Management System",
    icon: <BookMarkedIcon className="text-purple-500 mr-1 -mt-1 size-7" />,
    deployedStatus: "Deployed ✅",
    liveUrl: "https://bookops-karan.vercel.app/",
    githubUrl: "https://github.com/Karan-develops/Book-Ops",
    description:
      "Built with Next.js, TypeScript, and Postgres, the University Library Management System is a production-grade platform featuring a public-facing app and an admin interface. It offers advanced functionalities like seamless book borrowing with reminders and receipts, robust user management, automated workflows, and a modern, optimized tech stack for real-world scalability.",
    tech: "Technologies Used:- Next JS, PostgreSQL, ImageKit, TS.",
  },
  {
    id: 8,
    image: sumz,
    title: "Sumz - AI - Using RapidApi",
    icon: <Sigma className="text-orange-500" />,
    deployedStatus: "Deployed ✅",
    liveUrl: "https://karan-sumz.netlify.app/",
    githubUrl: "https://github.com/Karan-develops/Sumz-AI-WebApp",
    description:
      "Summarize any kind of article with just one click using the powerful OpenAI model.",
    tech: "Technologies Used:- MERN, RapidApi (for api) , React-Redux, netlify.",
  },
];

const Project = () => {
  return (
    <div id="project" className="text-white mt-10">
      <h1
        data-aos="fade-up-right"
        className="lg:text-4xl text-3xl flex justify-center items-center gap-2 font-bold my-10"
      >
        My
        <span className="flex text-emerald-500">
          Projects
          <LucideChartNoAxesCombined className="size-10 ml-1" />
        </span>
      </h1>
      <div className="project_card_container">
        {projectsData.map((project) => (
          <div
            key={project.id}
            data-aos="zoom-in-up"
            className="project_card_div relative"
          >
            {project.id === 0 && (
              <>
                <div className="absolute top-3 left-0 bg-transparent text-green-400 px-3 py-1 rounded-br-md">
                  Open Source <Medal />
                </div>
                <div className="absolute top-3 left-10">
                  <span className="flex size-[11px]">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-600 opacity-75"></span>
                    <span className="relative inline-flex size-[11px] bg-emerald-600 rounded-full"></span>
                  </span>
                </div>
              </>
            )}
            <div className="rounded-2xl">
              <img
                className="project_card_img"
                src={project.image}
                alt={`P${project.id}`}
              />
              <div className="project_card_textContainer">
                <h1 className="project_card_heading">
                  {project.icon}
                  <span className="-mt-[3px]">{project.title}</span>
                </h1>
                <p className="project_card_deployed mt-[2px]">
                  {project.deployedStatus}
                </p>
                <div className="project_card_links project-description">
                  <div>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="project_card_liveBtn">Live Url</button>
                    </a>
                  </div>
                  <div className="flex justify-center items-center mr-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GithubIcon className="relative group text-gray-300 hover:text-emerald-400 transition duration-300 ease-in-out text-lg hover:cursor-pointer ml-5 mt-3" />
                    </a>
                  </div>
                  <div className="mt-2">
                    <ProjectCard
                      projectDescription={
                        Array.isArray(project.description)
                          ? project.description.map((line, index) => (
                              <React.Fragment key={index}>
                                {line}
                                <br />
                              </React.Fragment>
                            ))
                          : project.description
                      }
                      tech={project.tech}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
