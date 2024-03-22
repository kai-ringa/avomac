import React from 'react';
import './Home.css';
import Slider from './Slider';
import About from './About';
import Services from './Services';
import Location from './Location';
import Contacts from './Contacts';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';

function Home() {
  return (
    <>
      <main className="main-section">
        <Slider />
        <About />
        <Services />
        <Location />
        <Contacts />
      </main>
      <ScrollToTopButton />
      <Footer />
    </>
  );
}

export default Home;
