import React from 'react'
import { FaCodeCompare } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";



const Navigation = () => {
  return (
    <>
    {/* header part */}
    <div className='container flex justify-between py-3'>
     <div>
      <ul className='flex text-xs'>
        <li className='border-r px-1'>About Us</li>
        <li className='border-r px-1'>My Account</li>
        <li className='border-r px-1'>Wishlist</li>
        <li className='px-1'>Order Tracking</li>
      </ul>
     </div>
     <div>
       <ul>
        <li className='list-disc'>
        <p className='text-xs'>Trendy 25silver jewelry, save up 35% off today
        Supper Value Deals - Save more with coupons</p>
        </li>
       </ul>
     </div>
     <div>
        <ul className='flex '>
          <li className='flex border-r px-1 text-xs'>
          <a href="#">Need help?</a>
          <p>Call Us: <span className='text-green-500'>+ 88001 900</span></p>
          </li>
          <li className='border-r px-1 text-xs'>
          English 
          </li>
          <li className='text-xs'>
            USD
          </li>
        </ul>
     </div>
    </div>
    {/* header part */}
    {/* body part */}
    <div className='container flex my-9 w'>
      <div className='flex gap-16'>
      <div>
        <img src="public/logo.png" alt="logo" />
      </div>
      <div className='border py-4 px-5 border-brand flex gap-4'>
        <div className='w-10% border-r'>
          <select className='cursor-pointer text-sm' name="" id="">
            <option value="">All Categories</option>
            <option value="">All Categories</option>
            <option value="">All Categories</option>
            <option value="">All Categories</option>
            <option value="">All Categories</option>
            <option value="">All Categories</option>
          </select>
        </div>
        <div className='w-90% flex gap-96 justify-between border border-brand text-xs'>
          <input type="text" placeholder='Search for items...' />
          <button className='cursor-pointer'><FaSearch /></button>
        </div>
      </div>
      </div>
      <div className='ml-auto'>
        <ul className='flex'>
          <li className='py-2.5 px-2.5 flex text-base'>
            <p className='relative'><FaCodeCompare/></p>
            <p className='border rounded-full bg-brand text-xs absolute top-0 right-0'>3</p>
            <button className='cursor-pointer'>Compare</button>
          </li>
          <li className='py-2.5 px-2.5 flex text-base'>
            <p><FaRegHeart /></p>
            <button className='cursor-pointer'>Wishlist</button>
          </li>
          <li className='py-2.5 px-2.5 flex text-base'>
            <p><FaCartArrowDown /> </p>
            <button className='cursor-pointer'>Cart</button>
          </li>
          <li className='py-2.5 px-2.5 flex text-base'>
            <p><FaRegUser /> </p>
            <button className='cursor-pointer'>Account</button>
          </li>
        </ul>
      </div>
    </div>
    {/* body part */}
    </>
  )
}

export default Navigation