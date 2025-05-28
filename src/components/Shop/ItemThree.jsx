import React from 'react'
import ProductItem from '../utls/ProductItem'
import ItemThreeComp from './ItemThreeComp'

const ItemThree = () => {
  return (
    <div className="container">
        <div className='flex gap-8'>
            <div className='flex mt-14'>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
            </div>
            <div className='mt-12'>
                <ItemThreeComp/>
            </div>
        </div>
    </div>
  )
}

export default ItemThree