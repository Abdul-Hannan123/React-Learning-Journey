import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ChangeTheme } from './Redux/Slices/ThemeSlice'
const App = () => {

  const theme = useSelector((state) => state.changeTheme.value)
  const dispatch = useDispatch()

  let bgColor;
  let textColor;

  if (theme == 'Light') {
    bgColor = 'bg-white';
    textColor = 'text-black';
  } else {
    bgColor = 'bg-black';
    textColor = 'text-white';
  }

  return (
    <div className={`w-full h-screen ${bgColor} ${textColor}`}>
      <div className='w-full h-screen flex items-center justify-center flex-col' >

        <h1 className='mb-4 border px-4 py-2 rounded-2xl text-xl'>
          Theme : {theme}
        </h1>
        <h1 className='mb-4 font-bold text-lg'>This is First page of our Website</h1>
        <button className='px-5 py-2 bg-cyan-500 rounded-full cursor-pointer text-sm active:scale-90'
          onClick={() => {
            dispatch(ChangeTheme())
          }}>


          Change Theme
        </button>

      </div>

    </div>
  )
}

export default App
