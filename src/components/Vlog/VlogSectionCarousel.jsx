import { useRef, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import VlogCarouselSectionScss from "./VlogSectionCarousel.module.scss";
import playButtonimg from "../../Images/VlogCompImg/playButton.png";

function VlogSectionCarousel() {
  const [index, setIndex] = useState(0);
  const iframeRef = useRef(null);

  const playVideo = () => {
    iframeRef.current.contentWindow.postMessage(
      '{"event":"command","func":"playVideo","args":""}',
      "*"
    );
  };

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      controls={false}
      className={VlogCarouselSectionScss.Carousel}
    >
      <Carousel.Item className="w-100 h-100">
        <div className="w-100 h-100">
          <iframe
            ref={iframeRef}
            className="w-100 h-100"
            src="https://www.youtube.com/embed/0Ha6YYJ-_fk?si=ELIrR0dDAKziJ311"
            // allowfullscreen
          ></iframe>
        </div>
      </Carousel.Item>
      <Carousel.Item className="w-100 h-100">
        <div className="w-100 h-100">
          <iframe
            className="w-100 h-100"
            src="https://www.youtube.com/embed/Zz59xFAvMDY?si=uxHiL_bMnQiyOjUZ"
            title="YouTube video player"
            // allowfullscreen
          ></iframe>
        </div>
      </Carousel.Item>
      <Carousel.Item className="w-100 h-100 object-fit-cover">
        <div className="w-100 h-100 object-fit-cover">
          <iframe
            className="w-100 h-100"
            src="https://www.youtube.com/embed/_yJvIbU9_gc?si=n7jG5TjnLX1LB5HA"
            title="YouTube video player"
            // allowfullscreen
          ></iframe>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default VlogSectionCarousel;
