import React, { useState } from 'react'
import { useEffect } from 'react'
import UseEffectPractice from './useEffectPractice'

const App = () => {


  // const [num, setnum] = useState(0)
  // const [num2, setnum2] = useState(100)
  // useEffect(function () {
  //   console.log("useEffect is running...");
  // }, [num2])

  return (
    <div>
      {/* <h2>value of num is {num}</h2>
      <h3>value of num2 is {num2}</h3>
      <button className='px-7 rounded-full cursor-pointer py-1 bg-red-500' onMouseOver={() => {
        setnum(num + 5)
      }} onMouseLeave={() => {
        setnum2(num2 + 10)
      }}>Click</button> */}
      <UseEffectPractice />
    </div>
  )
}

export default App
