import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import About from './components/About'; // Import the new combined component
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Destinations />
      <About /> 
      <Contact />
      <Footer />
    </main>
  );
}