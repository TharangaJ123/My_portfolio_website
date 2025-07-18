import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = ({ VoiceAssistantComponent }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-lg sm:text-2xl font-bold text-blue-400">
              TJ
            </h1>
          </div>          

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8 items-center min-w-0">
              {navItems.map((item, idx) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
              {/* Voice Assistant next to Contact */}
              {VoiceAssistantComponent && (
                <div className="ml-4 mr-24 flex items-center min-w-0">{VoiceAssistantComponent}</div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-1 z-10 ml-1 min-w-0">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-blue-400 p-2 focus:outline-none"
              aria-label="Open navigation menu"
              style={{ zIndex: 60 }}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
            {/* Voice Assistant on mobile, right of toggle */}
            {VoiceAssistantComponent && (
              <div className="flex items-center min-w-0 mr-8">{VoiceAssistantComponent}</div>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="fixed inset-0 top-16 bg-gray-900/95 backdrop-blur-md z-40 flex flex-col items-center justify-start w-full min-h-[calc(100vh-4rem)] transition-all duration-300">
            <div className="w-full px-2 pt-6 pb-8 space-y-2 sm:px-3">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-gray-300 hover:text-blue-400 px-3 py-3 rounded-md text-lg font-medium transition-colors duration-200 text-center"
                >
                  {item.name}
                </button>
              ))}
              {/* Voice Assistant in mobile menu */}
              {VoiceAssistantComponent && (
                <div className="flex justify-center mt-6 align-baseline">{VoiceAssistantComponent}</div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 