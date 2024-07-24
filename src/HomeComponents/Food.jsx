import React from 'react';
import food1 from '../assets/Group 8 (1).png';
import food2 from '../assets/Group 8 (2).png';

export default function Food() {
  return (
    <div className='py-4 h-auto text-sm mx-10'>
      <div className='flex flex-1'>
        <div className='relative'>
            
          <img src={food1} alt="Food 1" className='ml-2' />
          <div className='absolute bottom-0 ml-8 p-4 z-20'>
            <p className='text-orange-500 text-xl'>sign up with business</p>
            <p className='text-white text-3xl font-bold  mb-4'>
              Partner With Us
            </p>
            <button className='bg-orange-500 text-white py-3 px-6 rounded-full text-lg font-semibold'>
              Get Started
            </button>
          </div>
        </div>
        <div className='relative ml-10'>
          <img src={food2} alt="Food 2" />
          <div className='absolute bottom-0 ml-8 p-4 z-20'>
          <p className='text-orange-500 text-xl'>sign up as a Rider</p>
            <p className='text-white text-3xl font-bold mb-4'>
              Ride With Us
            </p>
            <button className='bg-orange-500 text-white py-3 px-6 rounded-full text-lg font-semibold'>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
