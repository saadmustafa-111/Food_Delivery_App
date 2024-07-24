import React from 'react'
import { IoLocation } from "react-icons/io5";
import { BiColor } from "react-icons/bi";
import { MdDownloading } from "react-icons/md";
export default function Topbar1() {
  return (<>    <div className='bg-slate-100 py-4 text-sm mx-10 rounded-lg flex'  >
<p className='ml-4 font-bold'>Get Your 5% off on first order
    <a href='#' className='text-orange-500 ml-1 hover:underline'>:PROMO Code</a>
</p>
        <div className='ml-auto text-center'>
          <div className="flex items-center justify-center ml-48 mt-1">
            <IoLocation className="text-2xl mr-2" />
            <p className="text-center text-md font-bold">123 Main Street, Cityville, London, ZIP</p>
            <a href='#' className='text-orange-500 ml-1 hover:underline'>:Change Location</a>
          </div>
        </div>
        <div className='flex  items-center justify-center bg-green-600 rounded-md px-4 py-2 ml-auto'>
        <BiColor className='text-white text-2xl ' />
        <p className='ml-3 text-white'>23 items</p>
        <p className='ml-3 text-white'>GBP 78.99</p>
        <MdDownloading  className='text-white text-2xl ml-3'/>
        </div>
</div>
<div>

</div>
</>

  )
}
