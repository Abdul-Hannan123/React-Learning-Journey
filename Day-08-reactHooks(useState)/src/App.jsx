import React, { useState } from 'react'
import Counterapp from './counterapp'
import AdvanceUseState from './advanceUseState'

// let a = 20;

// function buttonClick() {
//   console.log(a);
//   a = a + 10;
//   console.log(a);
// }

const App = () => {

  const [a, seta] = useState(10)
  const [name, setname] = useState("Ali")
  function buttonClick() {
    seta(20);
    setname("Hannan");
  }
  return (
    <>
      <div className='intro'>
        <h1>value of a is {a}</h1>
        <h1>Your name is {name}</h1>
        <button onClick={buttonClick}>click me</button>
      </div>
      <div>
        <Counterapp />
        <AdvanceUseState />
      </div>
    </>
  )
}

export default App






