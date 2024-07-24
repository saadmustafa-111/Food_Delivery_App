import React from 'react';
import g1 from '../assets/A.png';
import g2 from '../assets/b.png';
import g3 from '../assets/c.png';
import orderuk from '../assets/Order.uk.png';

export default function Ordercomponent() {
  return (
    <>
      <div className='py-6 text-lg mx-10 rounded-lg flex items-center'>
        <img src={orderuk} alt="Order UK" className='' />

        <nav className='ml-auto font-bold flex space-x-4 items-center'>
          <a href="#" className='text-gray-600 hover:text-gray-900 ml-4 relative'>
            <span className='inline-block py-1 px-2 rounded-full border border-transparent hover:border-orange-500 hover:bg-white hover:text-black transition-all duration-300 transform group-hover:scale-105'>Vegan</span>
          </a>
          <a href="#" className='text-gray-600 hover:text-gray-900 ml-4 relative'>
            <span className='inline-block py-2 px-5 rounded-full border border-transparent hover:border-orange-500 hover:bg-white hover:text-black transition-all duration-300 transform group-hover:scale-105'>Sushi Menu</span>
          </a>
          <a href="#" className='text-gray-600 hover:text-gray-900 ml-4 relative'>
            <span className='inline-block py-3 px-5 rounded-full border border-transparent hover:border-orange-500 hover:bg-white hover:text-black transition-all duration-300 transform group-hover:scale-105'>Pizza & Fast Food</span>
          </a>
          <a href="#" className='text-gray-600 hover:text-gray-900 ml-4 relative'>
            <span className='inline-block py-2 px-5 rounded-full border border-transparent hover:border-orange-500 hover:bg-white hover:text-black transition-all duration-300 transform group-hover:scale-105'>Offers</span>
          </a>
        </nav>
      </div>

      <div className='py-6 mx-10 flex space-x-3'>
        <div className='relative flex-1 w-40'>
          <img src={g1} alt="Image 1" className='w-full h-auto' />
          <div className='absolute bottom-0 left-0 p-4 z-20  text-white'>
            <p className='text-orange-500 text-xl'>Restaurant</p>
            <p className='text-white text-3xl font-bold mb-4'>
              Chef Burgers London
            </p>
          </div>
        </div>
        <div className='relative flex-1 w-40'>
          <img src={g2} alt="Image 2" className='w-full h-auto' />
          <div className='absolute bottom-0 left-0 p-4 z-20  text-white'>
            <p className='text-orange-500 text-xl'>Restaurant</p>
            <p className='text-white text-3xl font-bold mb-4'>
            Grand Ai Cafe London
            </p>
          </div>
        </div>
        <div className='relative flex-1 w-40'>
          <img src={g1} alt="Image 3" className='w-full h-auto' />
          <div className='absolute bottom-0 left-0 p-4 z-20  text-white'>
            <p className='text-orange-500 text-xl'>Restaurant</p>
            <p className='text-white text-3xl font-bold mb-4'>
            Butterbrot Caf’e London
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
