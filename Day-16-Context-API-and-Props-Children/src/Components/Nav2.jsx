import React, { useContext } from 'react'
import { storyData } from '../Context/ThemeContext'
import { themeData } from '../Context/PageTheme'



const Nav2 = (props) => {
    let [pageTheme] = useContext(themeData)


    let data = useContext(storyData)
    return (
        <div className='flex gap-12  '>
            <h4 className='font-bold text-lg' >Home</h4>
            <h4 className='font-bold text-lg' > {data} About</h4>
            <h4 className='font-bold text-lg' >Contact</h4>
            <h4 className='font-bold text-lg' >Services</h4>
            <h4 className='font-bold text-lg' >{pageTheme}</h4>

        </div>
    )
}

export default Nav2
