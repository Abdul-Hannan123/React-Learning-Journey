import React, { useState } from 'react'
import { X } from 'lucide-react';

const App = () => {
  const [Heading, setHeading] = useState('')
  const [Details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const formsubmit = (e) => {
    e.preventDefault();
    // console.log("Your form has been submitted successfully!");
    setHeading('');
    setDetails('');

    const copyTask = [...task];
    copyTask.push({ Heading, Details });
    setTask(copyTask);
    // console.log(task);

    // console.log(Heading);
    // console.log(Details);
  }
  const deleteButton = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
    // console.log(idx);
  }


  return (
    <div className="lg:flex min-h-screen lg:h-screen lg:overflow-hidden bg-linear-to-br from-slate-950 via-teal-950 to-slate-900">
      <form onSubmit={(e) => {
        formsubmit(e);
      }}
        className='flex gap-4 lg:w-1/2 p-10 flex-col items-start'>

        <h1 className='text-4xl  font-bold'>Add Notes</h1>
        <p className="mb-2 text-sm text-slate-400">
          Capture your thoughts and keep them organized.
        </p>
        <input type="text" placeholder='Enter notes heading' required
          className='px-5 w-full font-medium py-2 border-2 outline-none rounded'
          value={Heading}
          onChange={(e) => {
            setHeading(e.target.value)

          }} />

        <textarea placeholder='Write details here' required
          className='px-5 font-medium w-full h-62 py-2 flex items-start flex-row border-2 outline-none rounded'
          value={Details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        >
        </textarea>

        <button className='bg-white active:scale-90 font-medium w-full outline-none rounded text-black px-5 py-2 cursor-pointer'>Add Note
        </button>
      </form>

      {/*  this is right section */}
      <div className='lg:w-1/2 min-h-screen lg:border-l border-white/10 py-10 px-7 bg-white/5 backdrop-blur-sm'>
        <h1 className='text-4xl font-bold '>Recent Notes</h1>
        <div id='hide-scrollBar' className='w-full flex flex-wrap items-start justify-start gap-5 mt-5 h-[90%] overflow-auto '>
          {task.map(function (elem, idx) {
            // console.log(elem);
            // console.log(idx);
            return <div key={idx} className=' relative flex justify-between items-start flex-col h-60 w-45 rounded-xl pt-8 pb-12 px-4 shadow-lg shadow-black/20 text-black bg-cover bg-[url(https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png)]'>
              <div id='hide-scrollBar' className='overflow-auto w-full '>
                <h3 className=' leading-tight text-xl font-bold '> {elem.Heading} </h3>
                <p className='mt-2 leading-tight font-medium text-gray-700 '> {elem.Details} </p>
              </div>
              <button onClick={() => {
                deleteButton(idx)
              }} className='absolute top-50 w-[82%] cursor-pointer transition active:scale-95 bg-red-500 py-1.5 text-xs rounded font-bold text-white'>Delete</button>
            </div>
          })}

        </div>

      </div>
    </div>
  )
}

export default App
