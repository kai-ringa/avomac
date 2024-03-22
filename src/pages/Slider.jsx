import React, { useState, useEffect } from 'react';
import './Slider.css';
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from 'lucide-react';
import avocado from '../images/avocado.jpg';
import avocado1 from '../images/avocado1.jpg';
import avocado2 from '../images/avocado2.jpg';
import avocado3 from '../images/avocado3.jpg';
import avocado4 from '../images/avocado4.jpg';
import avocado5 from '../images/avocado5.jpg';
import macadamia from '../images/macadamia.jpg';
import seedling from '../images/seedling.jpg';
import seedling1 from '../images/seedling1.jpg';
import seedling2 from '../images/seedling2.jpg';
import seedling3 from '../images/seedling3.jpg';
import tree from '../images/tree.jpg';

const IMAGES = [
  {
    src: avocado,
    text: 'Avocados are a great source of healthy monounsaturated fats.',
  },
  {
    src: avocado1,
    text: 'Avocados are a nutrient-dense fruit, packed with vitamins and minerals.',
  },
  { src: avocado2, text: 'Avocados contain more potassium than bananas.' },
  {
    src: avocado3,
    text: 'Avocados are high in fiber, which is good for digestive health.',
  },
  { src: avocado4, text: 'Avocados may help lower cholesterol levels.' },
  {
    src: avocado5,
    text: 'Avocados are a versatile fruit, used in both savory and sweet dishes.',
  },
  {
    src: macadamia,
    text: 'Macadamia nuts are one of the richest sources of monounsaturated fats.',
  },
  {
    src: seedling,
    text: 'Macadamia nuts are one of the most expensive nuts in the world.',
  },
  {
    src: seedling1,
    text: 'Macadamia nuts are known for their creamy, buttery flavor.',
  },
  {
    src: seedling2,
    text: 'Macadamia nuts are rich in healthy fats and antioxidants.',
  },
  {
    src: seedling3,
    text: 'Macadamia nuts are a good source of manganese, an essential mineral.',
  },
  {
    src: tree,
    text: 'Macadamia nut oil is often used in cooking and skincare products.',
  },
];

function Slider() {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(showNextImage, 9000);
    return () => clearInterval(interval);
  }, []);

  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) {
        return IMAGES.length - 1;
      }
      return index - 1;
    });
  }

  function showNextImage() {
    setImageIndex((index) => {
      if (index === IMAGES.length - 1) {
        return 0;
      }
      return index + 1;
    });
  }

  return (
    <section
      aria-label="Image Slider"
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '500px',
          display: 'flex',
          overflow: 'hidden',
          borderRadius: '5px',
        }}
      >
        {IMAGES.map((image, index) => (
          <div
            key={index}
            className={`slider-image ${index === imageIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image.src})` }}
          >
            <div className="text-overlay">{image.text}</div>
          </div>
        ))}
      </div>
      <button
        onClick={showPrevImage}
        className="img-slider-btn"
        style={{ left: 0 }}
        aria-label="View Previous Image"
      >
        <ArrowBigLeft aria-hidden />
      </button>
      <button
        onClick={showNextImage}
        className="img-slider-btn"
        style={{ right: 0 }}
        aria-label="View Next Image"
      >
        <ArrowBigRight aria-hidden />
      </button>
      <div
        style={{
          position: 'absolute',
          bottom: '0.5rem',
          left: '50%',
          translate: '-50%',
          display: 'flex',
          gap: '0.25rem',
        }}
      >
        {IMAGES.map((_, index) => {
          return (
            <button
              key={index}
              className="img-slider-dot-btn"
              aria-label={`View Image ${index + 1}`}
              onClick={() => setImageIndex(index)}
            >
              {index === imageIndex ? (
                <CircleDot aria-hidden />
              ) : (
                <Circle aria-hidden />
              )}
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default Slider;
