import MainHeader from "../components/MainHeader";
import Project from "../components/Project";

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      data-link="#portfolio"
      className="border-t-[1px] border-dark-gray"
    >
      <div
        className="border-t-[1px] border-neutral-200 w-full h-full pb-8 md:px-[8%] lg:px-[10%] xl:px-[11%] text-center md:text-left relative
      before:bg-neutral-200 before:bg-img-fixed before:bg-no-repeat before:bg-center before:bg-cover before:w-full before:h-full 
      before:left-0 before:top-0 before:fixed before:z-[-1]"
      >
        <div className="pt-2 pl-2 pr-5">
          <MainHeader text="portfolio" className="mb-4 mx-auto md:mx-0" />
          <p className="text-pretty mb-5" data-aos="fade-right">
            These are a few of the past projects I've worked on. More to come...
          </p>
        </div>

        <div className="min-h-screen size-full">
          <Project />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
