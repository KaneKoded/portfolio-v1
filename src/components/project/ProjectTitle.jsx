const ProjectTitle = ({ title, className }) => {
  return (
    <h4
      className={
        "absolute top-0 left-0 pl-5 leading-[42px] text-white text-[20px] font-Noto font-semibold italic opacity-0 scale-0 [transition:.5s_ease-out_.05s] " +
        className
      }
    >
      {title}
    </h4>
  );
};

export default ProjectTitle;
