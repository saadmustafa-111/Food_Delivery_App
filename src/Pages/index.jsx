import React from "react";
import Midcontainer from "../HomeComponents/Midcontainer";
import Ordercomponent from "../HomeComponents/Ordercomp";
import Categories from "../HomeComponents/Categories";
import Orderingapp from "../HomeComponents/Orderingapp";
import Food from "../HomeComponents/Food";
import Cardcomp from "../HomeComponents/Cardcomp";
import Progress from "../HomeComponents/Progress";
import Restaurant from "../HomeComponents/Restaurant";

const Home = () => {
  return (
    <>
      <Midcontainer />
      <Ordercomponent />
      <Categories />
      <Restaurant />
      <Orderingapp />
      <Food />
      <Cardcomp />
      {/* <Progress /> */}
    </>
  );
};

export default Home;
