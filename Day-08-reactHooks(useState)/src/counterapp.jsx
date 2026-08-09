import React, { useState } from 'react'

const counterapp = () => {
  const [val, setval] = useState(0)

  function increaseval() {
    setval(val + 1);
  }
  function decreaseval() {
    setval(val - 1);
  }
  return (
    <div className='card'>
      <h1 className='count-value'>Counter value is {val}</h1>
      <div className='parent'>
        <button className='btn' onClick={increaseval}>Increase</button>
        <button className='btn' onClick={decreaseval}>Decrease</button>
      </div>
    </div>
  )
}

export default counterapp
