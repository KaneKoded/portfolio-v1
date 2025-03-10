import { BsGlobe2, BsTools } from "react-icons/bs";
import ProjectTitle from "./project/ProjectTitle";
import ProjectLogo from "./project/ProjectLogo";
import ProjectText from "./project/ProjectText";
import ProjectTouch from "./project/ProjectTouch";
import ButtonRound from "./ButtonRound";

import abstract from "../assets/abstract3.png";

const Project = ({ data, width, height }) => {
  return (
    <>
      {data.map((item, index) => (
        <div
          key={index}
          className="group relative font-Roboto mx-auto mt-0 mb-10 bg-white [box-shadow:0_10px_20px_rgba(0,0,0,.4)] rounded-xl"
          style={{ width: `${width}`, height: `${height}` }}
          data-aos="fade-up"
          data-aos-duration={300 * (index + 1)}
        >
          <div className="project-face flex-col bg-gradient-to-b from-white to-[#e1e3ea] overflow-hidden rounded-xl opacity-100">
            <div className="content relative mt-[115px] w-full h-full">
              <ButtonRound
                Icon={BsTools}
                className="group/tools peer absolute z-[2] bottom-5 right-[74px] opacity-0 -translate-x-[100%] [transition:.5s_ease] 
                group-hover:translate-x-0 group-hover:opacity-100"
                iconClass="rotate-0 group-hover:rotate-[360deg] group-hover/tools:text-white/95"
              />
              <ButtonRound
                Icon={BsGlobe2}
                href={item.url}
                target="_blank"
                title="Visit Website"
                className="group/web absolute z-[2] bottom-5 right-5 opacity-0 -translate-x-[100%] [transition:.5s_ease] 
                group-hover:translate-x-0 group-hover:opacity-100"
                iconClass="rotate-0 group-hover:rotate-[360deg] group-hover/web:text-white/95"
              />
              <ProjectText
                width={width}
                height="70%"
                className="opacity-0 translate-x-full [transition:transform_.5s,opacity_.7s_ease-in_.2s] 
                group-hover:translate-x-0 group-hover:opacity-100 peer-hover:opacity-0"
              >
                <span className="font-medium">{item.company}</span> {item.desc}
              </ProjectText>
              <ProjectText
                width={width}
                height="70%"
                className="opacity-0 [transition:opacity_.5s_ease-in] 
                peer-hover:opacity-100 peer-hover:backdrop-blur-sm"
              >
                <h4 className="text-sm font-semibold">Tech Used</h4>
                <p className="text-sm uppercase leading-normal tracking-wide">
                  {item.tags.map((tag, i) => (
                    <span key={i}>
                      {i === item.tags.length - 1 ? `${tag}` : `${tag}, `}{" "}
                    </span>
                  ))}
                </p>
              </ProjectText>
              <img
                width="150%"
                src={abstract}
                className="absolute left-[-10px] bottom-[-12px]"
              />
            </div>
          </div>
          <div
            className="project-face p-5 bg-gradient-pattern rounded-xl [transition:0.5s_ease-out] 
                group-hover:h-[40px] group-hover:rounded-[12px_12px_0_0]   
                before:absolute before:top-0 before:left-0 before:w-1/2 before:h-full  
              before:bg-white/10 before:rounded-[12px_0_0_12px] before:[transition:.5s] 
                group-hover:before:w-full group-hover:before:rounded-[12px_12px_0_0]"
          >
            <ProjectLogo
              src={item.logo}
              alt={item.company}
              className={`${
                item.logo_can_be_white && "brightness-[900%]"
              } grayscale group-hover:w-auto group-hover:h-[65px] group-hover:mr-auto group-hover:mt-[50%] group-hover:brightness-100`}
            />
            <ProjectTitle
              title={item.type}
              className="group-hover:opacity-90 group-hover:scale-100"
            />
            <ProjectTouch className="group-hover:opacity-0" />
          </div>
        </div>
      ))}
    </>
  );
};

export default Project;
