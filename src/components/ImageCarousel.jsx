import { useEffect, useState, useRef } from "react";
import data from "../assets/data.json";
import "../App.css";
const ImageCarousel = () => {
  const [index, setIndex] = useState(0);
  const DATA_LENGTH = data.length;
  const ref = useRef(null);
  const handleNext = () => {
    setIndex((prev) => {
      if (prev === DATA_LENGTH - 1) {
        return 0;
      } else {
        return prev + 1;
      }
    });
  };
  const handlePrev = () => {
    if (index === 0) {
      setIndex(DATA_LENGTH - 1);
    } else {
      setIndex((prev) => prev - 1);
    }
  };
  useEffect(() => {
    ref.current = setInterval(handleNext, 1000);
    return () => clearInterval(ref.current);
  }, []);
  return (
    <div
      onMouseEnter={() => clearInterval(ref.current)}
      className="image-container"
    >
      <div className="prev-btn" onClick={handlePrev}>
        ◀
      </div>
      <img src={data[index].download_url} alt="" className="img-carousel" />
      <div className="next-btn" onClick={handleNext}>
        ▶
      </div>
    </div>
  );
};

export default ImageCarousel;
