const MenuCard = ({ menu }) => {
  const { name, price, image, recipe } = menu;
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-3">
      <div className="col-span-1">
        <img
          src={image}
          alt={name}
          className="w-[118px] h-[104px]"
          style={{ borderRadius: "0 300px 300px 300px" }}
        />
      </div>
      <div className="col-span-1 lg:col-span-3">
        <h3 className="font-cinzel text-xl">{name}------------</h3>
        <p className="font-inter">{recipe}</p>
      </div>
      <h2 className="col-span-1 font-inter text-xl text-orange-500">
        ${price}
      </h2>
    </div>
  );
};

export default MenuCard;
