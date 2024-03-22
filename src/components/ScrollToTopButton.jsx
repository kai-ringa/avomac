import React, { useState, useEffect } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import './ScrollToTopButton.css';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={`scroll-to-top ${isVisible ? 'show' : ''}`}
      onClick={scrollToTop}
    >
      <FaArrowCircleUp />
    </div>
  );
}

export default ScrollToTopButton;
