
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in">
          <div className="text-2xl sm:text-2xl md:text-3xl text-gray-300 mb-6 flex items-center gap-2 justify-center">
            <span>Hello</span>
            <img src="/Hello.gif" alt="waving hand" style={{ width: "40px" }} />
            <span>, I'm</span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Swastik Garg
            </span>
          </h1>
          
          <div className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-6 space-y-2">
            <p>Software Developer</p>
            <p className="text-cyan-400">Full-Stack Web Developer</p>
            <p className="text-blue-400">AI Enthusiast</p>
          </div>
          
          <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Turning ideas into scalable web solutions
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={scrollToAbout}
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              Explore My Work
            </button>
            
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3 border-2 border-cyan-500 rounded-full text-cyan-400 hover:bg-cyan-500 hover:text-white transition-all duration-300 font-semibold"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button onClick={scrollToAbout} className="text-cyan-400 hover:text-cyan-300 transition-colors">
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
