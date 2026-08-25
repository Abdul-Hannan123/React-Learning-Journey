import React, { useContext } from 'react'
import { themeData } from '../Context/PageTheme'



const Button = () => {

    let [pageTheme, setpageTheme] = useContext(themeData)

function themeChanged(){
    setpageTheme('dark')
}


  return (
    <div>
      <button onClick={themeChanged}
      className='bg-red-800 px-3 mt-4 ml-4 rounded cursor-pointer py-2 '>Click to change Theme</button>
    </div>
  )
}

export default Button
