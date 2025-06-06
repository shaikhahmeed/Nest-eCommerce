import React from 'react'
import { Link } from 'react-router'

const CategoryItems = ({data}) => {
  return (
    <Link to="/" className='py-6 px-5 bg-[#F2FCE4] w-fit text-center hover:shadow-2xl cursor-pointer transition-all inline-block'> 
        <img src="/categoryItem.png" alt="categoryItem"/>
        <h3 className='text-base font-bold text-primary'>{data?.name}</h3>
        <p className='text-base font-medium text-[#7E7E7E]'>26 items</p>
    </Link>
  )
}

export default CategoryItems