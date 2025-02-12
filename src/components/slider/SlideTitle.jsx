const SlideTitle = ({ name, title }) => {
  return (
    <div className="w-full text-center font-RobotoCond bg-gradient-pattern rounded-b-md">
      <div className="p-2 bg-dot-pattern bg-[length:180px_180px]">
        <span className="block mt-2 text-2xl font-medium text-white">
          {name}
        </span>
        <span className="block text-base font-normal text-white/80 pb-2">
          {title}
        </span>
      </div>
    </div>
  );
};

export default SlideTitle;
