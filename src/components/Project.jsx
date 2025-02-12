import { FiExternalLink } from "react-icons/fi";
import { MdTouchApp } from "react-icons/md";
import { portfolioProjects } from "../data/data";

const Project = () => {
  return (
    <div
      className="w-full min-h-screen pb-24 items-start grid grid-cols-1 gap-5 [grid-auto-rows:280px]  
    md:grid-cols-2 md:gap-5 lg:gap-y-[12%] xl:grid-cols-3 xl:gap-10"
    >
      {portfolioProjects.map((project, index) => (
        <div
          key={index}
          className="mx-auto md:mx-0 relative group  
          rounded-md w-fit bg-gradient-pattern p-2  
          shadow-[0px_0px_8px_rgba(0,0,0,0.75)]  
          hover:z-[5]"
          data-aos="fade-up"
        >
          <div className="rounded-md">
            <div className="project">
              <div
                className="absolute top-0 left-0 w-full h-full rounded-md 
              bg-white group-hover:rounded-b-none"
              >
                <img
                  className="grayscale absolute top-1/2 left-1/2 w-4/5 lg:w-2/3 xl:w-4/5 
                  [transform:translate(-50%,-50%)] group-hover:grayscale-0"
                  src={project.logo}
                />
                <MdTouchApp
                  size={70}
                  className="text-neutral-300 absolute -bottom-1 -right-2 
                  [transform:rotate(-45deg)]"
                />
              </div>

              <div className="project-info flex flex-col items-center justify-center">
                <p className="p-5 text-base text-pretty">{project.desc}</p>
                <a
                  href={project.url}
                  title={project.company}
                  target="_blank"
                  className="text-[#1b97a4] text-base font-medium whitespace-nowrap 
                  hover:underline"
                >
                  Visit Website
                  <FiExternalLink size={18} className="ml-1 inline" />
                </a>
              </div>
            </div>

            <div className="project-slideout">
              <div className="project-content text-gray-800 rounded-md">
                <div className="text-center">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="gradient-border">
                      <span className="gradient-text">{tag}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
