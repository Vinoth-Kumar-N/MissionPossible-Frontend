import React from 'react'
import AddFeature from './AddFeature'
import {Link} from 'react-router-dom'
const Admin = () => {
  return (
    <>
<<<<<<< HEAD
=======
{/* Feature */}
<div className="container w-full h-[90vh] flex justify-center items-center">
  <div className="Link flex ">
>>>>>>> 66e8d10908258d835edd26210bfe9e18e4c4df79
<Link to={'/addfeature'}>
    <span class="box">
        Feature
    </span>
</Link>
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