import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ImageCard from './components/ImageCard'
import Buttons from './components/Buttons'

const App = () => {
  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)

  const buttonClicked = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=8`)
    setUserData(response.data);
    // console.log(response.data);
  }

  let displayUserData = <h3 className='text-gray-300 text-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold'>Loading...</h3>

  if (userData.length > 0) {
    displayUserData = userData.map(function (elem, idx) {
      return <div key={idx}>
        <ImageCard elem={elem}  />
      </div>
    })
  }
  useEffect(function () {
    buttonClicked();
  }, [index])


  return (
    <div
      className=' bg-black overflow-hidden h-screen p-4 text-white'>
      <div
        className='flex h-[90%] items-center justify-center flex-wrap gap-3'>
        {displayUserData}
      </div>
      < Buttons index={index} setIndex={setIndex}  setUserData={setUserData}/>
    </div >
  )
}

export default App
