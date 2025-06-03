import React from 'react'
import Breadcamp from '../components/utls/Breadcamp'
import { MdOutlineDelete } from 'react-icons/md'
import { IoCartOutline } from 'react-icons/io5'

const Cart = () => {
  return (
    <>
    <div className='mt-10 border py-4 border-t-[#ECECEC] border-b-[#ECECEC] '>
       <Breadcamp/>
    </div>
    <div className="container relative">
       <div>
            <div className='mt-12 w-2/3'>
            <h1 className='font-bold text-5xl text-[#253D4E]'>Your Cart</h1>
            <div className='flex justify-between'>
                <p className='pt-2.5 font-bold text-base text-[#7E7E7E]'>There are 3 products in your cart</p>
                <p className='font-bold text-base text-[#7E7E7E] flex gap-2 items-center cursor-pointer'><MdOutlineDelete/>Clear cart</p>
            </div>
        </div>
        <div className='w-2/3'>
            <div className='py-6 px-2 bg-[#ECECEC] flex justify-between mt-10'>
                <div>
                    <p className='font-bold text-base text-primary'>Product</p>
                </div>
                <div>
                    <ul className='font-bold text-base text-primary flex gap-6'>
                        <li className='cursor-pointer'>Unit Price</li>
                        <li className='cursor-pointer'>Quantity</li>
                        <li className='cursor-pointer'>Subtotal</li>
                        <li className='cursor-pointer'>Remove</li>
                    </ul>
                </div>
            </div>
            <div className='flex w-fit items-center gap-60 pt-10'>
                <div className='flex items-center'>
                    <img src="/productItem.png" alt="productItem" className='w-28 h-28'/>
                    <p>Field Roast Chao Cheese Creamy Original</p>
                </div>
                 <div className='flex items-center gap-6 '>
                     <p className='font-bold text-lg text-[#7E7E7E]'>$2.51</p>
                     <input type="number"  value={1} className='border-2 outline-0 text-center py-2 cursor-pointer border-brand w-20 rounded-xl'/>
                     <p className='font-bold text-lg text-brand'>$2.51</p>
                     <button className='cursor-pointer'><MdOutlineDelete/></button>
                 </div>
            </div>
             <div className='flex w-fit items-center gap-60 pt-10'>
                <div className='flex items-center'>
                    <img src="/productItem.png" alt="productItem" className='w-28 h-28'/>
                    <p>Field Roast Chao Cheese Creamy Original</p>
                </div>
                 <div className='flex items-center gap-6 '>
                     <p className='font-bold text-lg text-[#7E7E7E]'>$2.51</p>
                     <input type="number"  value={1} className='border-2 outline-0 text-center py-2 cursor-pointer border-brand w-20 rounded-xl'/>
                     <p className='font-bold text-lg text-brand'>$2.51</p>
                     <button className='cursor-pointer'><MdOutlineDelete/></button>
                 </div>
            </div>
             <div className='flex w-fit items-center gap-60 pt-10'>
                <div className='flex items-center'>
                    <img src="/productItem.png" alt="productItem" className='w-28 h-28'/>
                    <p>Field Roast Chao Cheese Creamy Original</p>
                </div>
                 <div className='flex items-center gap-6 '>
                     <p className='font-bold text-lg text-[#7E7E7E]'>$2.51</p>
                     <input type="number"  value={1} className='border-2 outline-0 text-center py-2 cursor-pointer border-brand w-20 rounded-xl'/>
                     <p className='font-bold text-lg text-brand'>$2.51</p>
                     <button className='cursor-pointer'><MdOutlineDelete/></button>
                 </div>
            </div>
        </div>
       </div>
       <div className='p-12 mt-30 bg-[#CED4DA] rounded-xl w-fit h-fit absolute top-10 right-16'>
         <h2 className='font-bold text-primary text-3xl pb-8'>Cart Totals</h2>
         <div className='flex gap-7 pb-6'>
            <p className='text-base text-primary font-medium'>Subtotal</p>
            <p className='text-base text-primary font-medium'>BDT 450</p>
         </div>
         <div className='flex gap-7 pb-6'>
            <p className='text-base text-primary font-medium'>Subtotal</p>
            <p className='text-base text-primary font-medium'>BDT 450</p>
         </div>
       </div>
    </div>
    </>
  )
}

export default Cart