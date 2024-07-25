import React from "react"
import {Route ,Routes} from 'react-router-dom'
import Topbar from "./HomeComponents/Topbar"
import Header from "./HomeComponents/Header"
import Midcontainer from "./HomeComponents/Midcontainer"
import Ordercomponent from "./HomeComponents/Ordercomp"
import Categories from "./HomeComponents/Categories"
import Restaurant from "./HomeComponents/Restaurant"
import Orderingapp from "./HomeComponents/Orderingapp"
import Food from "./HomeComponents/Food"
import Cardcomp from "./HomeComponents/Cardcomp"
import Footer from "./HomeComponents/Footer" 
import Progress from "./HomeComponents/Progress"
import HeroComponent from "./RestaurantComponents/HeroComponent"
import Foodsnavbar from "./RestaurantComponents/Foodsnavbar"
import Discountimage from "./RestaurantComponents/Discountimage"
import Burgers from "./RestaurantComponents/Burgers"
function Home() {
  return (
    <>
      <Topbar />
      <Header />
      <Midcontainer />
      <Ordercomponent />
      <Categories />
      <Restaurant />
      <Orderingapp />
      <Food />
      <Cardcomp />
      <Progress />
      <Footer />
    </>
  );
}
function RestaurantPage() {
  return (
    <>
      <Topbar />
      <Header></Header>
      <HeroComponent/>
      <Foodsnavbar/>
      <Discountimage/>
      <Burgers/>
      {/* You can add other restaurant-related components here */}
    </>
  );
}
export default function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Home />} />
<Route path="/restaurant" element={<RestaurantPage />} />
        {/* Add other routes as needed */}
      </Routes>
    </>
  )
}