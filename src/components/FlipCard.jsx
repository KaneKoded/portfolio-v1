const FlipCard = ({ className, front, back, badge }) => {
  return (
    <>
      <div className={className + ` group/flip [perspective:1000px]`}>
        {badge && (
          <div className="z-20 relative w-full flex justify-center [transform-style:preserve-3d] transition-all duration-500 group-hover/flip:[transform:rotateY(180deg)]">
            {badge}
          </div>
        )}
        <div className="z-10 pointer-events-auto relative h-full w-full [transform-style:preserve-3d] transition-all duration-500 group-hover/flip:[transform:rotateY(180deg)]">
          <div className="pointer-events-auto absolute inset-0 w-full h-full">
            {front}
          </div>

          <div className="pointer-events-auto absolute inset-0 w-full h-full [transform:rotateY(180deg)_translateZ(1px)] [backface-visibility:hidden]">
            {back}
          </div>
        </div>
      </div>
    </>
  );
};

export default FlipCard;
