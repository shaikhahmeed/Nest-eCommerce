import React from 'react'
import { Link } from 'react-router'
import CategoryItems from './CategoryItems'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className='cursor-pointer' onClick={onClick}><FaArrowRightLong/></div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className='cursor-pointer' onClick={onClick}>
            <FaArrowLeftLong/>
        </div>
    );
  }

const Categories = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };

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
                <CategoryItems/>
                <CategoryItems/>
                <CategoryItems/>
                <CategoryItems/>
                <CategoryItems/>
                <CategoryItems/>
                <CategoryItems/>
                <CategoryItems/>
                <CategoryItems/>
                <CategoryItems/>
               </Slider>
            </div>
        </div>
    </section>
  )
}

export default Categories