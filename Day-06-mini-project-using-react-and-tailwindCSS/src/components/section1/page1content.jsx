import React from 'react'
import Leftcontent from './leftcontent'
import Rightcontent from './rightcontent'
const page1content = (props) => {
    return (
        <div className=' pb-15 flex items-center  h-[90vh] px-16'>
            <Leftcontent />
            <Rightcontent data={props.data} />
        </div>
    )
}

export default page1content
