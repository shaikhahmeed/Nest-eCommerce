import React from 'react'
import { CiHeadphones, CiLocationOn } from 'react-icons/ci'
import { PiRocketLaunchThin } from 'react-icons/pi'

const Footer = () => {
  return (
    <div className="container mt-16 mb-12 flex gap-13">
        <div>
            <img src="/logo.png" alt="logo" />
            <p className='font-medium text-base text-primary pt-4 pb-8'>Awesome grocery store website template</p>
            <div className='text-base font-medium text-primary flex flex-col gap-2.5'>
                <p className='flex'><span className='text-brand'><CiLocationOn/></span>Address: 5171 W Campbell Ave</p>
                <p>undefined Kent, Utah 53127 United States</p>
                <p className='flex'><span className='text-brand'><CiHeadphones/></span>Call Us:(+91) - 540-025-124553</p>
                <p className='flex'><span className='text-brand'><PiRocketLaunchThin/></span>Email:sale@Nest.com</p>
            </div>
        </div>
        <div>
            <p className='font-medium text-sm text-[#7E7E7E]'>Company</p>
            <div className='font-medium text-sm text-primary flex flex-col gap-3'>
                <p>About Us</p>
                <p>Delivery Information</p>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
                <p>Contact Us</p>
                <p>Support Center</p>
                <p>Careers</p>
            </div>
        </div>
        <div>
            <h3 className='font-bold text-2xl text-primary pb-5'>Account</h3>
            <div className='font-medium text-sm text-primary flex flex-col gap-3'>
                <p>Sign In</p>
                <p>View Cart</p>
                <p>My Wishlist</p>
                <p>Track My Order</p>
                <p>Help Ticket</p>
                <p>Shipping Details</p>
                <p>Compare products</p>
            </div>
        </div>
        <div>
            <h3 className='font-bold text-2xl text-primary pb-5'>Corporate</h3>
            <div className='font-medium text-sm text-primary flex flex-col gap-3'>
                <p>Sign In</p>
                <p>View Cart</p>
                <p>My Wishlist</p>
                <p>Track My Order</p>
                <p>Help Ticket</p>
                <p>Shipping Details</p>
                <p>Compare products</p>
            </div>
        </div>
         <div>
            <h3 className='font-bold text-2xl text-primary pb-5'>Popular</h3>
            <div className='font-medium text-sm text-primary flex flex-col gap-3'>
                <p>Sign In</p>
                <p>View Cart</p>
                <p>My Wishlist</p>
                <p>Track My Order</p>
                <p>Help Ticket</p>
                <p>Shipping Details</p>
                <p>Compare products</p>
            </div>
        </div>
        <div>
            <h3 className='font-bold text-2xl text-primary pb-5'>Install App</h3>
            <p className='font-medium text-sm text-primary pb-4'>From App Store or Google Play</p>
            <p className='font-medium text-sm text-primary'>Secured Payment Gateways</p>
        </div>
    </div>
  )
}

export default Footer