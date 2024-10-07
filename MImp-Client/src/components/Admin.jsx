import React from 'react'
import AddFeature from './AddFeature'
import {Link} from 'react-router-dom'
const Admin = () => {
  return (
    <>
{/* Feature */}
<div className="container w-full h-[90vh] flex justify-center items-center">
  <div className="Link flex ">
<Link to={'/addfeature'}>
    <span class="box">
        Feature
    </span>
</Link>
{/* City Details */}
<Link to={'/addcity'}>
    <span class="box">
        City Add
    </span>
</Link>
</div>
</div>
</>
  )
}

export default Admin