import React from 'react'
import OfferingItem from './OfferingItem'

const Offering = () => {
  return (
    <div className='container flex gap-6'>
        <OfferingItem/>
        <OfferingItem/>
        <OfferingItem/>
        <OfferingItem/>
        <OfferingItem/>
    </div>
  )
}

export default Offering