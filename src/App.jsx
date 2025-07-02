import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import VoiceAssistant from './components/VoiceAssistant';
import { useState, useCallback } from 'react';
import ReactGA from "react-ga4";

ReactGA.initialize("G-KP57M0HSQ9"); // Replace with your GA Measurement ID
ReactGA.send("pageview");

function App() {
  const [voicePrompt, setVoicePrompt] = useState('Try it saying : "Go to About.."');

  const sectionMap = {
    home: '#home',
    about: '#about',
    skills: '#skills',
    services: '#services',
    projects: '#projects',
    experience: '#experience',
    contact: '#contact',
  };

  const onTranscript = useCallback((transcript) => {
    setVoicePrompt(transcript);
    const lower = transcript.toLowerCase();
    for (const key in sectionMap) {
      if (lower.includes(key)) {
        const el = document.querySelector(sectionMap[key]);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          setVoicePrompt(`Navigating to ${key.charAt(0).toUpperCase() + key.slice(1)}....`);
        }
        return;
      }
    }
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar VoiceAssistantComponent={<VoiceAssistant onTranscript={onTranscript} prompt={voicePrompt} />} />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
