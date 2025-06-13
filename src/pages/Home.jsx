import React from 'react'
import Hero from '../components/Hero'
import ShopCategories from '../components/ShopCategories'
import BestDealProducts from '../components/BestDealProducts'
import GetDiscount from '../components/GetDiscount'
import PopularProducts from '../components/PopularProducts'
import HeroTow from '../components/HeroTow'
import Brand from '../components/Brand'
import BestDeals from '../components/BestDeals'
import CashBack from '../components/CashBack'
import Footers from '../components/Footers'
import TrendingProduct from '../components/TrendingProduct'


function Home() {
  return (
    <div>
      <Hero/>
      <ShopCategories/>
      <BestDealProducts/>
      <GetDiscount/>
      <PopularProducts/>
      <HeroTow/>
      <Brand/>
      <BestDeals/>
      <CashBack/>
      <TrendingProduct/>
      <Footers/>
    </div>
  )
}

export default Home
