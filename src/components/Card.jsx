const Card = ({ children }) => {
  return (
    <div
      className="size-full flex flex-col items-center justify-evenly rounded-md overflow-hidden z-[0] bg-gradient-pattern 
    after:absolute after:size-full after:overflow-hidden after:rounded-md after:z-[2] 
    after:bg-dot-pattern after:bg-[length:280px_280px]"
    >
      {children}
    </div>
  );
};

export default Card;
