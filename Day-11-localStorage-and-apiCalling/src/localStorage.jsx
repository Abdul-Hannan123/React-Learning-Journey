import React from 'react'


// This function is used to clear the localStorage
// localStorage.clear();
// This function is used to clear the sessionStorage
// sessionStorage.clear();

// this is way to set value in localstorage
localStorage.setItem('Name', 'Hannan Zahid')
localStorage.setItem('Age', 18)
localStorage.setItem('City','Jhang City')


// this is way to get value in localstorage
const details = localStorage.getItem('Name');
// console.log("Your name is", details);


// this is way to remove value in localstorage
localStorage.removeItem('City')




// now talk about how to save and retrieve data from array and object 
const student = {
  'name': 'kalia',
  'age': 22
}
// We always give value in form of string so we use this built-in method to change object into string
localStorage.setItem('object', JSON.stringify(student));


// convert string into object so we use this
const data = JSON.parse(localStorage.getItem('object'));
// console.log(data);


const localstorage = () => {
  return (
    <div>
kn hy tu
    </div>
  )
}

export default localstorage
