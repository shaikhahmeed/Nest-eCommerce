import React, { useState } from 'react'
import { FaCodeCompare } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { LuBoxes } from "react-icons/lu";
import { IoIosArrowDropdown } from "react-icons/io";
import { FaHeadphones } from "react-icons/fa6";
import { Link } from 'react-router';




const Navigation = () => {
  const[show,setShow]=useState(false)
  return (
    <>
    {/* header part */}
    <div className='container hidden md:flex justify-between py-3'>
     <div>
      <ul className='flex text-xs text-primary'>
        <li className='border-r text-xs px-1'>About Us</li>
        <li className='border-r text-xs px-1'>My Account</li>
        <li className='border-r text-xs px-1'>Wishlist</li>
        <li className='px-1'>Order Tracking</li>
      </ul>
     </div>
     <div>
       <ul>
        <li className='list-disc'>
        <p className='text-xs text-primary'>Trendy 25silver jewelry, save up 35% off today
        Supper Value Deals - Save more with coupons</p>
        </li>
       </ul>
     </div>
     <div>
        <ul className='flex '>
          <li className='flex border-r px-1 text-xs'>
          <a href="#" className='text-primary text-xs'>Need help?</a>
          <p className='text-xs text-primary'>Call Us: <span className='text-green-500'>+ 88001 900</span></p>
          </li>
          <li className='border-r px-1 text-xs text-primary'>
          English 
          </li>
          <li className='text-xs text-primary'>
            USD
          </li>
        </ul>
     </div>
    </div>
    {/* header part */}
    {/* body part */}
    <div className='container flex my-9'>
      <div className='flex gap-16'>
      <div>
        <img src="public/logo.png" alt="logo" className='cursor-pointer'/>
      </div>
      <div className='border py-4 px-5 border-brand flex gap-4'>
        <div className='w-10% border-r border-amber-200'>
          <select className='cursor-pointer text-sm font-bold' name="" id="">
            <option value="">All Categories</option>
            <option value="">All Categories</option>
            <option value="">All Categories</option>
            <option value="">All Categories</option>
            <option value="">All Categories</option>
            <option value="">All Categories</option>
          </select>
        </div>
        <div className='w-90% flex gap-96 justify-between border border-brand text-xs'>
          <input type="text" placeholder='Search for items...' className='outline-0' />
          <button className='cursor-pointer'><FaSearch /></button>
        </div>
      </div>
      </div>
      <div className='ml-auto'>
        <ul className='flex'>
          <li className='py-2.5 px-2.5 flex text-base relative'>
            <Link><FaCodeCompare/></Link>
            <p className='border border-brand rounded-full px-1 py-0.5 bg-brand text-xs absolute -top-1.5 right-16'>3</p>
            <button className='cursor-pointer text-primary'>Compare</button>
          </li>
          <li className='py-2.5 px-2.5 flex text-base relative'>
            <Link><FaRegHeart /></Link>
            <p className='border border-brand rounded-full px-1 py-0.5 bg-brand text-xs absolute -top-1.5 right-14'>6</p>
            <button className='cursor-pointer text-primary'>Wishlist</button>
          </li>
          <li className='py-2.5 px-2.5 flex text-base relative'>
            <Link><FaCartArrowDown /></Link>
            <p className='border border-brand rounded-full px-1 py-0.5 bg-brand text-xs absolute -top-1.5 right-8'>2</p>
            <button className='cursor-pointer text-primary'>Cart</button>
          </li>
          <li className='py-2.5 px-2.5 flex text-base'>
            <Link><FaRegUser /></Link>
            <button className='cursor-pointer text-primary'>Account</button>
          </li>
        </ul>
      </div>
    </div>
    {/* body part */}
    {/* footer part */}
    <nav>
      <div className='container flex items-center gap-9'>
      <div className='px-3 py-5 border border-brand rounded-sm flex gap-2 items-center bg-brand text-white relative z-50'>
        <p className='text-lg cursor-pointer'><LuBoxes /></p>
        <h3
        onClick={()=>setShow(!show)}
        className='text-lg cursor-pointer'>Browse All Categories
        </h3>
        {
          show && (
        <div className='w-md py-10 px-9 rounded-md absolute bg-amber-50 top-28 left-0 border-2 border-brand grid grid-cols-2 gap-6'>
          <div className='flex items-center gap-2 px-3 py-2 shadow cursor-pointer'>
            <img src="public/category-1.svg" alt="category-1" className='w-6'/>
            <p className='text-primary text-sm font-bold'>Milk and Dairies</p>
          </div>
          <div className='flex items-center gap-2 px-3 py-2 shadow cursor-pointer'>
            <img src="public/category-1.svg" alt="category-1" className='w-6'/>
            <p className='text-primary text-sm font-bold'>Wines and Drinks</p>
          </div>
          <div className='flex items-center gap-2 px-3 py-2 shadow cursor-pointer'>
            <img src="public/category-1.svg" alt="category-1" className='w-6'/>
            <p className='text-primary text-sm font-bold'>Milk and Dairies</p>
          </div>
          <div className='flex items-center gap-2 px-3 py-2 shadow cursor-pointer'>
            <img src="public/category-1.svg" alt="category-1" className='w-6'/>
            <p className='text-primary text-sm font-bold'>Milk and Dairies</p>
          </div>
          <div className='flex items-center gap-2 px-3 py-2 shadow cursor-pointer'>
            <img src="public/category-1.svg" alt="category-1" className='w-6'/>
            <p className='text-primary text-sm font-bold'>Milk and Dairies</p>
          </div>
          <div className='flex items-center gap-2 px-3 py-2 shadow cursor-pointer'>
            <img src="public/category-1.svg" alt="category-1" className='w-6'/>
            <p className='text-primary text-sm font-bold'>Milk and Dairies</p>
          </div>
          <div className='flex items-center gap-2 px-3 py-2 shadow cursor-pointer'>
            <img src="public/category-1.svg" alt="category-1" className='w-6'/>
            <p className='text-primary text-sm font-bold'>Milk and Dairies</p>
          </div>
          <div className='flex items-center gap-2 px-3 py-2 shadow cursor-pointer'>
            <img src="public/category-1.svg" alt="category-1" className='w-6'/>
            <p className='text-primary text-sm font-bold'>Milk and Dairies</p>
          </div>
          <div className='flex items-center gap-2 px-3 py-2 shadow cursor-pointer'>
            <img src="public/category-1.svg" alt="category-1" className='w-6'/>
            <p className='text-primary text-sm font-bold'>Milk and Dairies</p>
          </div>
          <div className='flex items-center gap-2 px-3 py-2 shadow cursor-pointer'>
            <img src="public/category-1.svg" alt="category-1" className='w-6'/>
            <p className='text-primary text-sm font-bold'>Milk and Dairies</p>
          </div>
        </div>
          )
        } 
        <p className='cursor-pointer text-lg'><IoIosArrowDropdown /></p>
      </div>
      <div>
        <ul className='flex gap-8 text-lg text-primary font-'>
          <li>
            <Link className='hover:text-brand transition'>Deals</Link>
          </li>
          <li>
            <Link to="/home"  className='hover:text-brand transition'>Home </Link>
          </li>
          <li>
            <Link className='hover:text-brand transition'>About</Link>
          </li>
          <li>
            <Link to="/shop" className='hover:text-brand transition'>Shop</Link>
          </li>
          <li>
            <Link className='hover:text-brand transition'>Mega menu</Link>
          </li>
          <li>
            <Link className='hover:text-brand transition'>Blog</Link>
          </li>
          <li>
            <Link className='hover:text-brand transition'>Pages </Link>
          </li>
          <li>
            <Link className='hover:text-brand transition'>Contact</Link>
          </li>
        </ul>
      </div>
      <div className='flex ml-auto gap-3 items-center'>
        <div>
         <p className='text-4xl'>< FaHeadphones/></p>
        </div>
        <div>
          <h2 className='text-2xl font-bold text-brand'>1900 - 888</h2>
          <p className='text-xs text-primary'>24/7 Support Center</p>
        </div>
      </div>
      </div>
    </nav>
    {/* footer part */}
    </>
  )
}

export default Navigation