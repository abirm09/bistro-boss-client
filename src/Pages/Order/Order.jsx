import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Cover from "../Menu/Cover/Cover";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../hooks/useMenu/useMenu";
import OrderCard from "./OrderCard";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
const Order = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  const desserts = menu.filter(item => item.category === "dessert");
  const soup = menu.filter(item => item.category === "soup");
  const salad = menu.filter(item => item.category === "salad");
  const pizza = menu.filter(item => item.category === "pizza");
  const drinks = menu.filter(item => item.category === "drinks");
  return (
    <section>
      <Helmet>
        <title>Bistro boss | Order</title>
      </Helmet>
      <div className="cs-container">
        <Cover
          img="https://i.ibb.co/djHCz0W/banner2-min.jpg"
          title="Our shop"
        />
        <Tabs
          className="my-20"
          defaultIndex={tabIndex}
          onSelect={index => setTabIndex(index)}
        >
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soups</Tab>
            <Tab>Dessert</Tab>
            <Tab>Drinks</Tab>
          </TabList>

          <TabPanel>
            <OrderCard items={salad} />
          </TabPanel>
          <TabPanel>
            <OrderCard items={pizza} />
          </TabPanel>
          <TabPanel>
            <OrderCard items={soup} />
          </TabPanel>
          <TabPanel>
            <OrderCard items={desserts} />
          </TabPanel>
          <TabPanel>
            <OrderCard items={drinks} />
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

export default Order;
