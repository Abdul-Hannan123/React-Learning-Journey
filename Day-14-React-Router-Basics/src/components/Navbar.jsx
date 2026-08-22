import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <div className='flex items-center justify-between bg-amber-700 px-10 pr-20 py-4'>
            <div>
                Logo
            </div>
            <div className='flex gap-10'>
                <Link to='/' >Home</Link>
                <Link to='/about' >About</Link>
                <Link to='/contact'>Contact</Link>
            </div>
        </div>
    )
}

export default Navbar
