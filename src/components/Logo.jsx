const Logo = ({ text, className = "" }) => {
  return (
    <span
      className={
        `${className} font-medium flex items-center w-11 h-11 text-lg ` +
        `justify-center ring-1 ring-white/30 bg-white/20 sm:bg-white/15 text-white rounded-full ` +
        `md:w-9 md:h-9 md:text-sm md:ring-brand-gray-dk md:bg-brand-gray-dk`
      }
    >
      {text}
    </span>
  );
};

export default Logo;
