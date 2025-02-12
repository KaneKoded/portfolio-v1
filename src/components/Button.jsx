import { HiOutlineExternalLink } from "react-icons/hi";

const Button = ({
  href,
  target,
  text = "Button",
  external = false,
  className = "",
  iconSize = 19,
}) => {
  return (
    <a className={className} href={href} target={target}>
      {text}
      <HiOutlineExternalLink
        size={iconSize}
        className={external == true ? "inline ml-1 opacity-80" : "hidden"}
      />
    </a>
  );
};

export default Button;
