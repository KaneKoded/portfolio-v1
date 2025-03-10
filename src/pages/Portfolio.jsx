import MainHeader from "../components/MainHeader";
import { portfolioProjects } from "../data/data";
import Project from "../components/Project";

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      data-link="#portfolio"
      className="border-t-[1px] border-dark-gray flex flex-col"
    >
      <div
        className="border-t-[1px] border-neutral-200 w-full h-full flex-1 flex flex-col pb-8 
       relative portfolio-bg"
      >
        <div className="pt-2 px-2" data-aos="fade-down">
          <MainHeader text="portfolio" className="mb-3 mx-auto" />
          <p className="text-pretty text-center mb-5 mx-auto w-fit">
            These are some of the past projects I've worked on.{" "}
            <i>More to come...</i>
          </p>
        </div>

        <div className="flex-1 w-full h-full mx-auto">
          <div className="p-0 grid grid-cols-[repeat(auto-fit,minmax(320px,350px))] gap-2 justify-center">
            <Project data={portfolioProjects} width="317px" height="360px" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
