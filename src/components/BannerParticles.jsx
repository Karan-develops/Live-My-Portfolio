import { TypeAnimation } from "react-type-animation";
import heroImg from "../images/heroImg.svg";
import TogglingText from "./ToggleText";
import HeroLinks from "./ui/HeroLinks";
import HeroBtn from "./ui/HeroBtn";

const BannerParticles = () => {
  return (
    <div id="home" className="relative h-screen">
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 z-10 ">
        <TogglingText />
      </div>
      <div className="banner h-full z-10 relative ">
        {" "}
        <div className="bannerCustom flex items-center sm:flex-row gap-10 flex-col h-full">
          <div className="lg:flex-0.7 sm:w-[60%] w-full sm:p-10 mt-9 ">
            <div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={`max-w-4xl  font-semibold text-center flex flex-col justify-center align-middle items-center mr-1 `}
            >
              <h1 className="text-[#6c96be] text-5xl md:text-8xl leading-tight tracking-tight mb-6">
                Hi! I am Karan,
                <span className="text-emerald-500"> Developer </span>
                Based in India
              </h1>
            </div>
            <div className="flex items-center w-fit gap-2 ml-[69px]">
              <h1 className=" sm:text-3xl text-xl mt-6">I am into </h1>
              <TypeAnimation
                sequence={[
                  "Mern Stack",
                  1000,
                  "Backend Dev.",
                  1000,
                  "Problem Solving",
                  1000,
                  "Web Development",
                  1000,
                ]}
                wrapper="span"
                speed={200}
                style={{
                  display: "inline-block",
                  color: "#bea6ff",
                  fontWeight: "bold",
                }}
                repeat={Infinity}
                className="typing-text-large"
              />
            </div>
            <div className="flex justify-end lg:mr-6 mr-24">
              <HeroLinks />
            </div>
            <div className="flex justify-end -mt-3 lg:mr-10 mr-28">
              <HeroBtn />
            </div>
          </div>
          <div className="ml-28 ">
            <img
              src={heroImg}
              className="bannerImgCus h-[38vh] animate-float mr-12"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerParticles;
