import axios from 'axios'
import React, { useEffect } from 'react'
const url='https://api.waqi.info/feed/tirupur/?token=06d9e59247ee800a9f8bcb8fd56802ca54a41dbc';
const FetchData= async()=>
{
   const res=await axios.get(url);
   if(res.status===200)
   {
      alert('Air data fetched');
   }
   else
   {
      alert('Failed to fetch data');
   }
   const obj={
     aqi:res.data.aqi,
     name:res.city.name
   }
   alert(obj);
}

const Air = () => {
    useEffect(()=>FetchData(),[]);
  return (
    <div>
       <div className=''>
            
       </div>
    </div>
  )
}

export default Air