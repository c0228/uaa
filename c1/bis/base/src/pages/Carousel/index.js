import React, { useState, useEffect } from 'react';
import './index.css';

const Carousel = ({ slides }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const setPrevious = () => {
    if (activeSlide === 0) {
      setActiveSlide(slides.length - 1);
    } else {
      setActiveSlide(activeSlide - 1);
    }
  };
  const setNext = () => {
    if (activeSlide === slides.length - 1) {
      setActiveSlide(0);
    } else {
      setActiveSlide(activeSlide + 1);
    }
  };
  return (
    <div className="carousel">
      {slides?.map((slide, index) => {
        return (
          <div
            key={index}
            className={index === activeSlide ? 'slide' : 'slide hide'}
          >
            <img src={slide?.img} />
            <div className="text-overlay">{slide?.content}</div>
          </div>
        );
      })}
      <div className="nav-dots">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
      <div className="navigation">
        <button className="arrow prev" onClick={setPrevious}>
          &larr;
        </button>
        <button className="arrow next" onClick={setNext}>
          &rarr;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
