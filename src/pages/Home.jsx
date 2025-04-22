import React from 'react'
import Banner from '../components/Home/Banner'
import Categories from '../components/Home/Categories'
import ProductBanner from '../components/Home/ProductBanner'
import PopularProduct from '../components/Home/PopularProduct'

const Home = () => {
  return (
    <>
    <Banner/>
    <Categories/>
    <ProductBanner/>
    <PopularProduct/>
    </>
  )
}

export default Home