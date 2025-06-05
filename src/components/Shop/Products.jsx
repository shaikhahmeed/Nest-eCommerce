import React, { useEffect, useState } from 'react'
import { FiBox } from 'react-icons/fi'
import ProductItem from '../utls/ProductItem'
import ItemOneComp from './ItemOneComp'
import axios from 'axios';

const Products = () => {
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

  return (
    <section>
        <div className="container">
            <div>
              <div className='flex justify-between'>
                <p className='text-primary text-lg'>We found <span className='text-brand'>{productList.length}</span> items for you!</p>
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
          <div className='grid grid-cols-6 gap-4 mt-14'>
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
export default Products

