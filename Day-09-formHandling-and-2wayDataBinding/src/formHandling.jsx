import React from 'react'

const formHandling = () => {

    const formSubmitter = (e) => {
        e.preventDefault();
        console.log("Your form has submitted");
    }


    return (
        <div>
            <>
                <div>
                    <h1>Form Handling</h1>
                </div>
                <form onSubmit={(e) => {
                    formSubmitter(e);
                }}>
                    <input className='input1' type="text" placeholder='Enter some text' />
                    <button className='btn1'>submit</button>
                </form>

            </>
        </div>
    )
}

export default formHandling
