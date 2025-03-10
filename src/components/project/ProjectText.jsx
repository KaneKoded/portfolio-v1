const ProjectText = ({
  children = "Project Text",
  width,
  height,
  className,
}) => {
  return (
    <div
      className={
        "absolute p-5 text-black/70 text-[1em] text-left leading-normal " +
        className
      }
      style={{ width: `${width}`, height: `${height}` }}
    >
      {children}
    </div>
  );
};

export default ProjectText;
