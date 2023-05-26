import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import quote from "../../../assets/common/quote.png";
const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then(res => res.json())
      .then(data => setReviews(data));
  }, []);
  return (
    <section className="pt-20">
      <div className="cs-container">
        <SectionTitle subHeading="What Our Clients Say" title="TESTIMONIALS" />
        <div>
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {reviews.map(review => (
              <SwiperSlide key={review._id} className="py-10 space-y-10">
                <Rating
                  style={{ maxWidth: 250 }}
                  className="mx-auto"
                  value={review.rating}
                  readOnly
                />
                <img src={quote} alt="Quote" className="mx-auto" />
                <p className="w-4/5 mx-auto text-center">{review.details}</p>
                <h3 className="text-center text-xl md:text-3xl font-bold text-yellow-500">
                  {review.name}
                </h3>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
