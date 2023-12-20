import React from 'react'
import Hero from '../Components/Hero/Hero'
import Accordian from '../Components/Accordian/Accordian'
import Feedback from '../Components/Feedback/Feedback'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'

const Home = () => {
  return (
    <>
      <Header/>
      <Hero />
      <Accordian />
      <Feedback />
      <Footer />
    </>
  );
}

export default Home