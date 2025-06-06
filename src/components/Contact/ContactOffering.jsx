import React from 'react'
import OfferingItem from '../Home/OfferingItem'

const ContactOffering = () => {
  return (
     <>
    <div className='container'>
        <div className='hidden md:flex gap-6'>
        <OfferingItem/>
        <OfferingItem/>
        <OfferingItem/>
        <OfferingItem/>
        <OfferingItem/>
        </div>
        <div className='flex flex-col md:hidden gap-4'>
        <OfferingItem/>
        <OfferingItem/>
        <OfferingItem/>
        <OfferingItem/>
        <OfferingItem/>
        <OfferingItem/>
        </div>
    </div>
    </>
  )
}

export default ContactOffering