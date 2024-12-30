import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { GiBookAura } from "react-icons/gi";
import { GoBook } from "react-icons/go";
import { GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <div
      id="education"
      className="sm:py-10 h-full w-[70%] m-auto max-sm:w-auto"
    >
      <h1
        data-aos="zoom-out-left"
        className="flex text-4xl justify-center font-bold py-8 text-white"
      >
        Education
        <GraduationCap className="size-10 ml-1 text-emerald-500" />
      </h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work max-sm:w-[85%] max-sm:ml-14"
          contentStyle={{
            background: "chocolate",
            color: "#fff",
            marginLeft: "5px",
          }}
          date="2022 - 2026"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<GiBookAura />}
        >
          <h3 className="vertical-timeline-element-title text-white font-bold">
            B-TECH
          </h3>
          <h4 className="vertical-timeline-element-subtitle mt-1  text-[16px]">
            Information Technology
          </h4>
          <p>Chandigarh Engineering College</p>
          <p className="text-white">CGPA - 8.75</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "blue",
            color: "#fff",
            marginRight: "5px",
          }}
          date="2020 - 2022"
          iconStyle={{ background: "#bbcde6", color: "#434d6c" }}
          icon={<GoBook />}
        >
          <h3 className="vertical-timeline-element-title text-[#ede9e9] font-bold">
            12th
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-[16px]">
            {" "}
            Non-Med ( CBSE )
          </h4>
          <p> Mahindra Public School</p>
          <p className="text-blue-200">Percentage % - 75</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work max-sm:w-[85%] max-sm:ml-14"
          contentStyle={{
            background: "green",
            color: "#fff",
            marginLeft: "5px",
          }}
          date="2019-2020"
          iconStyle={{ background: "#87be6f", color: "#434d6c" }}
          icon={<GoBook />}
        >
          <h3 className="vertical-timeline-element-title text-[#ede9e9] font-bold">
            10th
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-[16px]">
            {" "}
            Science
          </h4>
          <p>St.Kabir Convent School</p>
          <p className="text-green-100">Percentage % - 84</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Education;
