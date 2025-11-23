import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Product from './components/Product'
import Contact from './components/Contact'
import Men from './components/product_components/Men'
import Kid from './components/product_components/Kid'
import Women from './components/product_components/Women'
import Notfound404 from './components/notfound404'
import UserAbout from './components/UserAbout'

const App = () => {
  return (
    <div className='bg-black h-screen'>
      <Routes>

        {/* ⭐ All normal pages inside Layout */}
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/about/:id' element={<UserAbout />} />
          <Route path='/contact' element={<Contact />} />

          <Route path='/product' element={<Product />}>
            <Route path='mens' element={<Men />} />
            <Route path='womens' element={<Women />} />
            <Route path='kids' element={<Kid />} />
          </Route>
        </Route>

        {/* ⭐ Notfound page WITHOUT navbar */}
        <Route path='*' element={<Notfound404 />} />
      </Routes>
    </div>
  )
}

export default App
