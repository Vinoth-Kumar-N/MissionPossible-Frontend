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
            <p className='text-gray-400 font-normal'>16 January 2024</p>
            <p className='font-normal mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dolor, officiis debitis nobis minus
            <p className='text-2xl font-semibold flex justify-end text-slate-600'>&#x2012; name</p>
            </p>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};
export default Featurescard;
