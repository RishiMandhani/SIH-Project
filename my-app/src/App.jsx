import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ProblemStatement from './components/ProblemStatement'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [language, setLanguage] = useState('en');

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    console.log(`Language changed to: ${newLanguage}`);
  };

  return (
    <div className="App">
      <Header onLanguageChange={handleLanguageChange} currentLanguage={language} />
      <Hero />
      <ProblemStatement />
      <Features />
      <HowItWorks />
      <Stats />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  )
}

export default App