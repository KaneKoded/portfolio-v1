import Badge from "../components/Badge";
import Card from "../components/Card";
import FlipCard from "../components/FlipCard";
import MainHeader from "../components/MainHeader";
import Portrait from "../components/Portrait";
import Skills from "../components/Skills";
import Slider from "../components/Slider";
import SubHeader from "../components/SubHeader";
import { resumeLink, testimonials, workHistory } from "../data/data";

import { BsFillGearFill } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

const About = () => {
  const flipHeader = "Basic Job Summary";

  return (
    <>
      <section
        id="about"
        data-link="#about"
        className="pl-2 pr-5 text-pretty border-t-2 border-transparent bg-white md:px-[8%] lg:px-[10%] xl:px-[11%]"
      >
        <MainHeader
          text="about"
          className="mx-auto mb-3 md:mx-0 md:mt-14 md:mb-12"
        />

        <div
          className="pb-10 h-auto w-full text-center border-b-[1px] border-neutral-300 
        md:text-left"
        >
          <Portrait
            imgUrl="src/assets/me_new2-sm.png"
            imgSize="132%"
            imgPos="top center"
            className="w-36 h-36 md:w-32 md:h-32 md:float-left md:mr-7 md:[shape-outside:circle()]"
          />
          <div>
            <span
              className="relative block mt-7 mb-5 text-2xl font-Montserrat uppercase font-semibold md:mb-0"
              data-aos="fade-up"
            >
              Hi, I'm Lisa.
            </span>
            <p
              className="relative md:text-base italic md:max-w-[650px]"
              data-aos="fade-left"
            >
              Based in the USA, I'm a front-end web developer passionate about
              building amazing, <b>real-world,</b> dynamic user experiences.
            </p>
          </div>
          <div className="relative" data-aos="fade-right">
            <p className="clear-start md:mt-7">
              Over the past 20+ years, I've tackled various front-end and
              back-end projects, many of which required learning on the fly.
              Enhancing my abilities to adapt in challenging situations,
              possessing strong problem-solving skills, along with being an
              effective team player, have been key to my success working in web
              development.
            </p>
          </div>
          <p className="relative" data-aos="fade-left">
            <span className="block mt-6 mb-4 text-xl font-Montserrat uppercase font-semibold">
              Me in a nutshell
            </span>
            I have an easy-going, slightly-goofy personality. I love to laugh
            (especially at myself) and I'm a total coffee-a-holic. In my spare
            time, I enjoy shopping, games and puzzles of all kinds, nature, DIY
            projects, watching bingeable TV shows, and sharing knowledge by
            helping others solve their coding problems.
          </p>
        </div>
      </section>

      <div
        className="bg-white pt-12 pb-10 w-full h-auto flex flex-col md:flex-row items-center gap-3 md:gap-10 
      px-2 md:px-[8%] lg:px-[10%] xl:px-[11%]"
      >
        <div className="text-center lg:w-1/2" data-aos="zoom-in-right">
          <SubHeader text="Skills in Focus" />
          <p className="mb-3 text-pretty">
            These are the top frameworks, libraries, and tools that are my
            current focus.
          </p>
        </div>

        <div
          className="relative sm:mr-3 lg:w-1/2 flex justify-center"
          data-aos="zoom-in-left"
          data-aos-easing="ease-out-cubic"
        >
          <Skills />
        </div>
      </div>

      <div className="w-full h-full bg-dark-gray flex flex-col items-center text-white pt-6">
        <div>
          <div className="relative text-center mt-4 mb-7" data-aos="fade-down">
            <SubHeader text="Experience" />
            <p className="mx-auto px-1 text-pretty font-light max-w-[600px]">
              The flip side of each card contains a basic job summary. Please
              view my{" "}
              <a
                href={resumeLink}
                title="Lisa A. Kane - Resume"
                target="_blank"
                className="text-[#1b97a4] font-medium whitespace-nowrap hover:underline"
              >
                resume
                <FiExternalLink size={19} className="ml-1 inline" />
              </a>{" "}
              for more details.
            </p>
          </div>

          <div>
            <div className="relative w-fit h-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mx-auto gap-y-5 gap-x-10 xl:gap-x-5">
              {workHistory.map((work, index) => (
                <div
                  key={work.company}
                  className="relative rounded-md w-full h-auto mt-4"
                  data-aos="fade-up"
                  data-aos-duration={300 * (index + 1)}
                >
                  <FlipCard
                    className="w-[300px] h-[250px] xl:w-[280px]"
                    front={
                      <div className="w-full h-full  opacity-100 rounded-md shadow-[0px_0px_16px_rgba(0,0,0,0.65)]">
                        <Card>
                          <div className="p-1 w-full h-full text-center flex flex-col items-center justify-evenly font-RobotoCond">
                            <span className="block font-normal leading-snug text-[1.05rem]">
                              {work.company}
                            </span>
                            <span className="block font-medium leading-tight text-2xl">
                              {work.position}
                            </span>
                            <span className="block font-normal text-[1.05rem]">
                              {work.tenure}
                            </span>
                          </div>
                        </Card>
                      </div>
                    }
                    back={
                      <div className="bg-gradient-to-b from-white to-[rgb(218,220,226)] text-center px-2 pb-3 flex min-h-full flex-col items-center justify-center rounded-md shadow-lg shadow-black/30 select-none">
                        <h2 className="my-3 text-cyan-800 text-lg font-RobotoCond font-semibold">
                          {flipHeader}
                        </h2>
                        <span className="text-base font-normal leading-snug text-pretty text-neutral-700">
                          {work.description}
                        </span>
                      </div>
                    }
                    badge={
                      <Badge
                        bgColor="rgb(48,48,52)"
                        icon={
                          <BsFillGearFill
                            size={38}
                            className="text-cyan-800 drop-shadow-[0_2px_2px_rgba(0,0,0,.7)]"
                          />
                        }
                        borderColor="rgba(47,122,142,.4)"
                        className="top-[5px] left-[6px]"
                      />
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <hr className="w-[85%] h-[1px] mt-14 mb-12 border-neutral-600"></hr>

        <div className="w-full">
          <div
            className="relative mb-1 w-full h-auto text-center"
            data-aos="fade-up"
          >
            <SubHeader text="What They Say" />
            <p className="mx-auto px-1 text-pretty font-light max-w-[550px]">
              Kind words from some of the extraordinary people that I've had the
              privilege of working with.
            </p>
          </div>

          <div className="w-[98%]">
            <div
              className="relative pb-2 flex justify-center"
              data-aos="zoom-in"
            >
              <Slider
                data={testimonials}
                autoPlay={true}
                autoPlayInterval={10000}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
