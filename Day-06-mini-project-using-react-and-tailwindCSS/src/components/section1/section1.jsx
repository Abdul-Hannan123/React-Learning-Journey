import React from 'react'
import Navbar from './navbar'
import Page1content from './page1content'
const section1 = (props) => {

  return (
    <div className='h-screen w-full '>
      <Navbar />
      <Page1content data={props.data} />
    </div>
  )
}

export default section1
