import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
const Category = () => {
  return (
    <section className="pt-20">
      <div className="cs-container">
        <SectionTitle
          subHeading={"From 11:00am to 10:00pm"}
          title={"ORDER ONLINE"}
        />
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="https://i.ibb.co/kX4vCc7/slide1.jpg"
              alt="Slider1"
              className="mx-auto"
            />
            <h3 className="text-white font-cinzel text-sm md:text-3xl -mt-20 text-center">
              SALADS
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.ibb.co/10QnZ1R/slide2.jpg"
              alt="Slider2"
              className="mx-auto"
            />
            <h3 className="text-white font-cinzel text-sm md:text-3xl -mt-20 text-center">
              PIZZAS
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.ibb.co/p0LgV3B/slide3.jpg"
              alt="Slider3"
              className="mx-auto"
            />
            <h3 className="text-white font-cinzel text-sm md:text-3xl -mt-20 text-center">
              SOUPS
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.ibb.co/hCpWWfc/slide4.jpg"
              alt="Slider4"
              className="mx-auto"
            />
            <h3 className="text-white font-cinzel text-sm md:text-3xl -mt-20 text-center">
              DESSERTS
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.ibb.co/kX4vCc7/slide1.jpg"
              alt="Slider5"
              className="mx-auto"
            />
            <h3 className="text-white font-cinzel text-sm md:text-3xl -mt-20 text-center">
              SALADS
            </h3>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Category;
