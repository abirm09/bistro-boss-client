import MenuCard from "../MenuCard/MenuCard";

const ShowCategoryItems = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {items.map(item => (
        <MenuCard key={item._id} menu={item} />
      ))}
    </div>
  );
};

export default ShowCategoryItems;
