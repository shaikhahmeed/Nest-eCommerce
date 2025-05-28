import React from 'react'
import { CiStar } from 'react-icons/ci'

const ItemTwoComp = () => {
  return (
    <div className='p-8 border border-[#ECECEC]'>
        <h2 className='font-bold text-2xl text-primary'>New products</h2>
        <div className='flex gap-3 mt-8 cursor-pointer'>
            <img src="/itemTwo.png" alt="itemTwo.png" />
            <div >
                <p className='font-bold text-lg text-brand'>Chen Cardigan</p>
                <p>$99.50</p>
                <p className='text-amber-300 w-fit'><CiStar/></p>
            </div>
        </div>
        <div className='flex gap-3 mt-2 cursor-pointer'>
            <img src="/itemTwo.png" alt="itemTwo.png" />
            <div >
                <p className='font-bold text-lg text-brand'>Chen Cardigan</p>
                <p>$99.50</p>
                <p className='text-amber-300 w-fit'><CiStar/></p>
            </div>
        </div>
        <div className='flex gap-3 mt-2 cursor-pointer'>
            <img src="/itemTwo.png" alt="itemTwo.png" />
            <div >
                <p className='font-bold text-lg text-brand'>Chen Cardigan</p>
                <p>$99.50</p>
                <p className='text-amber-300 w-fit'><CiStar/></p>
            </div>
        </div>
    </div>
  )
}

export default ItemTwoComp