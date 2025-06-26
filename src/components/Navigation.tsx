
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Track active section
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const handleProjectsClick = (type: 'main' | 'all') => {
    if (type === 'main') {
      scrollToSection('#projects');
    } else {
      window.location.href = '/projects';
    }
    setIsProjectsDropdownOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/90 backdrop-blur-md border-b border-cyan-500/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              SG
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4 relative">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'text-cyan-400'
                      : 'text-gray-300 hover:text-cyan-400'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              
              {/* Projects Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsProjectsDropdownOpen(!isProjectsDropdownOpen)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center gap-1 ${
                    activeSection === 'projects'
                      ? 'text-cyan-400'
                      : 'text-gray-300 hover:text-cyan-400'
                  }`}
                >
                  Projects
                  <ChevronDown size={16} className={`transition-transform duration-200 ${isProjectsDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isProjectsDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-gray-800/95 backdrop-blur-md border border-cyan-500/30 rounded-lg shadow-lg">
                    <button
                      onClick={() => handleProjectsClick('main')}
                      className="w-full text-left px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-gray-700/50 transition-colors duration-200 rounded-t-lg"
                    >
                      Main Projects
                    </button>
                    <button
                      onClick={() => handleProjectsClick('all')}
                      className="w-full text-left px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-gray-700/50 transition-colors duration-200 rounded-b-lg"
                    >
                      All Projects
                    </button>
                  </div>
                )}
              </div>

              {/* Active Section Indicator Line */}
              <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 ease-in-out"
                style={{
                  width: activeSection ? '40px' : '0px',
                  transform: activeSection ? `translateX(${getActiveIndicatorPosition(activeSection, navItems)}px)` : 'translateX(0px)'
                }}
              />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-cyan-400 p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800/95 backdrop-blur-md rounded-lg mt-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'text-cyan-400'
                      : 'text-gray-300 hover:text-cyan-400'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => handleProjectsClick('main')}
                className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-200 ${
                  activeSection === 'projects'
                    ? 'text-cyan-400'
                    : 'text-gray-300 hover:text-cyan-400'
                }`}
              >
                Main Projects
              </button>
              <button
                onClick={() => handleProjectsClick('all')}
                className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-200"
              >
                All Projects
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Helper function to calculate the position of the active indicator
const getActiveIndicatorPosition = (activeSection: string, navItems: any[]) => {
  const sectionIndex = navItems.findIndex(item => item.id === activeSection);
  if (sectionIndex === -1) return 0;
  
  // Approximate position calculation (adjust based on actual spacing)
  return sectionIndex * 80 + 12; // 80px per item + 12px offset
};

export default Navigation;
