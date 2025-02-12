const FlipCard = ({ width, height, front, back, badge }) => {
  return (
    <>
      <div className={`group/flip ${height} ${width} [perspective:1000px]`}>
        {badge && (
          <div className="z-20 relative w-full flex justify-center transition-all duration-500 [transform-style:preserve-3d] group-hover/flip:[transform:rotateY(180deg)]">
            {badge}
          </div>
        )}
        <div className="z-10 pointer-events-auto relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover/flip:[transform:rotateY(180deg)]">
          <div className="pointer-events-auto absolute inset-0 size-full">
            {front}
          </div>

          <div className="pointer-events-auto absolute inset-0 size-full [transform:rotateY(180deg)_translateZ(1px)] [backface-visibility:hidden]">
            {back}
          </div>
        </div>
      </div>
    </>
  );
};

export default FlipCard;
