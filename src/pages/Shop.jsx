import React from 'react'
import Banner from '../components/Shop/Banner'
import Products from '../components/Shop/Products'
import OnlineOffering from '../components/Shop/OnlineOffering'
import Footer from '../components/Home/Footer'
import ItemOne from '../components/Shop/ItemOne'
import ItemTwo from '../components/Shop/ItemTwo'
import ShopDeals from '../components/Shop/ShopDeals'
import ItemThree from '../components/Shop/ItemThree'

const Shop = () => {
  return (
   <>
   <Banner/>
   <Products/>
   <ItemOne/>
   <ItemTwo/>
   <ItemThree/>
   <ShopDeals/>
   <OnlineOffering/>
   <Footer/>
   </> 
  )
}

export default Shop