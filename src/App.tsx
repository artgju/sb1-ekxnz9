import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import UseCases from './components/UseCases';
import About from './components/About';
import Newsletter from './components/Newsletter';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <UseCases />
        <About />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}

export default App;