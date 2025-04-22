import React from 'react'
import Breadcamp from '../utls/Breadcamp'

const Banner = () => {
  return (
    <section className='pt-8 pb-14'>
        <div className="container">
            <div className="bg-[url(/shop_banner.png)] p-20 bg-center rounded-4xl">
                <Breadcamp/>
            </div>
        </div>
    </section>
  )
}

export default Banner