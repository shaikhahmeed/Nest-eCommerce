import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { Link } from 'react-router'

const ProductBannerItems = ({bgImg,url, children}) => {
  console.log(bgImg);
  
  return (
    <div className={`py-20 pl-12 bg-[url('${bgImg}')] bg-no-repeat bg-cover w-full rounded-xl bg-center`}>
        <h2 className='font-bold text-xl md:text-2xl text-primary max-w-52'>{children}</h2>
        <Link to={url} className='w-fit py-1.5 md:py-2 px-2 md:px-3 mt-2 md:mt-4 bg-brand text-white flex items-center rounded-sm gap-1 cursor-pointer'>
           Shop Now
           <FaLongArrowAltRight/>
        </Link>
    </div>
  )
}

export default ProductBannerItems