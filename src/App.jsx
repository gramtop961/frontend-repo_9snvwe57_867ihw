import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import StoryBook from './components/StoryBook';
import Roadmap from './components/Roadmap';
import Community from './components/Community';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-gradient-to-b from-[#050608] to-[#10141a] text-white">
      <Navbar />
      <Hero />
      <About />
      <StoryBook />
      <Roadmap />
      <Community />
      <Gallery />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
