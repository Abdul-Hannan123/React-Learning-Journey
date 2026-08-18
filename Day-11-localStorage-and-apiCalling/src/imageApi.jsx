import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const imageApi = () => {
    const [data, setData] = useState([])
    const seeData = async () => {
        const response = await axios.get('https://picsum.photos/v2/list');
        setData(response.data);
        console.log(response.data)
    }


    return (
        <div>
            <div className='flex justify-center items-center sticky top-0 z-50 bg-black h-12 w-full  py-3 pt-10'>
                <button className='bg-emerald-600 hover:bg-emerald-700' id='button' onClick={seeData}>Click to See Images</button>
            </div>
            <div id='image-display' className=''>
                {data.map(function (elem, idx) {
                    return <div className='relative'>
                        <h6 className="absolute top-3 left-3 bg-white text-black rounded-full w-5 h-5 flex items-center justify-center text-sm">
                            {idx + 1}
                        </h6>
                        <h5 className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-4 py-2 rounded-md">
                            {elem.author}
                        </h5>
                        <img src={elem.download_url} alt="image not found" />
                    </div>
                })}
            </div>
        </div>
    )
}

export default imageApi
