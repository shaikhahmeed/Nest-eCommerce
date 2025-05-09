import React from 'react'
import Banner from '../components/Home/Banner'
import Categories from '../components/Home/Categories'
import ProductBanner from '../components/Home/ProductBanner'
import PopularProduct from '../components/Home/PopularProduct'
import BestSells from '../components/Home/BestSells'
import Deals from '../components/Home/Deals'
import Highlight from '../components/Home/Highlight'

const Home = () => {
  return (
    <>
    <Banner/>
    <Categories/>
    <ProductBanner/>
    <PopularProduct/>
    <BestSells/>
    <Deals/>
    <Highlight/>
    </>
  )
}

export default Home