'use client'
import React from 'react'
import Navbar from '@/components/Navbar'
import Herosection from '@/components/Herosection'
import Newsection from '@/components/Newsection'
import Ingredientsection from '@/components/Ingredientsection'
import AboutUs from '@/components/AboutUs'
import Footer from '@/components/Footer'
const page = () => {
  return (
    <div className='w-full bg-[#F9E7D9]'>
        <Navbar></Navbar>
        <Herosection></Herosection>
        <Newsection></Newsection>
        <Ingredientsection></Ingredientsection>
        <AboutUs></AboutUs>
        <Footer></Footer>
    </div>
  )
}

export default page
