const Badge = ({ icon, bgColor, borderColor, className }) => {
  return (
    <div className="absolute top-[-25px] size-[50px] z-[1]">
      <div
        style={{ backgroundColor: `${bgColor}` }}
        className="absolute top-[24px] w-full h-[2px] z-0"
      ></div>
      <div className={"absolute z-[2] " + className}>{icon}</div>
      <div
        style={{ backgroundColor: `${bgColor}`, borderColor: `${borderColor}` }}
        className="absolute bottom-0 w-full h-1/2 rounded-b-[25px] z-[1] border-2 border-t-0"
      ></div>
    </div>
  );
};

export default Badge;
