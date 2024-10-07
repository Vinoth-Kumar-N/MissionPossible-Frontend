import React from 'react';
import { User2 } from 'lucide-react';
import { Link } from 'react-router-dom';
const Featurescard = () => {
  return (
          <Link to={'/city'}>
    <div className='w-[300px] h-auto  rounded-xl bg-[#f8f8f8] text-black'>
      <div className='relative'>
        <div className='w-full h-[45%]'>
          <img 
            src="https://wallpapertag.com/wallpaper/full/d/3/c/968676-hi-res-background-images-2651x1813-retina.jpg" 
            className='w-full h-full rounded-lg object-cover' 
            alt="background" 
          />
        </div>
        <div className='w-full h-full flex flex-col p-4'>
          <div className='mb-4'>
            <p className='text-2xl font-semibold'>Coimbatore</p>
            <p className='text-gray-400 font-normal'>16 January 2024</p>
            <p className='font-normal mt-2'>
            Coimbatore, often referred to as the "Manchester of South India," is a bustling city located in the state of Tamil Nadu. Nestled near the Western Ghats, Coimbatore enjoys a pleasant climate and is surrounded by scenic landscapes, including waterfalls, hills, and lush greenery.
            </p>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};
export default Featurescard;
