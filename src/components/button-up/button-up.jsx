import React, { useState, useEffect } from 'react';
import './button-up.scss'; 
import arrow from '../../images/arrow.png';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button className="scroll-to-top-button" onClick={scrollToTop}>
          <img className="arrow" src={arrow} alt="arrow"  />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;