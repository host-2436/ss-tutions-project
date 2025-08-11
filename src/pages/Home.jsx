import React from 'react'
import { useState } from "react";
import '../index.css'
import Navbar from './Navbar';
import Hero from './Hero';
import WhyChoose from './WhyChoose';
import WhatWeOffer from './WhatWeOffer';
import Reviews from './Reviews';
import Blogs from './Blogs';
import FAQ from './Faq';
import ContactUs from './ContactUs';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <div id="why"><WhyChoose/></div>
        <div id="what"><WhatWeOffer/></div>
        <div id="reviews"><Reviews/></div>
        <div id="blogs"><Blogs/></div>
        <div id="faq"><FAQ/></div>
        <div id="contact"><ContactUs/></div>
        <Footer/>
    </div>
  )
}

export default Home