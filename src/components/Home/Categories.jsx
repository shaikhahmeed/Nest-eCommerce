import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import CategoryItems from './CategoryItems'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import axios from 'axios';
import { NextArrow, PrevArrow } from '../utls/SliderArrows';



const Categories = () => {
   const [categoryList,setCategoryList]=useState([])
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 5,
        nextArrow: <NextArrow customStyle="absolute -top-10 md:-top-16 right-0" />,
        prevArrow: <PrevArrow customStyle="absolute -top-10 md:-top-16 right-16"/>,
      };

      useEffect(()=>{ 
         (async()=>{
            const options = {
          method: 'GET',
          url: 'https://api.freeapi.app/api/v1/ecommerce/categories',
          params: {page: '1', limit: '10'},
          headers: {accept: 'application/json'}
      };

      try {
         const { data } =await axios.request(options);
      setCategoryList(data.data.categories);
      } catch (error) {
  console.error(error);
} 
         })()
         
      },[])

  return (
    <section>
        <div className="container">
            <div className='hidden md:flex gap-7 items-end'>
               <div>
                <h2 className='text-3xl font-bold text-primary'>Featured Categories</h2>
               </div>
               <div>
                <ul className='flex gap-4 text-base text-primary font-light'>
                 <li>
                    <Link to="/" className='hover:text-brand'>Cake & Milk</Link>
                 </li>
                 <li>
                    <Link to="/" className='hover:text-brand'>Coffes & Teas</Link>
                 </li>
                 <li>
                    <Link to="/" className='hover:text-brand'>Pet Foods</Link>
                 </li>
                 <li> 
                    <Link to="/" className='hover:text-brand'>Vegetables</Link>
                 </li>
                </ul>
               </div>
            </div>
            <div className='flex flex-col md:hidden'>
               <div>
                <h2 className='text-2xl font-bold text-primary'>Featured Categories</h2>
               </div>
               <div>
                <ul className='flex pt-5 gap-2 font-bold text-sm text-primary'>
                 <li>
                    <Link to="/" className='hover:text-brand'>Cake & Milk</Link>
                 </li>
                 <li>
                    <Link to="/" className='hover:text-brand'>Coffes & Teas</Link>
                 </li>
                 <li>
                    <Link to="/" className='hover:text-brand'>Pet Foods</Link>
                 </li>
                </ul>
                <ul className='text-sm pt-2 font-bold text-primary'>
                  <li> 
                    <Link to="/" className='hover:text-brand'>Vegetables</Link>
                 </li>
                </ul>
               </div>
            </div>
            <div className='pt-11'>
            <Slider {...settings}>
               {
                  categoryList.map((item)=>(
                     <CategoryItems key={item._id} data={item}/>
                  ))
               }
            </Slider>
            </div>
        </div>
    </section>
  )
}

export default Categories