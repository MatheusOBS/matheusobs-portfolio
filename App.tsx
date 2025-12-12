import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIChat from './components/AIChat';

function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-dark-text font-sans selection:bg-primary-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <AIChat />
    </div>
  );
}

export default App;