import React from 'react';
import Featured from '../components/home/Featured';
import Categories from '../components/home/Categories';
import NewsLetter from '../components/home/NewsLetter';
import About from '../components/home/About';
import Brands from '../components/home/Brands';
import Banner from '../components/home/Banner';
import Footer from '../components/home/Footer';

const Home = () => {
  return (
    <>
      <Banner />
      <Featured />
      <Categories />
      <NewsLetter />
      <About />
      <Brands />
      <Footer />
    </>
  );
};

export default Home;
