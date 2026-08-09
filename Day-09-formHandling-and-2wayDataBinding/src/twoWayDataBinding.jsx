import React from 'react'
import { useState } from 'react';

const twoWayDataBinding = () => {
  const [elem, setelem] = useState('')
  const formSubmitter = (e) => {
    e.preventDefault();
    console.log("Your form has submitted by", elem);
    setelem('');
  }
  return (
    <>
      <div>
        <h1>Two-Way-Data-Binding</h1>
      </div>
      <form onSubmit={(e) => {
        formSubmitter(e);
      }}>
        <input value={elem} onChange={(e) => {
          setelem(e.target.value);
        }} className='input1' type="text" placeholder='Enter some text' />
        <button className='btn1'>submit</button>
      </form>

    </>
  )
}

export default twoWayDataBinding
