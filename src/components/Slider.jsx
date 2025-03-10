import React, { useState, useEffect, useRef } from "react";
import Slide from "./slider/Slide";
import SliderDots from "./slider/SliderDots";
import { PrevButton, NextButton } from "./slider/SliderButtons";
import useIntersection from "../custom-hooks/useIntersection";

const Slider = ({ data, autoPlay = false, autoPlayInterval = 4000 }) => {
  const [isActive, setIsActive] = useState(autoPlay);
  const [currentIndex, setCurrentIndex] = useState(0);

  const ref = useRef();

  //autoslide = true only if in view
  const inViewport = useIntersection(ref, "200px");

  let touchStartX;
  let touchEndX;
  let sliderTimer;

  useEffect(() => {
    if (isActive) {
      if (inViewport) {
        const slideInterval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
        }, autoPlayInterval);

        return () => {
          clearInterval(slideInterval);
        };
      }
    }
  }, [isActive, inViewport]);

  const handleStart = () => {
    autoPlay && setIsActive(true);
  };

  const handleStop = () => {
    autoPlay && setIsActive(false);
  };

  const handleDelay = () => {
    clearTimeout(sliderTimer);
    handleStop();
    sliderTimer = setTimeout(() => {
      handleStart();
    }, autoPlayInterval);
  };

  const prevSlide = () => {
    handleDelay();
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  const nextSlide = () => {
    handleDelay();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handleTouchStart = (event) => {
    touchStartX = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    touchEndX = event.changedTouches[0].clientX;
    let swipeDistance = touchStartX - touchEndX;
    let swipeThreshold = 30;

    if (swipeDistance > 0 + swipeThreshold) {
      prevSlide();
    } else if (swipeDistance < 0 - swipeThreshold) {
      nextSlide();
    } else {
      return;
    }
  };

  const handleDotClick = (n) => {
    handleDelay();
    setCurrentIndex(n);
  };

  return (
    <div className="w-[96%] h-[520px] max-w-[650px] xxs:h-[550px] sm:w-[98%] sm:h-[450px] lg:w-[80%]">
      <div
        className="w-full h-[80%] xxs:h-[80%]"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        ref={ref}
      >
        <div className="relative overflow-x-hidden w-full h-full">
          {data.map((d, index) => (
            <div
              key={index}
              className={`absolute inset-0 py-2 px-2 transition-transform transform duration-700     
                    ${
                      index == currentIndex
                        ? "translate-x-0"
                        : "translate-x-full"
                    }`}
            >
              <Slide name={d.name} title={d.title} text={d.text} />
            </div>
          ))}
          <PrevButton onClick={prevSlide} />
          <NextButton onClick={nextSlide} />
        </div>

        <SliderDots
          data={data}
          currentIndex={currentIndex}
          handleDotClick={handleDotClick}
        />
      </div>
    </div>
  );
};

export default Slider;
