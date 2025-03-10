const ProjectTouch = ({ className }) => {
  return (
    <div
      className={
        "absolute bottom-[1px] right-[3px] w-[50px] h-[50px] bg-touch-icon bg-cover opacity-10 -rotate-[35deg] [transition:.3s] " +
        className
      }
    ></div>
  );
};

export default ProjectTouch;
