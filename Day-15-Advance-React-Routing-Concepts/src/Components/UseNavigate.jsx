import React from 'react'
import { useNavigate } from 'react-router-dom'

function UseNavigate() {


    const navigate = useNavigate();

    // function buttonClicked(){
    //     console.log("Button is clicked");
    // }
    return (
        <div className='bg-gray-700 py-3 flex gap-4'>
            <button className='px-3 py-2 bg-orange-500 rounded-2xl font-medium ml-10 cursor-pointer'
                onClick={() => {
                    navigate('/')
                }}
            >Return to Home Page</button>
            <button className='px-3 py-2 bg-orange-500 rounded-2xl font-medium  cursor-pointer'
                onClick={() => {
                    navigate(-1);
                }}
            >Back</button>
            <button className='px-3 py-2 bg-orange-500 rounded-2xl font-medium  cursor-pointer'
                onClick={() => {
                    navigate(+1);
                }}
            >Next</button>
        </div>
    )
}

export default UseNavigate
