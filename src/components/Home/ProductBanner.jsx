import React from 'react'
import ProductBannerItems from './ProductBannerItems'

const ProductBanner = () => {
  return (
    <section>
        <div className="container">
            <div className='mt-7 mb-12 flex gap-6'>
                <ProductBannerItems bg="/product_banner.png" url="/">
                 Everyday Fresh & Clean with Our Products
                </ProductBannerItems>
                <ProductBannerItems bg="/product_banner.png" url="/">
                 Everyday Fresh & Clean with Our Products
                </ProductBannerItems>
                <ProductBannerItems bg="/product_banner.png" url="/">
                 Everyday Fresh & Clean with Our Products
                </ProductBannerItems>
            </div>
        </div>
    </section>
  )
}

export default ProductBanner