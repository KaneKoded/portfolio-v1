import AnimatedBokah from "../AnimatedBokah";

const HeroRight = () => {
  return (
    <div
      className="relative visible right-0 bottom-[-20%] size-auto max-w-[750px]      
      xxs:visible md:max-w-[800px] xl:max-w-[900px]"
    >
      <div className="absolute top-[32%] left-[58%] w-3 h-3 z-[4]">
        <AnimatedBokah />
      </div>
      <img
        className="absolute top-[7.3%] left-[44%] z-[3] w-[34%] [transform:rotate(4deg)] opacity-90"
        src="src/assets/flower-sm.png"
      />
      <img
        className="w-full [transform:rotate(.2deg)]"
        src="src/assets/laptop3-sm.png"
      />
    </div>
  );
};

export default HeroRight;
