import React from 'react'
import { FaStar } from 'react-icons/fa'

const HighlightItem = ({Children}) => {
  return (
    <div>
        <h2 className='font-bold text-2xl text-primary'>{Children}</h2>
        <div className='w-20 h-0.5 bg-[#BCE3C9] mt-4'>
        </div>
        <div className='mt-12 flex flex-col gap-5 mb-14]'>
            <div className='flex gap-3'>
            <div>
                <img src="/highlight.png" alt="" className='w-full'/>
            </div>
            <div className='bg-white rounded-xl'>
                           <h3 className='font-bold text-base text-primary max-w-52'>Chobani Complete Vanilla Greek
                           Yogurt</h3>
                           <ul className='flex gap-12 items-center'>
                             <li>
                               <p className='text-amber-400 '><FaStar/></p>
                             </li>
                             <li>
                               <p>(4.0)</p>
                             </li>
                           </ul>
                           <p className='font-medium text-sm text-secondary'>By <span className='text-brand'>NestFood</span></p>
                           <div className='flex justify-between items-center'>
                             <div className='flex gap-2.5 items-end'>
                               <p className='font-bold text-lg text-brand'>$28.85</p>
                               <p className='font-bold text-sm text-secondary line-through'>$32.8</p>
                             </div>
                             <div>
                             </div>
                           </div>
            </div>
            </div>
            <div className='flex gap-3'>
            <div>
                <img src="/highlight.png" alt="" className='w-full'/>
            </div>
            <div className='bg-white rounded-xl'>
                           <h3 className='font-bold text-base text-primary max-w-52'>Chobani Complete Vanilla Greek
                           Yogurt</h3>
                           <ul className='flex gap-12 items-center'>
                             <li>
                               <p className='text-amber-400 '><FaStar/></p>
                             </li>
                             <li>
                               <p>(4.0)</p>
                             </li>
                           </ul>
                           <p className='font-medium text-sm text-secondary'>By <span className='text-brand'>NestFood</span></p>
                           <div className='flex justify-between items-center'>
                             <div className='flex gap-2.5 items-end'>
                               <p className='font-bold text-lg text-brand'>$28.85</p>
                               <p className='font-bold text-sm text-secondary line-through'>$32.8</p>
                             </div>
                             <div>
                             </div>
                           </div>
            </div>
            </div>
            <div className='flex gap-3'>
            <div>
                <img src="/highlight.png" alt="" className='w-full'/>
            </div>
            <div className='bg-white rounded-xl'>
                           <h3 className='font-bold text-base text-primary max-w-52'>Chobani Complete Vanilla Greek
                           Yogurt</h3>
                           <ul className='flex gap-12 items-center'>
                             <li>
                               <p className='text-amber-400 '><FaStar/></p>
                             </li>
                             <li>
                               <p>(4.0)</p>
                             </li>
                           </ul>
                           <p className='font-medium text-sm text-secondary'>By <span className='text-brand'>NestFood</span></p>
                           <div className='flex justify-between items-center'>
                             <div className='flex gap-2.5 items-end'>
                               <p className='font-bold text-lg text-brand'>$28.85</p>
                               <p className='font-bold text-sm text-secondary line-through'>$32.8</p>
                             </div>
                             <div>
                             </div>
                           </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default HighlightItem