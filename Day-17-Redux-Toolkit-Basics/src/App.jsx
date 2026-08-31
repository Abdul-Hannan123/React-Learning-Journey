import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, IncreaseByValue, DecreaseByValue } from './ReduxWork/Features/CounterSlice'

const App = () => {

  const dispatch = useDispatch()

  // yahan pr state poory redux store ko denote kr rha hy
  const count = useSelector((state) => state.counter.value)

  const [num, setnum] = useState('')

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => {
        dispatch(increment())
      }}>
        Increment
      </button>

      <button onClick={() => {
        dispatch(decrement())
      }}>
        Decrement
      </button>

      <input type="number" value={num} placeholder='Enter Value'
        onChange={(e) => {
          setnum(e.target.value);
        }} />
      <button onClick={() => {
        dispatch(IncreaseByValue(Number(num)))
      }}>
        Increase By Value
      </button>
      <button onClick={() => {
        dispatch(DecreaseByValue(Number(num)))
      }}>
        Decrease By Value
      </button>
    </div>
  )
}

export default App