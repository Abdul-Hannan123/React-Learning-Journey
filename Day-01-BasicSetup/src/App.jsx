import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Hello world</h1>
        <h2>Today I create a basic folder of react with vite</h2>
      </div>
      <div>
        <p>This is first para</p>
        <p>This is second para</p>
      </div>
    </>
  )
}

export default App
