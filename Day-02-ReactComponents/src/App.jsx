import React from 'react'
import Img from './components/img'
import Card from './components/Card'
import Button from './components/button'


const App = () => {
  return (
    <>
      <div className="card">
        <Img />
        <Card />
        <Button />
      </div>
      <div className="card">
        <Img />
        <Card />
        <Button />
      </div>
    </>
  )
}

export default App