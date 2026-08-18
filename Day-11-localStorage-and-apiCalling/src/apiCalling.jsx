import React from 'react'
import axios from 'axios'



// there are two methods to call api in react first is async function and 2nd is axios method
// this is first method to call api 

// async function seeData() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos/11')
//     const data = await response.json()
//     console.log(data);
// }


// thi is 2nd method to call api that is axios method
const seeData = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
    console.log(response.data);
}





const apiCalling = () => {
    return (
        <div>
            <button onClick={seeData}>See data</button>
        </div>
    )
}


export default apiCalling
