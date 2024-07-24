import React from 'react'

import g1 from '../assets/Group 17.png'
import g2 from '../assets/Group 16.png'
import g3 from '../assets/Group 18.png'
import g4 from '../assets/Group 19.png'
import g5 from '../assets/Group 20.png'
import g6 from '../assets/Group 21.png'
import text from '../assets/Popular Restaurants.png'

export default function Restaurant() {
  return (
  <>
      <div className='py-4 h-auto text-sm mx-10'>
        <img src={text} alt="" className='mb-4' />
        <div className='flex space-x-3 py-6'>
          <img src={g1} alt="" className='flex-1 w-48' />
          <img src={g2} alt="" className='flex-1 w-48' />
          <img src={g3} alt="" className='flex-1 w-48' />
          <img src={g4} alt="" className='flex-1 w-48' />
          <img src={g5} alt="" className='flex-1 w-48' />
          <img src={g6} alt="" className='flex-1 w-48' />
        </div>
      </div>
    </>
  )
}
