import React, { useEffect, useState } from 'react'


const useEffectPractice = () => {

    const [first, setFirst] = useState(0)
    const [second, setSecond] = useState(0)

    const increaseValue = () => {
        console.log("Value of first is increasing...");
    }
    const decreaseValue = () => {
        console.log("Value of 2nd is decreasing...");
    }


    useEffect(function () {
        // console.log("yah useEffect chal rha hy...")
        decreaseValue();
    },[second])
    
    return (
        <div>
            <div className='mt-4 ml-4'>
                <h2>Value of First is {first} </h2>
                <h2>Value of 2nd is {second} </h2>
            </div>
            <div className='mt-4 ml-4'>
                <button onClick={() => {
                    setFirst(first + 1)
                }}
                    className=' px-2 py-1 rounded-2xl mr-3 cursor-pointer text-sm bg-amber-600'>Change First</button>
                <button onClick={() => {
                    setSecond(second - 1)
                }}
                    className=' px-2 py-1 rounded-2xl mr-3 cursor-pointer text-sm bg-amber-800'>Change Second</button>
            </div>
        </div>
    )
}

export default useEffectPractice
