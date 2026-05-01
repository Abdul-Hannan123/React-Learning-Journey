import React from 'react'
import Rightcardcontent from './rightcardcontent'
const rightcard = (props) => {

    return (
        <div className='h-full shrink-0 overflow-hidden relative w-64 rounded-4xl '>
            <img className="h-full w-full object-cover " src={props.img} alt="" />
           <Rightcardcontent id={props.id} button={props.button} intro={props.intro} color={props.color} />
        </div>
    )
}

export default rightcard
