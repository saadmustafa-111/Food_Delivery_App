import React from 'react';

import HeroComponent from '../pages-component/Restaurants/HeroComponent';
import Foodsnavbar from '../pages-component/Restaurants/Foodsnavbar';
import Discountimage from '../pages-component/Restaurants/Discountimage';
import Burgers from '../pages-component/Restaurants/Burgers';
import MenuItem from '../common-component/MenuItem';

const Rastaurants = () => {
  return (
    <>
      <HeroComponent />
      <Foodsnavbar />
      <Discountimage />
      <MenuItem title="Burgers" data={[]} />
      <MenuItem title="Fries" />
    </>
  );
};

export default Rastaurants;
