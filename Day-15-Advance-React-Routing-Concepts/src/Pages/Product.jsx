import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
    return (
        <div className='relative w-full h-[calc(100vh-150px)] flex items-center justify-center'>
            <div className='flex absolute top-6 left-130 gap-10  '>
                <Link to='/product/clothes'>Clothes</Link>
                <Link to='/product/shoes'>Shoes</Link>
                <Link to='/product/watches'>Watches</Link>

            </div>
            {/* <h1 className=' text-4xl' >Product Page</h1> */}
            <Outlet />
        </div>
    )
}

export default Product
