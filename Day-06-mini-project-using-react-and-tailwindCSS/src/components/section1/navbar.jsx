import React from 'react'

const navbar = () => {
    return (
        <div className='flex items-center justify-between px-16 py-6'>
            <h4 className='px-6 py-2 uppercase bg-black text-white rounded-full text-sm'>Target Audience</h4>
            <button className='px-8 py-2 bg-gray-200 uppercase text-sm tracking-wider rounded-full cursor-pointer'>Digital Banking Platform</button>
        </div>
    )
}

export default navbar
