import React, { useEffect, useState } from 'react'
import ProductItem from '../utls/ProductItem'
import axios from 'axios';

const PopularProduct = () => {

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
productList.length=10;
  return (
    <section>
        <div className="container">
            <div className='pt-12 hidden md:flex justify-between items-center'>
                <h2 className='text-3xl font-bold text-primary'>Popular Products</h2>
                <div>
                <ul className='flex gap-4 text-base text-primary font-light cursor-pointer'>
                 <li>
                    <button className='hover:text-brand'>All</button>
                 </li>
                 <li>
                    <button className='hover:text-brand'>Milks & Dairies</button>
                 </li>
                 <li>
                    <button className='hover:text-brand'>Coffes & Teas</button>
                 </li>
                 <li> 
                    <button className='hover:text-brand'>Pet Foods </button>
                 </li>
                 <li> 
                    <button className='hover:text-brand'>Meats</button>
                 </li>
                 <li> 
                    <button className='hover:text-brand'>Vegetables</button>
                 </li>
                 <li> 
                    <button className='hover:text-brand'>Fruits</button>
                 </li>
                </ul>
                </div>
            </div>
            <div className='pt-12 flex flex-col md:hidden'>
                <h2 className='text-2xl font-bold text-primary'>Popular Products</h2>
                <div>
                <ul className='flex pt-6 gap-3 font-bold text-sm text-primary'>
                 <li>
                    <button className='hover:text-brand cursor-pointer'>All</button>
                 </li>
                 <li>
                    <button className='hover:text-brand cursor-pointer'>Coffes & Teas</button>
                 </li>
                 <li> 
                    <button className='hover:text-brand cursor-pointer'>Pet Foods </button>
                 </li>
                </ul>
                <ul className='flex pt-2 gap-3 text-sm font-bold text-primary'>
                  <li> 
                    <button className='hover:text-brand cursor-pointer'>Meats</button>
                 </li>
                 <li> 
                    <button className='hover:text-brand cursor-pointer'>Vegetables</button>
                 </li>
                 <li> 
                    <button className='hover:text-brand cursor-pointer'>Fruits</button>
                 </li>
                 <li>
                    <button className='hover:text-brand cursor-pointer'>Milks & Dairies</button>
                 </li>
                </ul>
                </div>
            </div>
            <div className='hidden md:grid pt-11 pb-12 md:grid-cols-3 lg:grid-cols-5 gap-6'>
                {
                  productList.map((item)=>(
                  <ProductItem key={item.id} data={item}/>
                   ))
                }
            </div>
            <div className='flex flex-col gap-5 md:hidden pt-11 pb-12'>
                {
                 productList.map((item)=>(
                <ProductItem key={item.id} data={item}/>
                ))
                }
            </div>
        </div>
    </section>
  )
}

export default PopularProduct




