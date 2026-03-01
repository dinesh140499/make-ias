import React, { useEffect } from 'react'
import Banner from '../components/home/Banner'
import About from '../components/home/About'
import Explore from '../components/home/Explore'
import Test from '../components/home/Test.jsx'
import Course from '../components/home/Course.jsx'
import Book from '../components/home/Book.jsx'
import Videos from '../components/home/Videos.jsx'
import Testimonial from '../components/home/Testimonial.jsx'
import Centers from '../components/home/Centers.jsx'
import Faq from '../components/home/Faq.jsx'
import { Helmet } from 'react-helmet'


const Home = () => {
  
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner />
      <About />
      <Explore />
      <Test />
      <Course />
      <Book />
      <Videos />
      <Testimonial />
      <Faq />
      <Centers />
    </>
  )
}

export default Home