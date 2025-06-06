import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router'
import ShopDealsItems from './ShopDealsItems'

const ShopDeals = () => {
  return (
    <section className='mb-36'>
        <div className="container">
        <div className='flex gap-7 items-end justify-between mt-8'>
               <div>
                <h2 className='text-3xl font-bold text-primary'>Deals Of The Day</h2>
               </div>
               <div>
                <ul className='hidden md:flex gap-4 text-base text-primary font-light'>
                 <li>
                    <Link to="/" className='hover:text-brand flex items-center'>
                    <p>All deals</p>
                    <p className='text-2xl'><MdKeyboardArrowRight/></p>
                    </Link>
                 </li>
                </ul>
               </div>
        </div>
        <div className='hidden md:flex'>
            <ShopDealsItems/>
            <ShopDealsItems/>
            <ShopDealsItems/>
            <ShopDealsItems/>    
        </div>
        <div className='flex md:hidden flex-col mb-60'>
            <ShopDealsItems/>
        </div>
        </div>
    </section>
  )
}

export default ShopDeals