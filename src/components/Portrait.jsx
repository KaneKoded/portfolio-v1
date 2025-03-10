const Portrait = ({ imgUrl = "", imgSize, imgPos, className = "" }) => {
  return (
    <div
      className={
        "mx-auto bg-gradient-pattern px-1 py-1 rounded-full md:rounded-full " +
        className
      }
      data-aos="zoom-in"
    >
      <div
        style={{
          backgroundImage: `url('${imgUrl}')`,
          backgroundSize: `${imgSize}`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: `${imgPos}`,
        }}
        className="bg-top size-full rounded-full contrast-125 md:rounded-full"
      ></div>
    </div>
  );
};

export default Portrait;
