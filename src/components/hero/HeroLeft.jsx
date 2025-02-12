import Button from "../Button";
import Logo from "../Logo";
import { resumeLink } from "../../data/data";

const HeroLeft = () => {
  return (
    <div className="flex flex-col size-full md:w-fit text-white">
      <Logo text="LK" className="absolute inset-0 left-3 top-4 md:invisible" />

      <div className="w-fit h-full flex flex-col ">
        <div className="h-3/4 xxs:h-3/5 flex flex-col justify-center pt-1 xxs:pt-0">
          <h3
            className="mt-20 xxs:mt-28 mb-7 font-normal font-Roboto text-xl sm:text-2xl drop-shadow-dark"
            data-aos="fade-right"
          >
            Front-end Web Dev
            <span className="hidden lg:inline-block">eloper</span>
          </h3>

          <h1
            className="text-[3.5rem] sm:text-[4rem] font-medium font-RobotoCond leading-none tracking-tight drop-shadow-dark"
            data-aos="zoom-in-down"
          >
            Let's Work <br />
            Together
          </h1>

          <h2
            className="mt-5 xxs:mt-9 lg:mt-6 text-xl sm:text-2xl font-normal font-Noto italic 
          leading-snug drop-shadow-dark"
            data-aos="zoom-in-up"
          >
            to build amazing dynamic
            <br />
            user experiences
          </h2>
        </div>

        <div
          className="w-full h-[140px] xxs:pt-7 xxs:h-[170px] sm:pt-0 sm:h-[120px] flex items-end md:items-center"
          data-aos="fade-right"
        >
          <Button
            href={resumeLink}
            text="CV"
            target="_blank"
            external={true}
            className="btn btn-cyan md:px-3 md:py-2 btn-reflection"
          />
          <Button
            href="#portfolio"
            text="My Work"
            className="btn btn-purple md:px-3 md:py-2 btn-reflection"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroLeft;
