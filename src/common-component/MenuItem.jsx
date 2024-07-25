import React from 'react';
import ItemCard from './ItemCard';

const data = [
  {
    title: 'product 1',
    des: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestia  pariatur non reprehenderit',
  },
];

const MenuItem = ({ title, data }) => {
  return (
    <>
      <div>
        <h4>{title}</h4>
        <div className=" grid grid-cols-3 gap-2">
          <ItemCard
            title="product 1"
            des="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae
          pariatur non reprehenderit"
            price={25.1}
            image={'../sss'}
          />
          <ItemCard
            title="product 1"
            des="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae
          pariatur non reprehenderit"
            price={25.1}
            image={'../sss'}
          />
          <ItemCard
            title="product 1"
            des="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae
          pariatur non reprehenderit"
            price={25.1}
            image={'../sss'}
          />
        </div>
      </div>
    </>
  );
};

export default MenuItem;
