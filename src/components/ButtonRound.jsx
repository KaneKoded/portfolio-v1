const ButtonRound = ({
  Icon,
  href,
  target = "",
  title,
  iconClass,
  className,
}) => {
  return (
    <>
      {href ? (
        <a
          className={"round-btn " + className}
          href={href}
          target={target}
          title={title}
        >
          <Icon className={"icon " + iconClass} />
        </a>
      ) : (
        <span className={"round-btn " + className}>
          <Icon className={"icon " + iconClass} />
        </span>
      )}
    </>
  );
};

export default ButtonRound;
