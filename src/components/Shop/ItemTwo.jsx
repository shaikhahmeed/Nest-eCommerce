import React from 'react'
import ProductItem from '../utls/ProductItem'
import ItemTwoComp from './ItemTwoComp'

const ItemTwo = () => {
  return (
    <div className="container">
        <div className='flex gap-4'>
            <div className='flex mt-14'>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
            </div>
            <div className='mt-0.5'>
                <ItemTwoComp/>
            </div>
        </div>
    </div>
  )
}

export default ItemTwo