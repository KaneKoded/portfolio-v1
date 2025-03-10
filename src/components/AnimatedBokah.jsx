import { useRef } from "react";
import useIntersection from "../custom-hooks/useIntersection";

const AnimatedBokah = () => {
  const ref = useRef();

  //animate only if in view
  const inViewport = useIntersection(ref, "200px");

  let animationPlayState;

  if (inViewport) {
    animationPlayState = "running";
  } else {
    animationPlayState = "paused";
  }

  let animateVals = [];

  const animationValues = () => {
    let objArr = [];
    let numOfBokah = 30;
    let colors = ["rgba(255,255,255,.3)", "rgba(248,183,40,.2)"];

    for (let i = 0; i < numOfBokah; i++) {
      objArr[i] = {
        id: i + "_bokah",
        size: 24 + Math.floor(Math.random() * 24) + "px",
        color: colors[Math.floor(Math.random() * colors.length)],
        angle: Math.floor(Math.random() * 360) + "deg",
        delay: Math.random() * 20 + "s",
      };
    }

    return objArr;
  };

  animateVals = animationValues();

  return (
    <div ref={ref}>
      {animateVals.map((v) => (
        <div
          key={v.id}
          className="absolute top-1/2 left-1/2 h-5"
          style={{
            transformOrigin: "left center",
            transform: `rotate(${v.angle})`,
          }}
        >
          <div
            className="absolute rounded-full left-0 opacity-0 animate-bokah-drift"
            style={{
              backgroundColor: `${v.color}`,
              width: `${v.size}`,
              height: `${v.size}`,
              animationDelay: `${v.delay}`,
              animationPlayState: `${animationPlayState}`,
            }}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default AnimatedBokah;
