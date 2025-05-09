import React, { useState } from 'react'
import { FaBarsStaggered, FaCodeCompare } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { LuBoxes } from "react-icons/lu";
import { IoIosArrowDropdown, IoMdCloseCircleOutline } from "react-icons/io";
import { FaHeadphones } from "react-icons/fa6";
import { Link } from 'react-router';
import { MdKeyboardArrowDown } from 'react-icons/md';




const Navigation = () => {
  const[show,setShow]=useState(false);
  const[sideBar,setSideBar]=useState(false);
  return (
    <>
    {/* header part */}
    <header className='relative'>
    <div className='container hidden xl:flex justify-between py-3'>
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
    <div className='container items-center flex my-9'>
      <div className='flex gap-16'>
      <div className='flex gap-8'>
        <button onClick={()=>setSideBar(true)} className='block md:hidden cursor-pointer'>
          <FaBarsStaggered/>
        </button>
        <Link><img src="public/logo.png" alt="logo" className='w-34 md:w-auto'/></Link>
      </div>
      <div className='border py-4 px-5 border-brand hidden lg:flex gap-4'>
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
        <div className='w-90% flex gap-24 lg:gap-60 xl:gap-96 justify-between border border-brand text-xs'>
          <input type="text" placeholder='Search for items...' className='outline-0' />
          <button className='cursor-pointer'><FaSearch /></button>
        </div>
      </div>
      </div>
      <div className='ml-auto'>
        <ul className='flex'>
          <li className='py-2.5 px-2.5 flex text-2xl lg:text-base relative'>
            <Link><FaCartArrowDown /></Link>
            <p className='border border-brand rounded-full px-1 py-0.5 bg-brand text-xs absolute -top-1.5 right-0.5 lg:right-8'>3</p>
            <button className='cursor-pointer text-primary'><span className='hidden lg:block'>Cart</span></button>
          </li>
          <li className='py-2.5 px-2.5 flex text-2xl lg:text-base relative'>
            <Link><FaRegHeart /></Link>
            <p className='border border-brand rounded-full px-1 py-0.5 bg-brand text-xs absolute -top-1.5 right-0.5 lg:right-14'>6</p>                         
            <button className='cursor-pointer text-primary'><span className='hidden lg:block'>Wishlist</span></button>
          </li>
          <li className='py-2.5 px-2.5 hidden lg:flex text-base relative'>
            <Link><FaCodeCompare/></Link>
            <p className='border border-brand rounded-full px-1 py-0.5 bg-brand text-xs absolute -top-1.5 right-16'>2</p>
            <button className='cursor-pointer text-primary'>Compare</button>
          </li>
          <li className='py-2.5 px-2.5 hidden lg:flex text-base'>
            <Link to="/login"><FaRegUser /></Link>
            <Link to="/login" className='cursor-pointer text-primary'>Account</Link>
          </li>
        </ul>
      </div>
    </div>
    {/* body part */}
    {/* footer Mobile View */}
    <nav className={`w-full h-screen bg-[#0000003c] absolute top-0 left-0 z-99 transition-all ${sideBar?"translate-x-0 ": "-translate-x-full "} `}>
    <div className="bg-white w-4/5 h-full overflow-y-auto">
    <div>
        <div className='flex justify-between items-center p-3 border-b border-[#ececec]'>
          <Link><img src="public/logo.png" alt="logo" className='w-30'/></Link>
          <button onClick={()=>setSideBar(false)} className='text-2xl text-brand cursor-pointer'><IoMdCloseCircleOutline/></button>
        </div> 
        <div className='m-4'>
           <div className='w-90% flex gap-6 justify-between border border-[#ececec] bg-[#ececec] rounded-xs'>
            <input type="text" placeholder='Search for items...' className='outline-0 p-3' />
            <button className='w-full p-3 cursor-pointer hover:bg-brand transition'><FaSearch /></button>
           </div>
           <div className='mt-6'>
              <ul className='flex flex-col text-base text-primary font-bold'>
                <li className='flex justify-between items-center cursor-pointer p-3 border-b border-[#ececec]'>
                  <Link className='hover:text-brand transition '>Deals</Link>
                  <p><MdKeyboardArrowDown/></p>
                </li>
                <li className='flex justify-between items-center cursor-pointer p-3 border-b border-[#ececec]'>
                  <Link to="/home"  className='hover:text-brand transition'>Home </Link>
                  <p><MdKeyboardArrowDown/></p>
                </li>
                <li className='flex justify-between items-center cursor-pointer p-3 border-b border-[#ececec]'>
                  <Link className='hover:text-brand transition '>About</Link>
                  <p><MdKeyboardArrowDown/></p>
                </li>
                <li className='flex justify-between items-center cursor-pointer p-3 border-b border-[#ececec]'>
                  <Link to="/shop" className='hover:text-brand transition'>Shop</Link>
                  <p><MdKeyboardArrowDown/></p>
                </li>
                <li className='flex justify-between items-center cursor-pointer p-3 border-b border-[#ececec]'>
                  <Link className='hover:text-brand transition'>Mega menu</Link>
                  <p><MdKeyboardArrowDown/></p>
                </li>
                <li className='flex justify-between items-center cursor-pointer p-3 border-b border-[#ececec]'>
                  <Link className='hover:text-brand transition'>Blog</Link>
                  <p><MdKeyboardArrowDown/></p>
                </li>
                <li className='flex justify-between items-center cursor-pointer p-3 border-b border-[#ececec]'>
                  <Link className='hover:text-brand transition'>Pages </Link>
                  <p><MdKeyboardArrowDown/></p>
                </li>
                <li className='flex justify-between items-center cursor-pointer p-3 border-b border-[#ececec]'>
                  <Link className='hover:text-brand transition'>Contact</Link>
                  <p><MdKeyboardArrowDown/></p>
                </li>
              </ul>
           </div>
        </div>
    </div>
    </div>
    </nav>
    {/* footer Mobile View */}
    {/* footer part Desktop view*/}
    <nav className='hidden lg:block'>
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
    </header>
    {/* footer part Desktop view*/}
    </>
  )
}

export default Navigation