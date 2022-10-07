import React from 'react'
import {Link, Outlet} from 'react-router-dom'

import './Routs.css'


  const Layout = () => {
  return (
    <>
        <header className='it'>
            <Link to='/' className='a1'>Home</Link>
            <Link to='/posts' className='a2'>Blog</Link>
            <Link to='/about' className='a2'>About</Link>
        </header>
        <main className='container'>
            <Outlet/>
        </main>
        
        
    </>

  )
}
export {Layout}