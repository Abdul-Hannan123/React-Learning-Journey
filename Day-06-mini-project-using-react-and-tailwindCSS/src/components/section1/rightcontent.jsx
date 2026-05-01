import React from 'react'
import Rightcard from './rightcard'
const rightcontent = (props) => {
  
  return (
    <div id='right' className='h-full  pl-6 pb-2 overflow-x-auto  w-3/4 flex items-center flex-row gap-4'>
  {/* we pass this id as a parameter  */}
      {props.data.map(function(object,idx){
        return <Rightcard id={idx} img={object.img} button={object.button} intro={object.intro} color={object.color} />
      })}


    </div>
  )
}

export default rightcontent
