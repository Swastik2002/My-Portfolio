
const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
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
            
            <p className="text-lg text-gray-300 leading-relaxed">
              I believe in writing clean, efficient code and creating user experiences that make a difference. 
              Whether it's developing a complex web application or integrating AI capabilities, I approach 
              each project with enthusiasm and attention to detail.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, I enjoy staying up-to-date with the latest tech trends, contributing to 
              open-source projects, and sharing knowledge with the developer community. I'm always excited 
              to take on new challenges and collaborate on innovative projects.
            </p>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8 transform hover:scale-105 transition-transform duration-300">
              <div className="aspect-square bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-full flex items-center justify-center">
                    <span className="text-4xl font-bold text-cyan-400">SG</span>
                  </div>
                  <p className="text-sm">Profile Photo</p>
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
