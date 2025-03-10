const ProjectLogo = ({ src, className, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={
        "relative w-full h-auto mt-0 [transition:.5s_ease] " + className
      }
    />
  );
};

export default ProjectLogo;
