import FoodCard from "../../components/FoodCard/FoodCard";

const OrderCard = ({ items }) => {
  return (
    <div className="flex justify-center gap-5 flex-wrap">
      {items.map(item => (
        <FoodCard key={item._id} item={item} />
      ))}
    </div>
  );
};

export default OrderCard;
