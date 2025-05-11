import React from 'react'
import Footer from './Footer'
import Navigation from './Navigation'
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <>
    <Navigation/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout