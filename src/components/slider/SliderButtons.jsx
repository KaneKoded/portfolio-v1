import { TbCaretLeftFilled, TbCaretRightFilled } from "react-icons/tb";

const PrevButton = ({ onClick }) => {
  return (
    <button
      className="absolute w-11 h-14 -ml-[2px] top-1/2 transform -translate-y-1/2 text-neutral-200 transition duration-300 hover:text-neutral-300"
      onClick={onClick}
    >
      <TbCaretLeftFilled size={40} />
    </button>
  );
};

const NextButton = ({ onClick }) => {
  return (
    <button
      className="relative w-11 h-14 -mr-2 float-right top-1/2 transform -translate-y-1/2 text-neutral-200 transition duration-300 hover:text-neutral-300"
      onClick={onClick}
    >
      <TbCaretRightFilled size={40} />
    </button>
  );
};

export { PrevButton, NextButton };
