import React from 'react'
import Hero from '../components/Hero'
import ShopCategories from '../components/ShopCategories'
import BestDealProducts from '../components/BestDealProducts'
import GetDiscount from '../components/GetDiscount'
import PopularProducts from '../components/PopularProducts'

function Home() {
  return (
    <div>
      <Hero/>
      <ShopCategories/>
      <BestDealProducts/>
      <GetDiscount/>
      <PopularProducts/>
    </div>
  )
}

export default Home
