import { Link } from "react-router-dom";
import ShowCategoryItems from "../../Shared/ShowCategoryItems/ShowCategoryItems";
import Cover from "../Cover/Cover";

const MenuCategory = ({ items, coverImg, title }) => {
  return (
    <div className="mt-20 space-y-10">
      {title && <Cover img={coverImg} title={title} />}
      <ShowCategoryItems items={items} />
      <div className="flex justify-center">
        <Link to={`/order/${title}`}>
          <button className="btn btn-outline border-0 border-b-2">
            ORDER YOUR FAVORITE FOOD
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
