import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCard from "../../Shared/MenuCard/MenuCard";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then(res => res.json())
      .then(data => {
        const popular = data.filter(item => item.category === "popular");
        setMenu(popular);
      });
  }, []);

  return (
    <section className="pt-20">
      <div className="cs-container">
        <SectionTitle subHeading="Check it out" title="FROM OUR MENU" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {menu.map(item => (
            <MenuCard key={item._id} menu={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularMenu;
