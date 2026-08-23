import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='bg-green-700 py-3 px-14 flex items-center justify-between'>
            <h2 className='text-2xl font-bold'>logo</h2>
            <div className='flex gap-8'>
                <Link className='text-lg font-semibold' to='/'>Home</Link>
                <Link className='text-lg font-semibold' to='/about'>About</Link>
                <Link className='text-lg font-semibold' to='/contact'>Contact</Link>
                <Link className='text-lg font-semibold' to='/product'>Product</Link>
                <Link className='text-lg font-semibold' to='/branch'>Branch</Link>
            </div>
        </div>
    )
}

export default Navbar
