import React from 'react';
import { FaRegClock } from 'react-icons/fa';
import { MdKeyboardArrowLeft ,MdKeyboardArrowRight} from "react-icons/md";
import girl from '../../assets/grl.png';
export default function Reviews() {
  return (
    <>
     <div className='py-6  bg-slate-100 flex justify-between  flex-col gap-5'>
      <div className='flex justify-between '>
        <h1 className= 'flex mx-10 text-[44px] font-bold'>Customer Reviews</h1>
        <div className='flex gap-3 mx-10'>
        <MdKeyboardArrowLeft  className="bg-[#FC8A06] rounded-full p-2" size={50} />
        <MdKeyboardArrowRight className="bg-[#FC8A06] rounded-full p-2" size={50} />
        </div>
        </div>
        <div className='flex justify-between gap-5 mx-10'>
        <div className='bg-white flex gap-4'>
        <div className='p-10 bg-white border border-gray-200 rounded-md shadow-md'>
  <div className='flex items-start'>
    <img src={girl} alt='Reviewer' className='w-20 h-20 object-cover rounded-full' />
    <div className='flex flex-col justify-between ml-4 flex-grow'>
      <div className='flex items-center '>
        <div className='w-1 bg-orange-300 h-16'></div>
        <div className='ml-4 flex flex-col flex-grow'>
          <div className='flex items-center justify-between'>
            <h2 className='text-lg font-bold'>St Glx</h2>
            <div className='flex ml-4 text-yellow-500'>
              {[...Array(5)].map((_, i) => (
                <svg key={i} className='w-5 h-5 fill-current' viewBox='0 0 24 24'>
                  <path d='M12 17.27l6.18 3.73-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73-1.64 7.03z' />
                </svg>
              ))}
            </div>
          </div>
          <div className='flex justify-between items-center mt-2'>
            <p className=' text-orange-500'>St Glx</p>
            <p className='text-gray-600 flex items-center'>
              <FaRegClock className='mr-2 text-orange-500' />
              24th September, 2023
            </p>
          </div>
        </div>
      </div>
      <div className='mt-4 pl-0'>
        <p className='text-gray-700'>The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.</p>
      </div>
    </div>
  </div>
</div>
<div className='p-10 bg-white border border-gray-200 rounded-md shadow-md'>
  <div className='flex items-start'>
    <img src={girl} alt='Reviewer' className='w-20 h-20 object-cover rounded-full' />
    <div className='flex flex-col justify-between ml-4 flex-grow'>
      <div className='flex items-center'>
        <div className='w-1 bg-orange-300 h-16'></div>
        <div className='ml-4 flex flex-col flex-grow'>
          <div className='flex items-center'>
            <h2 className='text-lg font-bold'>St Glx</h2>
            <div className='flex ml-4 text-yellow-500'>
              {[...Array(5)].map((_, i) => (
                <svg key={i} className='w-5 h-5 fill-current' viewBox='0 0 24 24'>
                  <path d='M12 17.27l6.18 3.73-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73-1.64 7.03z' />
                </svg>
              ))}
            </div>
          </div>
          <div className='flex justify-between items-center mt-2'>
            <p className=' text-orange-500 '>South London</p>
            <p className='text-gray-600 flex items-center'>
              <FaRegClock className='mr-2 text-orange-500' />
              24th September, 2023
            </p>
          </div>
        </div>
      </div>
      <div className='mt-4 pl-0'>
        <p className='text-gray-700'>The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.</p>
      </div>
    </div>
  </div>
</div>
<div className='p-10 bg-white border border-gray-200 rounded-md shadow-md'>
  <div className='flex items-start'>
    <img src={girl} alt='Reviewer' className='w-20 h-20 object-cover rounded-full' />
    <div className='flex flex-col justify-between ml-4 flex-grow'>
      <div className='flex items-center'>
        <div className='w-1 bg-orange-300 h-16'></div>
        <div className='ml-4 flex flex-col flex-grow'>
          <div className='flex items-center'>
            <h2 className='text-lg font-bold'>St Glx</h2>
            <div className='flex ml-4 text-yellow-500'>
              {[...Array(5)].map((_, i) => (
                <svg key={i} className='w-5 h-5 fill-current' viewBox='0 0 24 24'>
                  <path d='M12 17.27l6.18 3.73-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73-1.64 7.03z' />
                </svg>
              ))}
            </div>
          </div>
          <div className='flex justify-between items-center mt-2'>
            <p className='text-orange-500'>South London</p>
            <p className='text-gray-600 flex items-center'>
              <FaRegClock className='mr-2 text-orange-500' />
              24th September, 2023
            </p>
          </div>
        </div>
      </div>
      <div className='mt-4 pl-0'>
        <p className='text-gray-700'>The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.</p>
      </div>
    </div>
  </div>
</div>
     </div>
     </div>
     </div>
    </>

  )
}
