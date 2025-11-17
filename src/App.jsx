import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import StoryBook from './components/StoryBook';
import Roadmap from './components/Roadmap';
import Community from './components/Community';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-[#0b0e12] text-white">
      <Hero />
      <About />
      <StoryBook />
      <Roadmap />
      <Community />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
