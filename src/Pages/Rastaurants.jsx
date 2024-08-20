import React from "react";

import HeroComponent from "../pages-component/Restaurants/HeroComponent";
import Foodsnavbar from "../pages-component/Restaurants/Foodsnavbar";
import Discountimage from "../pages-component/Restaurants/Discountimage";
import MenuItem from "../common-component/MenuItem";
import InformationPage from "../pages-component/Restaurants/InformationPage";
import Reviews from "../pages-component/Restaurants/Reviews";
import Map from "../pages-component/Restaurants/Map";
import cardImage from "../assets/Rectangle 46.png";
import fries from "../assets/Fries.png";
import drink1 from "../assets/drink1.png";
import drink2 from "../assets/drink2.png";
import drink3 from "../assets/drink3.png";
import Mobilereview from "../pages-component/Restaurants/Mobilereview";

const Rastaurants = () => {
  const Data = [
    {
      ItemName: "Burgers",
      products: [
        {
          title: "Royal Cheese Burger with extra Fries",
          des: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
          imageUrl: cardImage,
          price: 23.1,
        },
        {
          title: "The classics for 3",
          des: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
          imageUrl: cardImage,
          price: 23.1,
        },
        {
          title: "The classics for 3",
          des: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
          imageUrl: cardImage,
          price: 23.1,
        },
        {
          title: "The classics for 3",
          des: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
          imageUrl: cardImage,
          price: 23.1,
        },
        {
          title: "The classics for 3",
          des: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
          imageUrl: cardImage,
          price: 23.1,
        },
        {
          title: "The classics for 3",
          des: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
          imageUrl: cardImage,
          price: 23.1,
        },
      ],
    },
    {
      ItemName: "Fries",
      products: [
        {
          title: "Royal Cheese Burger with extra Fries",
          des: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
          imageUrl: fries,
          price: 23.1,
        },
        {
          title: "The classics for 3",
          des: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
          imageUrl: fries,
          price: 23.1,
        },
        {
          title: "The classics for 3",
          des: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
          imageUrl: fries,
          price: 23.1,
        },
        {
          title: "The classics for 3",
          des: " McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
          imageUrl: fries,
          price: 23.1,
        },
        {
          title: "The classics for 3",
          des: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
          imageUrl: fries,
          price: 23.1,
        },
        {
          title: "The classics for 3",
          des: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
          imageUrl: fries,
          price: 23.1,
        },
      ],
    },
    {
      ItemName: "Cold Drinks",
      products: [
        {
          title: "Royal Cheese Burger with extra Fries",
          des: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
          imageUrl: drink1,
          price: 23.1,
        },
        {
          title: "Royal Cheese Burger with extra Fries",
          des: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
          imageUrl: drink2,
          price: 23.1,
        },
        {
          title: "Royal Cheese Burger with extra Fries",
          des: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
          imageUrl: drink3,
          price: 23.1,
        },
        {
          title: "Royal Cheese Burger with extra Fries",
          des: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
          imageUrl: drink3,
          price: 23.1,
        },
        {
          title: "Royal Cheese Burger with extra Fries",
          des: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 mediumt",
          imageUrl: drink1,
          price: 23.1,
        },
        {
          title: "Royal Cheese Burger with extra Fries",
          des: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
          imageUrl: drink2,
          price: 23.1,
        },
      ],
    },
  ];

  return (
    <>
      <HeroComponent />
      <Foodsnavbar />
      <Discountimage />
      {Data.map((product, index) => (
        <MenuItem
          key={index}
          title={product.ItemName}
          item={product.products}
        />
      ))}
      <InformationPage />
      <Map />
      <div className="hidden md:block">
        <Reviews />
      </div>
      <div className="md:hidden block">
        <Mobilereview />
      </div>
    </>
  );
};

export default Rastaurants;
