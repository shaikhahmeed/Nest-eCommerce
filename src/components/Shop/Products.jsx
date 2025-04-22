import React from 'react'
import { FiBox } from 'react-icons/fi'

const Products = () => {
  return (
    <section>
        <div className="container">
            <div>
              <div className='flex justify-between'>
                <p className='text-primary text-lg'>We found <span className='text-brand'>29</span> items for you!</p>
                <div className='flex p-2 border-2 border-primary rounded-2xl items-center gap-0.5 text-primary text-lg cursor-pointer'>
                  <FiBox/>
                  <p>Show:</p>
                  <select name="" id="">
                    <option value="">50</option>
                    <option value="">60</option>
                    <option value="">70</option>
                    <option value="">100</option>
                  </select>
                </div>
              </div>
            </div>
        </div>
    </section>
  )
}
export default Products