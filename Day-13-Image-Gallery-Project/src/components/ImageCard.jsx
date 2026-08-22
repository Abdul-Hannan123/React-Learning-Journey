import React from 'react'

const ImageCard = (props) => {
    return (
        <div>
            <a href={props.elem.url} target='_blank'>
                <div className='h-56 w-75 overflow-hidden rounded-xl'>
                    <img
                        className='h-full w-full object-cover '
                        src={props.elem.download_url} alt="no preview available" />
                </div>
                <h2 className='mt-2 font-bold text-md'>{props.elem.author}</h2>
            </a>
        </div>
    )
}

export default ImageCard
