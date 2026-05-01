import React from 'react'

const rightcardcontent = (props) => {
    return (
        <div className=' p-6 absolute top-0 left-0 h-full w-full flex flex-col justify-between'>
            <div>
                <h1 className='font-medium text-xl bg-white padding-2 rounded-full h-12 w-12 flex items-center justify-center'>{props.id + 1}</h1>
            </div>
            <div>
                <p className='text-lg leading-normal text-white'>{props.intro}</p>
                <div className='flex justify-between mt-4'>
                    <button style={{ backgroundColor: props.color }} className='text-white font-medium px-7 py-1 rounded-full'>{props.button}</button>
                    <button style={{ backgroundColor: props.color }} className='bg-blue-600 text-white font-medium px-4 py-3 rounded-full'><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>

        </div>
    )
}

export default rightcardcontent
