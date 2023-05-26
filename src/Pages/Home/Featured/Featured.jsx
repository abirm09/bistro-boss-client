import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import "./featured.css";
const Featured = () => {
  return (
    <section className="featured-item bg-fixed p-3 md:p-32 mt-20">
      <div className="cs-container">
        <SectionTitle subHeading="Check it out" title="From our menu" />
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 mt-10">
          <div>
            <img
              src="https://i.ibb.co/ZSyHZTy/featured.jpg"
              alt="Featured"
              className="max-w-[648px] w-full mx-auto"
            />
          </div>
          <div className="text-white space-y-4">
            <p className="font-inter text-2xl">May 23, 2023</p>
            <p className="font-inter text-2xl">WHERE CAN I GET SOME?</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
              enim quod obcaecati eos blanditiis doloremque adipisci
              consequuntur vitae quas qui eligendi molestiae labore dignissimos
              optio quia, natus provident non? Sunt.
            </p>
            <button className="btn btn-outline border-0 border-b-2">
              Order now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
