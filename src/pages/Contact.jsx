import React from 'react'
import ContactOnlineOffering from '../components/Contact/ContactOnlineOffering'
import ContactOffering from '../components/Contact/ContactOffering'
import ContactFooter from '../components/Contact/ContactFooter'
import SectionOne from '../components/Contact/SectionOne'
import Location from '../components/Contact/Location'
import Comment from '../components/Contact/Comment'

const Contact = () => {
  return (
    <>
    <SectionOne/>
    <Location/>
    <Comment/>
    <ContactOnlineOffering/>
    <ContactOffering/>
    <ContactFooter/>
    </>
  )
}

export default Contact