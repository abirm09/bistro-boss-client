import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <Carousel autoPlay>
      <div>
        <img src="https://i.ibb.co/j6sGHwx/01.jpg" alt="Slider1" />
      </div>
      <div>
        <img src="https://i.ibb.co/Sm78q3M/02.jpg" alt="Slider2" />
      </div>
      <div>
        <img src="https://i.ibb.co/tmTbVCx/03.png" alt="Slider3" />
      </div>
      <div>
        <img src="https://i.ibb.co/R7CZS96/04.jpg" alt="Slider4" />
      </div>
      <div>
        <img src="https://i.ibb.co/JKqL5R2/05.png" alt="Slider5" />
      </div>
      <div>
        <img src="https://i.ibb.co/LdCBnZV/06.png" alt="Slider6" />
      </div>
    </Carousel>
  );
};

export default Banner;
