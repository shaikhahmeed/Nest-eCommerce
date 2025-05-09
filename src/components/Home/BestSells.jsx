import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { Link } from 'react-router'
import BestSellItem from './BestSellItem'

const BestSells = () => {
  return (
    <section>
        <div className="container">
        <div className='pt-12 flex justify-between items-center'>
                <h2 className='text-3xl font-bold text-primary'>Daily Best Sells</h2>
                <div>
                <ul className='flex gap-4 text-base text-primary font-light cursor-pointer'>
                 <li>
                    <button className='hover:text-brand'>Featured</button>
                 </li>
                 <li>
                    <button className='hover:text-brand'>Popular</button>
                 </li>
                 <li>
                    <button className='hover:text-brand'>New added</button>
                 </li>
                </ul>
                </div>
        </div>
        <div className='flex gap-6 mt-10 items-center'>
            <div className='p-12 bg-center bg-no-repeat' style={{backgroundImage:"url('/bestSell.png')"}}>
                <h3 className='font-bold text-4xl text-primary max-w-60'>Bring nature into your home</h3>
                <Link  className='w-fit py-2 mb-48 px-3 mt-24 bg-brand text-white flex items-center rounded-sm gap-1 cursor-pointer'>
                  Shop Now
                 <FaLongArrowAltRight/>
                 </Link>
            </div>
            <div className='flex gap-6'>
                <BestSellItem/>
                <BestSellItem/>
                <BestSellItem/>
                <BestSellItem/>
            </div>
        </div>
        </div>
        
    </section>
  )
}

export default BestSells