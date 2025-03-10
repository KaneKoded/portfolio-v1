const SlideText = ({ text, name, title }) => {
  return (
    <div className="relative flex flex-col justify-center w-full h-[90%] p-5 z-[2] text-pretty font-Roboto leading-tight">
      <p className="text-black/70 text-base font-normal">{text}</p>
      <p>
        <span className="block text-base font-semibold uppercase text-brand-cyan">
          {name}
        </span>
        <span className="text-sm text-black/50 md:text-xs uppercase">
          {title}
        </span>
      </p>
    </div>
  );
};

export default SlideText;
