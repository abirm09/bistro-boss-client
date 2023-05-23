const SectionTitle = ({ subHeading, title }) => {
  return (
    <div className="w-full md:w-4/12 text-center mx-auto mb-4">
      <h2 className="text-yellow-500 mb-2">---{subHeading}---</h2>
      <h3 className="border-y-2 text-2xl md:text-5xl py-3 font-inter uppercase">
        {title}
      </h3>
    </div>
  );
};

export default SectionTitle;
