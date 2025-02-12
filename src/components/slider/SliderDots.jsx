const SliderDots = ({ data, currentIndex, handleDotClick }) => {
  const handler = (idx) => {
    handleDotClick(idx);
  };

  return (
    <div className="h-10 flex items-center justify-center">
      {data.map((_, index) => (
        <div
          key={index}
          className={` w-2 h-2 rounded-full mx-3  
                ${index === currentIndex ? "bg-brand-cyan" : "bg-neutral-800"}
            `}
          onClick={() => handler(index)}
        ></div>
      ))}
    </div>
  );
};

export default SliderDots;
