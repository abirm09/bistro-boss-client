import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCard from "../../Shared/MenuCard/MenuCard";
import useMenu from "../../../hooks/useMenu/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter(item => item.category === "popular");
  return (
    <section className="pt-20">
      <div className="cs-container">
        <SectionTitle subHeading="Check it out" title="FROM OUR MENU" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {popular.map(item => (
            <MenuCard key={item._id} menu={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularMenu;
