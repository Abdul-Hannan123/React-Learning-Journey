import React, { useContext } from 'react'
import Nav2 from './Nav2'
import { storyData } from '../Context/ThemeContext'
import Button from './Button'


const Navbar = (props) => {
    let data = useContext(storyData)
    // console.log(data)



    return (<>


        <div className='bg-cyan-800 px-14 py-4 flex items-center justify-between'>
            <div>
                <h4 className='font-bold text-lg' >
                    {data} and Hannan</h4>
            </div>

            {/* this is example how we receive that data of children props  */}
            <h5>{props.children[0]}</h5>
            <Nav2 theme={props.theme} />
        </div>
        <Button />
    </>
    )
}

export default Navbar

