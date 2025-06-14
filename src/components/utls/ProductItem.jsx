import React from 'react'
import { CiShoppingCart } from 'react-icons/ci'
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router'

const ProductItem = ({data}) => {
  return (
    <section className='border rounded-2xl border-[#ECECEC] w-fit hover:border-brand transition-all'>
      <div className='px-5 py-2.5 bg-[#F74B81] w-fit rounded-tl-2xl rounded-br-3xl'>
        <p>Hot</p>
      </div>
      <div className='p-6'>
      <div className='w-full cursor-pointer'>
        <img src={data?.images[0]} alt="product" />
      </div>
      <div>
        <p className='font-medium text-xs text-secondary cursor-pointer'>Snack</p>
        <Link to={`/product_details/${data.slug}`} className='pt-2.5 font-bold text-base text-primary max-w-52 cursor-pointer hover:text-brand'>
        {data?.title}
        </Link>
        <ul className='flex gap-12 items-center pt-2.5 cursor-pointer'>
          <li>
            <p className='text-amber-400 '><FaStar/></p>
          </li>
          <li>
            <p>(4)</p>
          </li>
        </ul>
        <p className='font-medium text-sm text-secondary cursor-pointer'>By <span className='text-brand'>NestFood</span></p>
        <div className='flex justify-between items-center cursor-pointer'>
          <div className='flex gap-2.5 items-end'>
            <p className='font-bold text-lg text-brand'>$28.85</p>
            <p className='font-bold text-sm text-secondary line-through'>$32.8</p>
          </div>
          <div>
            <button className='px-5 py-2.5 flex cursor-pointer items-center font-bold text-brand gap-1.5 rounded-sm bg-[#DEF9EC]'>
              <p className='text-2xl'><CiShoppingCart/></p>
              <p className='text-sm'>Add</p>
            </button>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default ProductItem

