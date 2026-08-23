import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Product from './Pages/Product'
import PageNotFound from './Pages/PageNotFound'
import Clothes from './Pages/Clothes'
import Shoes from './Pages/Shoes'
import Watches from './Pages/Watches'
import Branch from './Pages/Branch'
import MainBranch from './Pages/MainBranch'
import UseNavigate from './Components/UseNavigate'

const App = () => {
  return (
    <div >
      <Navbar />
      <UseNavigate />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product' element={<Product />}>
          <Route path='clothes' element={<Clothes />} />
          <Route path='shoes' element={<Shoes />} />
          <Route path='watches' element={<Watches />} />
        </Route>
        <Route path='/branch' element={<Branch />} />
        <Route path='/branch/:id' element={<MainBranch />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
