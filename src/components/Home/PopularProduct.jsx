import React from 'react'
import ProductItem from '../utls/ProductItem'

const PopularProduct = () => {
  return (
    <section>
        <div className="container">
            <div className='pt-12 hidden md:flex justify-between items-center'>
                <h2 className='text-3xl font-bold text-primary'>Popular Products</h2>
                <div>
                <ul className='flex gap-4 text-base text-primary font-light cursor-pointer'>
                 <li>
                    <button className='hover:text-brand'>All</button>
                 </li>
                 <li>
                    <button className='hover:text-brand'>Milks & Dairies</button>
                 </li>
                 <li>
                    <button className='hover:text-brand'>Coffes & Teas</button>
                 </li>
                 <li> 
                    <button className='hover:text-brand'>Pet Foods </button>
                 </li>
                 <li> 
                    <button className='hover:text-brand'>Meats</button>
                 </li>
                 <li> 
                    <button className='hover:text-brand'>Vegetables</button>
                 </li>
                 <li> 
                    <button className='hover:text-brand'>Fruits</button>
                 </li>
                </ul>
                </div>
            </div>
            <div className='pt-12 flex flex-col md:hidden'>
                <h2 className='text-2xl font-bold text-primary'>Popular Products</h2>
                <div>
                <ul className='flex pt-6 gap-3 font-bold text-sm text-primary'>
                 <li>
                    <button className='hover:text-brand cursor-pointer'>All</button>
                 </li>
                 <li>
                    <button className='hover:text-brand cursor-pointer'>Coffes & Teas</button>
                 </li>
                 <li> 
                    <button className='hover:text-brand cursor-pointer'>Pet Foods </button>
                 </li>
                </ul>
                <ul className='flex pt-2 gap-3 text-sm font-bold text-primary'>
                  <li> 
                    <button className='hover:text-brand cursor-pointer'>Meats</button>
                 </li>
                 <li> 
                    <button className='hover:text-brand cursor-pointer'>Vegetables</button>
                 </li>
                 <li> 
                    <button className='hover:text-brand cursor-pointer'>Fruits</button>
                 </li>
                 <li>
                    <button className='hover:text-brand cursor-pointer'>Milks & Dairies</button>
                 </li>
                </ul>
                </div>
            </div>
            <div className='hidden md:grid pt-11 pb-12  grid-cols-5 gap-6'>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
            </div>
            <div className='flex flex-col gap-5 md:hidden pt-11 pb-12'>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
            </div>
        </div>
    </section>
  )
}

export default PopularProduct




