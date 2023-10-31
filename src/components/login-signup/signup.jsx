import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import images from '../../constant/images';

import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
     <div className='hidden sm:block' style={{ backgroundColor: '#236784' }}>
     <h1 className='text-4xl font-bold text-center text-white' style={{marginTop:'10rem' }}>Find Peace in Every Step: Track Your Loved Ones with Ease</h1>
      <img className='w-full h-5z object-cover' src={images.imagecenter} style={{marginTop:'5rem' }} />
    </div>
      <div
        className='relative'
        style={{
          backgroundImage: `url(${images.login}), url(${images.login1})`,
          backgroundSize: '380px 380px, 380px 380px',
          backgroundRepeat: 'no-repeat, no-repeat',
          backgroundPosition: 'right top, left bottom',
        }}
      >
       <div
            className='bg-transparent flex flex-col justify-center items-center'
            style={{
              backdropFilter: 'blur(10px)', 
              backgroundColor: 'rgba(255, 255, 255, 0.5)', 
              borderRadius: '5%',
              height: '70%', 
              width: '70%', 
              margin: '18% 15%',
              display: 'flex', // Apply flexbox layout
              justifyContent: 'center', // Center horizontally
              alignItems: 'center', // Center vertically
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.02)', // Add a shadow
            }}
>
          <div className='flex flex-col justify-center'>
          <form className='max-w-[400px] w-full mx-auto bg-transparent p-4' >
          <h2 className='text-4xl font-bold text-center py-6'>Sign Up</h2>

          <div className='flex py-2 gap-2'>
            <input 
              className='border-black border-opacity-40 p-2 rounded-full pl-10 border w-full bg-transparent'
              type="text"
              placeholder='Firstname'
   
             
            />
            <input
              className='border-black border-opacity-40 p-2 rounded-full pl-10 border w-full bg-transparent'
              type="text"
              placeholder='Lastname'

            />
          </div>


          <div className='flex py-2 gap-2'>
           
            <input
              className='border-black border-opacity-40 p-2 rounded-full pl-10 border w-full bg-transparent'
              type="text"
              placeholder='Phone Number'
            />

          </div>

          <div className='flex flex-col py-2'>
            <input
              className='border-black border-opacity-40 p-2 rounded-full pl-10 border w-full bg-transparent'
              type="email"
              placeholder='Email'

   
            />
          </div>

          <div className='flex flex-col py-2'>
            <input
              className='border-black border-opacity-40 p-2 rounded-full pl-10 border w-full bg-transparent'
              type="password"
              placeholder='Password'


            />
          </div>

          <div className='flex flex-col py-2'>
            <input
              className='border-black border-opacity-40 p-2 rounded-full pl-10 border w-full bg-transparent'
              type="password"
              placeholder='Retype Password'


            />
          </div>

          <button className='rounded-full border w-full my-5 py-2 bg-black hover:bg-gray-500 text-white'>Sign Up</button>
        </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
