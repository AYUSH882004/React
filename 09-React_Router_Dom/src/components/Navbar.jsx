import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-green-400  text-white'>
    <div className='flex item-center justify-between py-8 px-18  text-5xl font-bold '>
      <h2>Sheriyans</h2>
      <div className='flex items-center gap-6 text-4xl'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/product'>Product</Link>
        <Link to='/contact'>Contact</Link>
      </div>
    </div>
    </div>
  )
}

export default Navbar
