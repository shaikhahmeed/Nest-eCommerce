import React from 'react'
import { Link } from 'react-router'
import ProductItem from '../utls/ProductItem'

const PopularProduct = () => {
  return (
    <section>
        <div className="container">
            <div className='pt-12 flex justify-between items-center'>
                <h2 className='text-3xl font-bold text-primary'>Popular Products</h2>
                <div>
                <ul className='flex gap-4 text-base text-primary font-light'>
                 <li>
                    <Link to="/" className='hover:text-brand'>All</Link>
                 </li>
                 <li>
                    <Link to="/" className='hover:text-brand'>Milks & Dairies</Link>
                 </li>
                 <li>
                    <Link to="/" className='hover:text-brand'>Coffes & Teas</Link>
                 </li>
                 <li> 
                    <Link to="/" className='hover:text-brand'>Pet Foods </Link>
                 </li>
                 <li> 
                    <Link to="/" className='hover:text-brand'>Meats</Link>
                 </li>
                 <li> 
                    <Link to="/" className='hover:text-brand'>Vegetables</Link>
                 </li>
                 <li> 
                    <Link to="/" className='hover:text-brand'>Fruits</Link>
                 </li>
                </ul>
                </div>
            </div>
            <div className='pt-11 pb-12'>
                <ProductItem/>
            </div>
        </div>
    </section>
  )
}

export default PopularProduct




