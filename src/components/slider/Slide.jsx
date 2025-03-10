import SlideText from "./SlideText";
import Badge from "../Badge";
import { RiDoubleQuotesL } from "react-icons/ri";

const Slide = ({ name, title, text }) => {
  return (
    <div className="w-full h-full [box-shadow:0_0_8px_rgba(0,0,0,.6)] rounded-xl">
      <div
        className="relative w-full h-full rounded-xl bg-dark-gray bg-gradient-pattern overflow-hidden  
    before:absolute before:top-0 before:left-1/2 before:right-1/2 before:-translate-x-1/2 before:bg-white before:w-[180%] before:sm:w-[130%] before:h-[97%] before:[border-radius:0_0_100%_50%] before:z-[3] 
    after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-transparent after:bg-dot-pattern after:bg-[length:340px_340px] after:rounded-xl z-[2]"
      >
        <div className="relative flex flex-col justify-center px-0 sm:px-10 w-full h-full z-[4] select-none">
          <RiDoubleQuotesL
            size={190}
            className="absolute -top-4 left-0 text-[#e9e9e9]"
          />
          <SlideText text={text} name={name} title={title} />
        </div>
      </div>
    </div>
  );
};

export default Slide;
