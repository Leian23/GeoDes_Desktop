import React, { useEffect, useState } from 'react';
import images from '../../constant/images'


function LocateTrack() {
 

  return (

    <div className='relative mt-3 bottom-50 left-20 right-0 bg-white flex items-center' style={{ zIndex: 1500, width: 400, height: 62, borderRadius: 10, boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }}>
    <img className='ml-5 w-5 h-76' src={images.arrow} alt={images.arrow} />
    
    <p className='ml-4 text-lg'>User Location</p>
    <div className='absolute ml-80 bottom-50 bg-slate-400' style={{ zIndex: 1500, width: 2, height: 40, borderRadius: 10}}></div>
    <button
  className="relative bg-transparent flex items-center p-2 rounded"
  style={{
    zIndex: 1500,
    borderRadius: 10,
    border: 'none',
    cursor: 'pointer',
    marginLeft: 160,
  }}
>
  <img
    className="w-12 h-76"
    src={images.locate}
    alt={images.locate}
  />
</button>

    </div>


  );
}

export default LocateTrack;
