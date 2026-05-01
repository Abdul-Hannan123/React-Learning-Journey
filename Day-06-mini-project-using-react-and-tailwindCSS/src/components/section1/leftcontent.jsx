import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Herotext from './herotext'
import Arrow from './arrow'
const leftcontent = () => {
    return (
        <div className=' h-full flex flex-col justify-between w-1/3 '>
            <Herotext />
            <Arrow />

        </div>
    )
}

export default leftcontent
