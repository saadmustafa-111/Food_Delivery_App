import React from 'react';
import g1 from '../../assets/Group 22.png';
import g2 from '../../assets/Group 43.png';
import g3 from '../../assets/Group 44.png';
export default function Discountimage() {
  return (
    <>
      {' '}
      <div className="py-6 mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <img src={g1} alt="" />
        </div>
        <div>
          <img src={g2} alt="" />
        </div>
        <div>
          <img src={g3} alt="" />
        </div>
      </div>
    </>
  );
}
