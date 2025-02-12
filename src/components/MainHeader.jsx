const MainHeader = ({ text, className = "" }) => {
  return (
    <h1
      className={
        "relative w-fit mt-12 font-RobotoCond font-bold text-[3.4rem] " +
        "text-neutral-800 uppercase tracking-tight leading-none " +
        className
      }
    >
      {text}
    </h1>
  );
};

export default MainHeader;
