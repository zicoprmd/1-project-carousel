import './App.scss';
import { useState, useEffect } from 'react';

// IMPORT IMAGE
import zema0 from './assets/IMG_9742.JPG';
import zema1 from './assets/IMG_9743.JPG';
import zema2 from './assets/IMG_9744.JPG';
import zema3 from './assets/IMG_9747.JPG';

const slides = [zema0, zema1, zema2, zema3];

function App() {
  const [current, setCurrent] = useState(0);

  //slide selanjutnya
  function nextSlide() {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  }
  //slide sebelumnya
  function prevSlide() {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  }

  //carousel
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrent((current) => (current < slides.length - 1 ? current + 1 : 0));
    }, 3000);
    return () => {
      clearInterval(slideInterval);
    };
  }, []);

  return (
    <div>
      <h2>project 1: Carousel</h2>
      <div className="slider">
        <div className="left-arrow" onClick={prevSlide}>
          ◄
        </div>
        <div className="right-arrow" onClick={nextSlide}>
          ►
        </div>
        <div>
          {slides.map(
            (image, i) =>
              current === i && (
                <div key={image} className="slide">
                  <img src={image} alt="images" />
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
