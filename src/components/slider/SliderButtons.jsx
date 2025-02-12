import { FaCaretLeft } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa";

const PrevButton = ({ onClick }) => {
  return (
    <button
      className="absolute top-1/2 -left-2 transform -translate-y-1/2 text-neutral-400"
      onClick={onClick}
    >
      <FaCaretLeft size={40} />
    </button>
  );
};

const NextButton = ({ onClick }) => {
  return (
    <button
      className="absolute top-1/2 -right-2 transform -translate-y-1/2 text-neutral-400"
      onClick={onClick}
    >
      <FaCaretRight size={40} />
    </button>
  );
};

export { PrevButton, NextButton };
