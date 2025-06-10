import React from 'react'
import Hero from '../components/Hero'
import ShopCategories from '../components/ShopCategories'
import BestDealProducts from '../components/BestDealProducts'
import GetDiscount from '../components/GetDiscount'
import PopularProducts from '../components/PopularProducts'
import HeroTow from '../components/HeroTow'

function Home() {
  return (
    <div>
      <Hero/>
      <ShopCategories/>
      <BestDealProducts/>
      <GetDiscount/>
      <PopularProducts/>
      <HeroTow/>
    </div>
  )
}

export default Home
