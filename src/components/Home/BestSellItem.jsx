import React from 'react'
import { IoCartOutline } from 'react-icons/io5'
import { MdOutlineStarPurple500 } from 'react-icons/md'
import { Link } from 'react-router'

const BestSellItem = ({data}) => {
  return (
    <div className='w-full  border border-[#ECECEC] hover:border-brand transition-all rounded-3xl cursor-pointer'>
        <p className='py-2 px-5 bg-brand text-white font-medium text-xs w-fit rounded-tl-3xl rounded-br-4xl'>Save 35%</p>
        <img className='w-fit' src={data?.images[0]} alt="product" />
        <div className='px-5'>
        <p className='font-medium text-xs text-secondary mt-1'>Hodo Foods</p>
        <Link className='font-bold text-base text-primary max-w-48 mt-2.5'>{data?.title}</Link>
        <p className='text-amber-300 mt-2.5 text-base'><MdOutlineStarPurple500/></p>
        <div className='flex gap-2.5 items-end'>
            <p className='font-bold text-lg text-brand'>$238.85</p>
            <p className='font-bold text-sm text-secondary line-through'>$32.8</p>
        </div>
        <p className='font-medium text-xs text-primary mt-2.5'>Sold: 90/120</p>
        <button className='py-2.5 px-14 w-full rounded-xs cursor-pointer flex gap-4 bg-brand mt-8 text-white items-center'>
            <p><IoCartOutline/></p>
            <p>Add to cart</p>
        </button>
        </div>
    </div>
  )
}

export default BestSellItem