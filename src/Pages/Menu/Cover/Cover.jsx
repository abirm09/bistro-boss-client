import { Parallax } from "react-parallax";
const Cover = ({ title, img, banner }) => {
  return (
    <>
      <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-200}
      >
        <div
          className={`hero  ${
            banner ? "pt-20 pl-4 pr-4 pb-4 md:p-44" : "p-4 md:p-44"
          }`}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">{title}</h1>
              <p className="mb-5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
                illo repellat deserunt ea architecto. Architecto dolor
                reprehenderit ipsa dolorum, ad eum voluptatum quasi rem
                doloremque, molestias consequatur. Placeat, voluptates rerum.
              </p>
            </div>
          </div>
        </div>
      </Parallax>
    </>
  );
};

export default Cover;
