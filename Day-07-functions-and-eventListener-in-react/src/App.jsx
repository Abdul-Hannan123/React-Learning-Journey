import React from 'react'

const App = () => {
  // this is method one to make a function and then use the name of function inside that tag
  // function buttonClick(){
  //   console.log("Button has clicked")
  // }


// now we will make a function here and call it inside input tag and also receive parameter here
function input(value){
  console.log(value)

}

// now we see how we deal with conditional statment and with event listener
const onwheelfunc=(elem)=>{
  if(elem>200){
    console.log("positive")
  }
  else{
    console.log("negative")
  }
}
  return (
    <>
<div>
  <input onChange={function (elem){
    input(elem.target.value)
  }} type="text" placeholder='Enter your name' />
</div>
<div onWheel={(elem)=>{
  onwheelfunc(elem.pageX)
}}>
  <div id='box1'></div>
  <div id='box2'></div>
  <div id='box3'></div>
</div>
    </>
  )
}

export default App
