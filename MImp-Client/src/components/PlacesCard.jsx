import React, { useState, useEffect } from 'react';

const PlacesCard = () => {
  const [placeslist, setplaceslist] = useState([]);
  useEffect(() => {
    const url = "https://67038440bd7c8c1ccd41bc90.mockapi.io/places";
    axios.get(url)
      .then(response => {
        setplaceslist(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the project data!', error);
      });
  }, []);
  return (
    <>
        <div className='w-[30%] h-[50%] shadow-md flex flex-col items-center'>
          <img className='w-[100%] h-[50%]' src={placeslist.image} alt='project'/>
          <div className='flex flex-col items-center'>
            <h1 className='text-2xl font-bold'>{placeslist.name}</h1>
            <p className='text-lg'>{placeslist.description}</p>
            <p className='text-lg'>{placeslist.location}</p>
          </div>
        </div>
    </>

  )
}
export default PlacesCard