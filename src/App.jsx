import About from "./components/About";
import Particles from "./components/BannerParticles";
import Contact from "./components/Contact";
import CopyRight from "./components/CopyRight";
import Education from "./components/Education";
import Project from "./components/Project";
import Skills from "./components/Skills";
import "animate.css";
import "animate.css/animate.min.css";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import { ArrowUp } from "lucide-react";
import ProjectTogether from "./components/ProjectTogether";

function App() {
  function goTop() {
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
    });
  }, []);
  return (
    <div className="App">
      <Navbar />
      <div>
        <Particles />
      </div>
      <div className="center">
        <About />
        <Skills />
        <Contact />
        <Project />
        <div className="pt-20">
        <ProjectTogether/>
        </div>
        <Education />
        <CopyRight />
      </div>
      <div
        onClick={goTop}
        className="fixed cursor-pointer  w-[50px] h-[50px] rounded-full bottom-10 right-10  bg-[#0fa968] text-white flex justify-center items-center"
      >
        <ArrowUp />
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;
