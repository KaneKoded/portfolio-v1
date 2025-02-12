const Tooltip = ({
  offsetTop = "0px",
  showTooltip = false,
  tooltipText = "",
}) => {
  return (
    <div
      style={{
        top: offsetTop,
      }}
      className={` ${
        showTooltip ? "animate-tooltip-fade-in " : "hidden "
      } absolute inset-0 mt-[-1px] w-fit h-fit flex items-center justify-center text-xs font-Roboto text-black p-1 rounded-[4px] bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.55)] 
       after:absolute after:bottom-[100%] after:left-[20%] after:-ml-2 after:border-[9px] after:border-solid 
      after:border-[transparent_transparent_#ffffff_transparent]`}
    >
      <span className="inline-flex items-center justify-center w-5 h-5 bg-gradient-pattern text-white text-base font-bold rounded-[4px] mr-1">
        !
      </span>
      {tooltipText}
    </div>
  );
};

export default Tooltip;
