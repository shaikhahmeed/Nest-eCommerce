import React, { useEffect, useState } from 'react'
import ProductItem from '../utls/ProductItem'
import ItemOneComp from './ItemOneComp'
import axios from 'axios';


const ItemOne = () => {
const [productList,setProductList]=useState([])

  useEffect(()=>{

    const api = async()=>{
  const options = {
    method: 'GET',
    url: 'https://api.freeapi.app/api/v1/ecommerce/products',
    params: {page: '1', limit: '10'},
    headers: {accept: 'application/json'},
};

try {
  const  res  = await axios.request(options);
  console.log(res.data.data.products);
} catch (error) {
  console.error(error);
}
    };
    api();
  },[]);
  return (
    <>
    <div className="container">
        <div className='flex gap-4'>
            <div className='flex mt-14'>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            </div>
            <div className='mt-3'>
                <ItemOneComp/>
            </div>
        </div>
    </div>
    </>
  )
}

export default ItemOne