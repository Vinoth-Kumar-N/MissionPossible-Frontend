import React from 'react'
import AddFeature from './AddFeature'
import {Link} from 'react-router-dom'
const Admin = () => {
  return (
    <>
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
</>
  )
}

export default Admin