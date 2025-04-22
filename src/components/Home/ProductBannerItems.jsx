import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { Link } from 'react-router'

const ProductBannerItems = ({bg,url,Children}) => {
  return (
    <div className='py-20 pl-12 bg-no-repeat bg-cover w-full rounded-xl bg-center' style={{backgroundImage:`${bg}` }}>
        <h2 className='font-bold text-2xl text-primary max-w-52'>{Children}</h2>
        <Link to={url} className='w-fit py-2 px-3 mt-4 bg-brand text-white flex items-center rounded-sm gap-1 cursor-pointer'>
           Shop Now
           <FaLongArrowAltRight/>
        </Link>
    </div>
  )
}

export default ProductBannerItems