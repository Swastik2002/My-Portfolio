import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProjectsPopupOpen, setIsProjectsPopupOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  const navRef = useRef<HTMLDivElement>(null);
  const projectsButtonRef = useRef<HTMLButtonElement | null>(null);
  const popupRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Contact', href: '#contact', id: 'contact' }
  ];

  const buttonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const scrollPosition = window.scrollY + 100;
      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const ref = buttonRefs.current[activeSection];
    if (ref && navRef.current) {
      const navLeft = navRef.current.getBoundingClientRect().left;
      const { left, width } = ref.getBoundingClientRect();
      setIndicatorStyle({
        left: left - navLeft,
        width
      });
    }
  }, [activeSection]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node) &&
        !projectsButtonRef.current?.contains(event.target as Node)
      ) {
        setIsProjectsPopupOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToSection = (href: string, id: string) => {
    if (location.pathname !== '/') {
      window.location.href = id === 'projects' ? '/#projects' : '/';
      return;
    }

    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
    setIsProjectsPopupOpen(false);
  };

  const handleProjectsPopup = () => {
    setIsProjectsPopupOpen(!isProjectsPopupOpen);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/90 backdrop-blur-md border-b border-cyan-500/20' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button onClick={() => scrollToSection('#hero', 'hero')}
            className="flex-shrink-0 text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent focus:outline-none">
            Swastik Garg
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:block relative">
            <div className="ml-10 flex items-baseline space-x-4 relative" ref={navRef}>
              {navItems.map((item) => (
                <button
                  key={item.name}
                  ref={(el) => {
                    buttonRefs.current[item.id] = el;
                    if (item.id === 'projects') projectsButtonRef.current = el;
                  }}
                  onClick={() => {
                    if (item.id === 'projects') {
                      handleProjectsPopup();
                    } else {
                      scrollToSection(item.href, item.id);
                    }
                  }}
                  className={`relative px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'text-cyan-400'
                      : 'text-gray-300 hover:text-cyan-400'
                  }`}
                >
                  {item.name}
                </button>
              ))}

              {/* Underline */}
              <div
                className="absolute bottom-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 ease-in-out"
                style={{
                  left: `${indicatorStyle.left - 5}px`,
                  width: `${indicatorStyle.width - 20}px`
                }}
              />

              {/* Projects Dropdown Popup */}
              {isProjectsPopupOpen && (
                <div
                  ref={popupRef}
                  className="absolute top-full mt-3 bg-gray-800/95 backdrop-blur-md border border-cyan-500/30 rounded-lg shadow-lg z-50 left-[200px] w-36"
                >
                  <button
                    onClick={() => scrollToSection('#projects', 'projects')}
                    className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-gray-700/50 transition-colors duration-200 rounded-t-lg"
                  >
                    Featured Projects
                  </button>
                  <button
                    // onClick={() => (window.location.href = '/projects')}
                    onClick={() => navigate('/projects')}
                    className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-gray-700/50 transition-colors duration-200 rounded-b-lg"
                  >
                    All Projects
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-cyan-400 p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800/95 backdrop-blur-md rounded-lg mt-2">
              {navItems.map((item) =>
                item.id === 'projects' ? (
                  <div key="projects">
                    <button
                      onClick={() => scrollToSection('#projects', 'projects')}
                      className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-cyan-400"
                    >
                      Featured Projects
                    </button>
                    <button
                      onClick={() => (window.location.href = '/projects')}
                      className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-cyan-400"
                    >
                      All Projects
                    </button>
                  </div>
                ) : (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href, item.id)}
                    className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-cyan-400"
                  >
                    {item.name}
                  </button>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
