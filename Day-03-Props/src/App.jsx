import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card designation='Engineer' button='See engineer profile' img='https://images.unsplash.com/photo-1773904030888-ce95f617658b?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
      <Card designation='Doctor' button='See doctor profile' img='https://images.unsplash.com/photo-1692624571955-ad757fff0fb8?q=80&w=791&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
      <Card designation='Student' button='See student profile' img='https://plus.unsplash.com/premium_photo-1677706562692-6c4e44434420?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />

    </div>
  )
}

export default App