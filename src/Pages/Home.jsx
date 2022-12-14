import React from 'react'
import Categories from '../Component/Categories'
import Announcement from '../Component/Announcement'
import Footer from '../Component/Footer'

import Navbar from '../Component/Navbar'
import Newsletter from '../Component/Newsletter'
import Products from '../Component/Products'
import Slider from '../Component/Slider'



const Home = () => {
  return (
    <div>
      <Announcement/>
      <Navbar/>
      <Slider/>
      <Categories/>
      <Products/>
      <Newsletter/>
      <Footer/>

    </div>
  )
}

export default Home