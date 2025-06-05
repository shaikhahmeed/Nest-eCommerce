import React, { useEffect, useState } from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { Link } from 'react-router'
import BestSellItem from './BestSellItem'
import Slider from "react-slick";
import axios from 'axios';

const BestSells = () => {

   const [productList,setProductList]=useState([])
     
      useEffect(()=>{
     
       const api = async()=>{
       const options = {
         method: 'GET',
         url: 'https://api.escuelajs.co/api/v1/products',
         headers: {accept: 'application/json'},
     };
     
     try {
       const  res  = await axios.request(options);
       console.log(res.data)
       setProductList(res.data);
     } catch (error) {
       console.error(error);
     }
         };
         api();
       },[]);
       productList.length=3;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <section>
        <div className="container">
        <div className='pt-12 hidden md:flex justify-between items-center'>
                <h2 className='text-3xl font-bold text-primary'>Daily Best Sells</h2>
                <div>
                <ul className='flex gap-4 text-base text-primary font-light cursor-pointer'>
                 <li>
                    <button className='hover:text-brand'>Featured</button>
                 </li>
                 <li>
                    <button className='hover:text-brand'>Popular</button>
                 </li>
                 <li>
                    <button className='hover:text-brand'>New added</button>
                 </li>
                </ul>
                </div>
        </div>
        <div className='pt-12 flex flex-col md:hidden'>
                <h2 className='text-3xl font-bold text-primary'>Daily Best Sells</h2>
                <div>
                <ul className='flex pt-4 gap-4 text-base text-primary cursor-pointer'>
                 <li>
                    <button className='hover:text-brand cursor-pointer'>Featured</button>
                 </li>
                 <li>
                    <button className='hover:text-brand cursor-pointer'>Popular</button>
                 </li>
                 <li>
                    <button className='hover:text-brand cursor-pointer'>New added</button>
                 </li>
                </ul>
                </div>
        </div>
        <div className='flex mt-10 items-center gap-25'>
            <div className='hidden lg:block p-12 bg-center bg-no-repeat w-1/4' style={{backgroundImage:"url('/bestSell.png')"}}>
                <h3 className='font-bold text-4xl text-primary max-w-60'>Bring nature into your home</h3>
                <Link  className='w-fit py-2 mb-48 px-3 mt-24 bg-brand text-white flex items-center rounded-sm gap-1 cursor-pointer'>
                  Shop Now
                 <FaLongArrowAltRight/>
                 </Link>
            </div>
            <div className='hidden md:flex gap-6 w-3/5'>
               {
                  productList.map((item)=>(
                  <BestSellItem key={item.id} data={item}/>
                   ))
                }
            </div>
        </div>
        <div className='block md:hidden'>
          <Slider {...settings}>
             {
                  productList.map((item)=>(
                  <BestSellItem key={item.id} data={item}/>
                   ))
             }
          </Slider>
        </div>
        </div>
        
    </section>
  )
}

export default BestSells