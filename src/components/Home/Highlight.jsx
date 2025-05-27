import React from 'react'
import HighlightItem from './HighlightItem'

const Highlight = () => {
  return (
    <section className='mt-60 md:mt-40'>
      <div className="container">
      <div className="w-full hidden md:flex gap-20">
        <HighlightItem className='w-1/4' >Top Selling</HighlightItem>
        <HighlightItem className='w-1/4'>Trending Products</HighlightItem>
        <HighlightItem className='w-1/4'>Recently added</HighlightItem>
        <HighlightItem className='w-1/4'>Top Rated</HighlightItem>
      </div>
      <div className="flex md:hidden flex-col gap-10">
        <HighlightItem className='w-full' >Top Selling</HighlightItem>
        <HighlightItem className='w-full'>Trending Products</HighlightItem>
      </div>
      </div>
    </section>
  )
}

export default Highlight