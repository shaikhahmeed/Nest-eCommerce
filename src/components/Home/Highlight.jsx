import React from 'react'
import HighlightItem from './HighlightItem'

const Highlight = () => {
  return (
    <section className='mt-40'>
      <div className="container w-full flex gap-20">
        <HighlightItem className='w-1/4'>Top Selling</HighlightItem>
        <HighlightItem className='w-1/4'>Trending Products</HighlightItem>
        <HighlightItem className='w-1/4'>Recently added</HighlightItem>
        <HighlightItem className='w-1/4'>Top Rated</HighlightItem>
      </div>
    </section>
  )
}

export default Highlight