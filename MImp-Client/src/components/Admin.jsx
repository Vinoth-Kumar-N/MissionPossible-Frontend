import React from 'react'
import AddFeature from './AddFeature'
import {Link} from 'react-router-dom'
const Admin = () => {
  return (
    <>
{/* Feature */}
<Link to={'/addfeature'}>
    <span class="box">
        Feature
    </span>
</Link>
{/* City Details */}
<button>
    <span class="box">
        City Add
    </span>
</button>
</>
  )
}

export default Admin