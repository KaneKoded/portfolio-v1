import SlideText from "./SlideText";
import SlideTitle from "./SlideTitle";
import Badge from "../Badge";
import { RiDoubleQuotesL } from "react-icons/ri";

const Slide = ({ name, title, text }) => {
  return (
    <div className="w-full h-full flex flex-col justify-end rounded-md bg-white shadow-[0px_0px_16px_rgba(0,0,0,0.7)]">
      <div className="z-[3] relative w-full flex justify-center">
        <Badge
          bgColor="rgb(48,48,52)"
          icon={
            <RiDoubleQuotesL
              size={48}
              className="text-cyan-800 drop-shadow-[0_2px_2px_rgba(0,0,0,.7)]"
            />
          }
          borderColor="rgb(47,122,142)"
          className="top-0 left-[2px]"
        />
      </div>
      <div className="p-3 lg:p-4 text-center w-full h-full flex items-center rounded-t-md select-none">
        <SlideText text={text} />
      </div>
      <div className="w-full h-auto rounded-b-md select-none">
        <SlideTitle name={name} title={title} />
      </div>
    </div>
  );
};

export default Slide;
