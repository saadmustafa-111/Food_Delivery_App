import React from 'react';
import { FaApple, FaTiktok, FaFacebook, FaTwitter, FaSnapchat } from 'react-icons/fa';
import { BiLogoPlayStore } from 'react-icons/bi';
import orderlogo from '../assets/LOGO 2.png';

export default function Footer() {
  return (
    <>
      <div className='py-4 mt-20 bg-gray-200 w-full h-auto text-sm'>
        <div className='container ml-10'>
          <div className='flex flex-row justify-between'>
            <div className='ml-1 mt-10 flex flex-col items-start'>
              <div className='flex flex-row items-center mb-4'>
                <img src={orderlogo} alt="" className='mb-3' />
              </div>
              <div className='flex flex-row space-x-4'>
                <button className='bg-black text-white px-4 py-2 flex items-center rounded-lg'>
                  <div className='flex flex-cols items-center'>
                    <FaApple className='w-8 h-8 inline-block mr-2' />
                  </div>
                  <div className="text-center">
                    <p>Download on the</p>
                    <h3 className='text-xl font-bold'>App Store</h3>
                  </div>
                </button>
                <button className='bg-black text-white px-4 py-2 flex items-center rounded-lg'>
                  <div className='flex flex-cols items-center'>
                    <BiLogoPlayStore className='w-12 h-12 inline-block mr-2' />
                  </div>
                  <div className='text-left'>
                    <p>GET IT ON</p>
                    <h3 className='text-xl font-bold'>Google Play</h3>
                  </div>
                </button>
              </div>
              <p className='text-center mt-4 text-lg '>Company # 490039-445, Registered with <br />House of companies.</p>
            </div>
            <div className='mt-10 flex flex-col items-center'>
              <p className='text-lg font-bold mb-4'>Get Exclusive Deals in your Inbox</p>
              <div className='w-full max-w-md'>
              <div className="relative flex items-center">
  <input
    type="text"
    placeholder="Your Email@gmail.com"
    className="py-3 px-6 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 w-full pr-16" // Adjust padding-right to fit the button
  />
  <button className="absolute right-0 top-0 bottom-0 bg-orange-500 text-white py-1 px-6 rounded-full">
    <p>Search</p>
  </button>
</div>
                <p className='ml-3 mt-2'>we won't spam, read our <span><a href="#" className='underline'>email policy</a></span></p>
              </div>
              <div className='mt-10 flex justify-center space-x-6'>
                <FaFacebook className='w-8 h-8 text-black cursor-pointer' />
                <FaTwitter className='w-8 h-8 text-black cursor-pointer' />
                <FaTiktok className='w-8 h-8 text-black cursor-pointer' />
                <FaSnapchat className='w-8 h-8 text-black cursor-pointer' />
              </div>
            </div>
            <div className='mt-10 flex flex-col items-start'>
              <p className='text-lg font-bold'>Legal Pages</p>
              <a href="#" className='underline my-2'>Terms and Conditions</a>
              <a href="#" className='underline my-2'>Privacy</a>
              <a href="#" className='underline my-2'>Cookies</a>
              <a href="#" className='underline my-2'>Modern Slavery Statement</a>
            </div>
            <div className='mt-10 mr-10 flex flex-col items-start'>
              <p className='text-lg font-bold'>Important Links</p>
              <a href="#" className='underline my-2'>Get Help</a>
              <a href="#" className='underline my-2'>Add Your Restaurant</a>
              <a href="#" className='underline my-2'>Signup to Deliver</a>
              <a href="#" className='underline my-2'>Create a Business Account</a>
            </div>
          </div>
        </div>
      </div>
      <div className='py-4 bg-slate-950 h-auto text-sm border-t border-gray-700'>
        <div className='container mx-auto flex justify-between items-center'>
          <div className='text-white text-sm'>
            <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
          </div>
          <div className='flex space-x-4'>
            <a href="#" className='text-white hover:underline'>Privacy Policy</a>
            <a href="#" className='text-white hover:underline'>Terms</a>
            <a href="#" className='text-white hover:underline'>Pricing</a>
            <a href="#" className='text-white hover:underline'>Do not sell or share my personal information</a>
          </div>
        </div>
      </div>
    </>
  );
}
