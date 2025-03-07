import React from 'react'

const Navigation = () => {
  return (
    <>
    {/* header part */}
    <div className='flex justify-between py-3'>
     <div>
      <ul className='flex'>
        <li className='border-r px-1'>About Us</li>
        <li className='border-r px-1'>My Account</li>
        <li className='border-r px-1'>Wishlist</li>
        <li>Order Tracking</li>
      </ul>
     </div>
     <div>
       <ul className='list-disc'>
        <p >Trendy 25silver jewelry, save up 35% off today
        Supper Value Deals - Save more with coupons</p>
       </ul>
     </div>
     <div>
        <ul className='flex gap-4'>
          <li className='flex border-r'>
          <a href="#">Need help?</a>
          <p>Call Us: <span className='text-green-500'>+ 88001 900</span></p>
          </li>
          <li className='border-r'>
          English 
          </li>
          <li>
            USD
          </li>
        </ul>
     </div>
    </div>
    {/* header part */}
    </>
  )
}

export default Navigation