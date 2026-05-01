import React from 'react'
import Section1 from './components/section1/section1'
import Section2 from './components/section2/section2'

// Now creating an array to pass data and remember data always flow from top to bottom
const cardData = [
  {
    img: "https://images.unsplash.com/photo-1771054244002-4445dc1da2eb?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    intro: "Artificial Intelligence (AI) is a branch of computer science dedicated to creating systems capable of performing tasks ",
    button: "Underbanked",
    color: "red"
  },
  {
    img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    intro: "What if you could [Desirable Outcome] in half the time? That’s what we’re exploring today you could ",
    button: "Underserved",
    color: "blue"
  },
  {
    img: "https://images.unsplash.com/photo-1498758536662-35b82cd15e29?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    intro: "Creating a compelling introduction involves hooking your audience immediately, stating who you are.",
    button: "underSatisfie",
    color: "lightseagreen"
  },
  {
    img: "https://images.unsplash.com/photo-1551509165-818b4e48f00f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    intro: "What if you could [Desirable Outcome] in half the time? That’s what we’re exploring today you could ",
    button: "Underserved",
    color: "orange"
  },
  {
    img: "https://images.unsplash.com/photo-1549396091-193dfefb6155?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    intro: "What if you could [Desirable Outcome] in half the time? That’s what we’re exploring today you could ",
    button: "Underserved",
    color:"aqua"
  },
  {
    img: "https://images.unsplash.com/photo-1543269664-56d93c1b41a6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    intro: "What if you could [Desirable Outcome] in half the time? That’s what we’re exploring today you could ",
    button: "Underserved",
    color: "brown"
  },
]
const App = () => {
  return (
    <div>
      <Section1 data={cardData} />
      <Section2 />
    </div>
  )
}

export default App
