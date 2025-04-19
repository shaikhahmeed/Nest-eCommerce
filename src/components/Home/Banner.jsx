import React from 'react'
import { FaRegPaperPlane } from 'react-icons/fa6'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";


const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: dots => (
      <div style={{position:'absolute',bottom:'15px',width:'100%'}}>
        <ul className='flex justify-center gap-2 text-[0px]' > {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div className='w-4 h-4 rounded-4xl border-2 cursor-pointer'>
        {i + 1}
      </div>
    ) 
  };
  return (
    <section className='pt-7 pb-10'>
      <div className='container banner_slider'>
      <Slider {...settings}>
        <div>
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
        <div>
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
        <div>
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
      </Slider>
      </div>
    </section>
  )
}

export default Banner