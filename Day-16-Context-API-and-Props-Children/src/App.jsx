import React, { useState } from 'react'
import Navbar from './Components/Navbar'

const App = () => {
  const [theme, setTheme] = useState('Light')
  return (
    <div>

{/* this is example fo passing children_props */}
      <Navbar theme={theme} >
        <h3>Yah first children hy </h3>
        <h3>Yah 2nd children hy </h3>
      </Navbar>

    </div>
  )
}

export default App
