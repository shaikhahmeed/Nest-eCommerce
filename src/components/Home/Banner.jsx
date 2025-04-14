import React from 'react'
import { FaRegPaperPlane } from 'react-icons/fa6'

const Banner = () => {
  return (
    <section className='pt-7'>
        <div className="container">
            <div className='p-24 rounded-4xl bg-cover bg-no-repeat' style={{ backgroundImage: "url('/banner.png')"}}>
            <h1 className='text-7xl text-primary font-bold max-w-2xl'>Fresh Vegetables
            Big discount</h1>
            <p className='text-3xl text-secondary font-medium pt-10'>Save up to 50% off on your first order</p>
            <div className='max-w-md  mt-16 flex items-center gap-1 rounded-full  bg-white'>
                <FaRegPaperPlane className='text-3xl pl-1.5'/>
                <input type="e-mail" placeholder=' Your emaill address' className='outline-0 w-full rounded-full text-lg'/>
                <button className='px-10 py-5 bg-brand rounded-full cursor-pointer text-white'>Subscribe</button>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Banner