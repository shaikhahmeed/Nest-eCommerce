import React from 'react'
import ProductBannerItems from './ProductBannerItems.jsx'

const ProductBanner = () => {
  return (
    <section>
        <div className="container">
            <div className='mt-7 mb-12 md:flex gap-6'>
                <ProductBannerItems bgImg="/product_banner.png" url="/">
                 Everyday Fresh & Clean with Our Products
                </ProductBannerItems>
                <ProductBannerItems bgImg="/product_banner.png" url="/">
                 Everyday Fresh & Clean with Our Products
                </ProductBannerItems>
                <ProductBannerItems bgImg="/product_banner.png" url="/">
                 Everyday Fresh & Clean with Our Products
                </ProductBannerItems>
            </div>
        </div>
    </section>
  )
}

export default ProductBanner