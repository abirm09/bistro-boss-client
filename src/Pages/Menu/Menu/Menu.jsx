import { Helmet } from "react-helmet-async";
import Cover from "../Cover/Cover";
import useMenu from "../../../hooks/useMenu/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ShowCategoryItems from "../../Shared/ShowCategoryItems/ShowCategoryItems";
const Menu = () => {
  const [menu] = useMenu();
  const offered = menu.filter(item => item.category === "offered");
  const desserts = menu.filter(item => item.category === "dessert");
  const pizzas = menu.filter(item => item.category === "pizza");
  const salads = menu.filter(item => item.category === "salad");
  const soup = menu.filter(item => item.category === "soup");

  return (
    <section>
      <div className="cs-container" style={{ paddingInline: 0 }}>
        <Helmet>
          <title>Bistro boss | Our menu</title>
        </Helmet>
        <Cover
          img="https://i.ibb.co/19f74SM/banner3.jpg"
          banner={true}
          title="Our menu"
        ></Cover>
        {/* Todays offer */}
        <div className="px-3">
          <div className="mt-20">
            <SectionTitle subHeading="Don't miss" title="Today's offer" />
            <ShowCategoryItems items={offered} />
          </div>
          <MenuCategory
            coverImg="https://i.ibb.co/g6r8m6q/dessert-bg.jpg"
            title="dessert"
            items={desserts}
          />
          <MenuCategory
            coverImg="https://i.ibb.co/M23KhkN/pizza-bg.jpg"
            title="pizza"
            items={pizzas}
          />
          <MenuCategory
            coverImg="https://i.ibb.co/z5kyJ83/salad-bg.jpg"
            title="salad"
            items={salads}
          />
          <MenuCategory
            coverImg="https://i.ibb.co/Ry19qGX/soup-bg.jpg"
            title="soup"
            items={soup}
          />
        </div>
      </div>
    </section>
  );
};

export default Menu;
