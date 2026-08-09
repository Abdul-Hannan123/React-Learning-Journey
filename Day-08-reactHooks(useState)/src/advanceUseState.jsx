import React, { useState } from 'react'

const advanceUseState = () => {

  const [num, setnum] = useState({ name: "Hannan", age: 18 })
  const button = () => {
    const newNum = { ...num };
    newNum.name = "Rahul";
    newNum.age = 15;
    setnum(newNum);
    // console.log(num.name);
    // console.log(newNum.name);
  }

  //_______________________________________________________________________________________
  // this is the way to add or remove element in the array using usestate hook
  // const [array, setarray] = useState([12, 14, 16, 18]);
  // const button = () => {
  //   const newarray = [...array];
  //   newarray.unshift(23, 33);
  //   setarray(newarray);
  //   console.log(array);
  //   console.log(newarray);
  // }
  //________________________________________________________________________________________
  //this is the small or efiicient method to do some change in original subject or array
  // const button = () => {
  //   setnum(prev => ({ ...prev, age: 50 }))
  // }
  //_________________________________________________________________________________________
  return (

    < div >
      <h1 className='heading'>Your name is {num.name} and your age is {num.age} </h1>
      <button className='btn3' onClick={button}>Update values</button>
    </div >
  )
}

export default advanceUseState