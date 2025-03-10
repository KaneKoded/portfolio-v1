const Card = ({ children }) => {
  return (
    <div
      className="relative w-full h-full flex flex-col items-center justify-evenly rounded-md overflow-hidden bg-dark-gray bg-gradient-pattern z-[1] 
    after:absolute after:w-full after:h-full after:overflow-hidden after:rounded-md after:z-[2] 
    after:bg-transparent after:bg-dot-pattern after:bg-[length:280px_280px]"
    >
      {children}
    </div>
  );
};

export default Card;
