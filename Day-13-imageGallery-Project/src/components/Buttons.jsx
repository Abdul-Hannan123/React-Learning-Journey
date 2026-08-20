import React from 'react'

const Buttons = (props) => {
    return (
        <div className='flex justify-center gap-6 items-center p-4'>
            <button disabled={props.index === 1}
                style={{
                    cursor: props.index == 1 ? 'not-allowed' : 'pointer',
                    opacity: props.index == 1 ? 0.5 : 1,
                }}
                onClick={() => {
                    if (props.index > 1) {
                        props.setIndex(props.index - 1)
                    }
                    props.setUserData([])
                }}
                className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold'>Prev</button>
                
            <h2 className='text-gray-400'>page {props.index}</h2>
            <button onClick={() => {
                props.setIndex(props.index + 1)
                props.setUserData([])
            }}
                className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold'>Next</button>
        </div>
    )
}

export default Buttons
