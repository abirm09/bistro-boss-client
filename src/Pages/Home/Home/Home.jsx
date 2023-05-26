import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import Description from "../Description/Description";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Bistro boss | Home</title>
      </Helmet>
      <Banner />
      <Category />
      <Description />
      <PopularMenu />
      <CallUs />
      <Featured />
      <Testimonial />
    </>
  );
};

export default Home;
