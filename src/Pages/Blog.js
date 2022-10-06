import React from 'react'
import {Link} from 'react-router-dom'

  const Blog = () => {
  return (
    <div>
      <h1>Blog</h1>
      <h2>Hangry shark. Go <Link to='/' className='a'>Home</Link> </h2> 
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-OTDcLLR7bJQ95xHq6Xrz1ux6KSqJobRoWA&usqp=CAU' alt='Blog'/>
    </div>
  )
}
export  {Blog}
