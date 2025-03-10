import HeroLeft from "../components/hero/HeroLeft";
import HeroRight from "../components/hero/HeroRight";

const Home = () => {
  return (
    <div className="bg-dark-gray bg-gradient-pattern select-none">
      <section
        id="home"
        data-link="#home"
        className="bg-dot-pattern bg-[length:655px_646px] h-screen"
      >
        <div className="bg-transparent bg-hero-underlay w-full h-full">
          <div className="relative flex w-full h-full pl-3 overflow-hidden">
            <div className="flex flex-col justify-center items-center w-[34%] md:w-2/5 lg:w-[43%] min-w-80 z-[2]">
              <HeroLeft />
            </div>
            <div
              className="absolute bottom-[3%] left-[2%] w-[140%] h-full flex flex-col justify-center items-end z-[1] 
              xxs:bottom-9 xxs:left-[12%] sm:bottom-6 sm:left-auto sm:-right-10 sm:w-[100%] md:left-auto md:-right-5 md:w-[100%] lg:right-2 lg:bottom-4 xl:right-3"
            >
              <HeroRight />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
