import React from 'react'
import { useParams } from 'react-router-dom'

const MainBranch = () => {

    const params = useParams()
    // console.log(params.id)

    return (
        <div className=' w-full h-[calc(100vh-150px)] flex items-center justify-center'>
            <h1 className=' text-4xl' >{params.id} Branch</h1>
        </div>
    )
}

export default MainBranch
