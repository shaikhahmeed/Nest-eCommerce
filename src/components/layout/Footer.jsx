import React from 'react'
import { FiPhoneCall } from 'react-icons/fi'

const Footer = () => {
  return (
    <div className='container mt-9 mb-10'>
      <div className='hidden md:flex border-t border-t-[#BCE3C9] justify-between'>
         <div className='text-sm font-medium text-[#7E7E7E] pt-9'>
        <p>© 2024, Nest - HTML Ecommerce Template</p>
        <p>All rights reserved</p>
      </div>
      <div className='flex gap-8 pt-9'>
        <div className='flex items-center gap-4'>
        <div>
          <p className='text-3xl text-[#7E7E7E]'><FiPhoneCall/></p>
        </div>
        <div>
          <p className='font-bold text-2xl text-brand'>1900 - 6666</p>
          <p className='text-xs font-medium text-[#7E7E7E]'>Working 8:00 - 22:00</p>
        </div>
        </div>
        <div className='flex items-center gap-4'>
        <div>
          <p className='text-3xl text-[#7E7E7E]'><FiPhoneCall/></p>
        </div>
        <div>
          <p className='font-bold text-2xl text-brand'>1900 - 8888</p>
          <p className='text-xs font-medium text-[#7E7E7E]'>24 / 7 Support Center</p>
        </div>
         </div>
      </div>
      <div className='pt-9'>
        <p className='font-bold test-base text-primary'>Follow Us</p>
        <p className='text-sm font-medium text-[#7E7E7E]'>Up to 15% discount on your first subscribe</p>
      </div>
      <div className='block md:hidden'>
        <div className='text-sm font-medium text-[#7E7E7E] pt-9'>
        <p>© 2024, Nest - HTML Ecommerce Template</p>
        <p>All rights reserved</p>
      </div>
      </div>
      </div>
      <div className='block md:hidden border-t border-t-[#BCE3C9]'>
        <div className='text-sm font-medium text-[#7E7E7E] pt-9'>
        <p>© 2024, Nest - HTML Ecommerce Template</p>
        <p>All rights reserved</p>
      </div>
      </div>
    </div>
  )
}

export default Footer