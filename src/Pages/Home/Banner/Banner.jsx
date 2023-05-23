import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
      <Carousel autoPlay>
        <div>
          <img src="https://i.ibb.co/F48KgCS/01.jpg" alt="Slider1" />
        </div>
        <div>
          <img src="https://i.ibb.co/10zqWnT/02.jpg" alt="Slider2" />
        </div>
        <div>
          <img src="https://i.ibb.co/zG3YJ0r/03.png" alt="Slider3" />
        </div>
        <div>
          <img src="https://i.ibb.co/X2tZ0JG/04.jpg" alt="Slider4" />
        </div>
        <div>
          <img src="https://i.ibb.co/cyN08N6/05.png" alt="Slider5" />
        </div>
        <div>
          <img src="https://i.ibb.co/p1n7xVT/06.png" alt="Slider6" />
        </div>
      </Carousel>
    );
};

export default Banner;