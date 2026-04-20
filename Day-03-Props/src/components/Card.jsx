import React from 'react'

const Card = (props) => {
    return (
        <div className="Card">
            <img src={props.img} />
            <h1>{props.designation}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus atque accusantium hic!</p>
            <button>{props.button}</button>
        </div>
    )
}

export default Card
