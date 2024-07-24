import React from 'react';
import order1 from '../assets/order 1.png';
import order2 from '../assets/food 1.png';
import order3 from '../assets/order-food 1.png';
import pizzagirl from '../assets/pizaGirl.png';

function Cardcomp() {
  const cards = [
    {
      title: "Place an Order!",
      description: "Please order through our Website or Mobile app.",
      img: order3
    },
    {
      title: "Track Progress",
      description: "You can track your order status with delivery time",
      img: order2
    },
    {
      title: "Get Your Order",
      description: "Receive your order at a lightning-fast speed!",
      img: order1
    }
  ];

  return (
    <div className='py-4 bg-gray-200 h-auto text-sm mx-10 rounded-lg relative'>
      <div className='absolute inset-0 -z-10'>
        <img src={pizzagirl} alt="Pizzagirl" className='w-full h-full object-cover opacity-30' />
      </div>
      <div className='flex flex-col relative z-20'>
        <div className='mb-10 flex items-center text-lg'>
          <p className='mt-20 ml-20 font-bold text-3xl'>Know More About Us</p>
          <nav className='mt-20 ml-auto font-bold flex space-x-4 items-center mr-20'>
            <a href="#" className='text-gray-600 hover:text-gray-900 relative'>
              <span className='inline-block py-2 px-5 rounded-full border border-transparent hover:border-orange-500 hover:bg-white hover:text-black transition-all duration-300 transform group-hover:scale-105'>
                Frequent Questions
              </span>
            </a>
            <a href="#" className='text-gray-600 hover:text-gray-900 relative'>
              <span className='inline-block py-2 px-5 rounded-full border border-transparent hover:border-orange-500 hover:bg-white hover:text-black transition-all duration-300 transform group-hover:scale-105'>
                Who we are?
              </span>
            </a>
            <a href="#" className='text-gray-600 hover:text-gray-900 relative'>
              <span className='inline-block py-2 px-5 rounded-full border border-transparent hover:border-orange-500 hover:bg-white hover:text-black transition-all duration-300 transform group-hover:scale-105'>
                Partner Program
              </span>
            </a>
            <a href="#" className='text-gray-600 hover:text-gray-900 relative'>
              <span className='inline-block py-1 px-2 rounded-full border border-transparent hover:border-orange-500 hover:bg-white hover:text-black'>
                Help & Support
              </span>
            </a>
          </nav>
        </div>
        <div className='bg-slate-950 p-24 mt-4 my-20 mx-20 rounded-lg relative'>
          <div className='flex flex-col lg:flex-row'>
            <div className='flex-1'>
              <div className='mb-6'>
                <button className='bg-orange-500 font-bold text-lg rounded-full py-3 px-6'>How Does UK.Order Works?</button>
              </div>
              <div className='mt-5'>
                <p className='text-white text-lg font-bold mt-3'>What payment Methods are Accepted?</p>
                <p className='text-white text-lg font-bold mt-3'>Can I track my order in real time?</p>
                <p className='text-white text-lg font-bold mt-3'>Are there any special discounts or promotions available?</p>
                <p className='text-white text-lg font-bold mt-3'>Is Order UK available in my area?</p>
              </div>
            </div>
            <div className='flex-1'>
              <div className='flex flex-row space-x-6'>
                {cards.map((card, index) => (
                  <div key={index} className='bg-gray-400 p-6 rounded-lg shadow-md flex-1'>
                    <h3 className='text-xl font-bold mb-2'>{card.title}</h3>
                    <img src={card.img} alt={card.title} className="mx-auto mb-4" />
                    <p className='text-black text-md font-bold text-center'>{card.description}</p>
                  </div>
                ))}
              </div>
              <div className='mt-6'>
                <p className='text-white text-lg'>
                  Order.UK simplifies the food ordering process. Browse through our diverse menu, select your favorite dishes, and proceed to checkout. Your delicious meal will be on its way to your doorstep in no time!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cardcomp;
