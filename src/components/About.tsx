
const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate Software Developer with experience in full-stack development and AI integration. 
              I love building impactful web applications and working with cutting-edge technologies.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              My journey in software development has led me to explore various technologies, from creating 
              responsive web interfaces to building robust backend systems. I'm constantly learning and 
              adapting to new challenges in the ever-evolving tech landscape.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-4">
                <h3 className="text-cyan-400 font-semibold mb-2">Frontend Focus</h3>
                <p className="text-gray-300 text-sm">Creating intuitive user experiences</p>
              </div>
              
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 rounded-lg p-4">
                <h3 className="text-blue-400 font-semibold mb-2">Backend Expertise</h3>
                <p className="text-gray-300 text-sm">Building scalable server solutions</p>
              </div>
              
              <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-lg p-4">
                <h3 className="text-purple-400 font-semibold mb-2">AI Integration</h3>
                <p className="text-gray-300 text-sm">Implementing intelligent features</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8 transform hover:scale-105 transition-transform duration-300">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Problem Solving</span>
                  <span className="text-cyan-400">95%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full w-[95%]"></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Full-Stack Development</span>
                  <span className="text-blue-400">90%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full w-[90%]"></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">AI Integration</span>
                  <span className="text-purple-400">85%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-purple-400 to-pink-500 h-2 rounded-full w-[85%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
