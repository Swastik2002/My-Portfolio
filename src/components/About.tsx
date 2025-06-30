
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
          <div className="relative">
            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8 transform hover:scale-105 transition-transform duration-300">
              <div className="aspect-square bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <img src="/Profile_Picture.jpg" alt="Profile Picture"/>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl text-cyan-300 leading relaxed">Hello! I'm Swastik Garg</h3>

            <p className="text-lg text-gray-300 leading-relaxed">
              I am passionate about building impactful and detailed software solutions and working with modern web technologies. With strong problem-solving abilities, great communication skills, and a commitment to work, I strive to deliver meaningful user experiences.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              I am currently pursuing a Bachelor's degree in Computer Science and Engineering at <a href="https://www.jiit.ac.in/" target="_blank" className="test-lg text-cyan-300 leading-relaxed">JIIT, Noida (2022-2026)</a>, with a CGPA of 8.5.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              I am also pursuing a Bachelor's degree from <a href="https://www.iitm.ac.in/" target="_blank" className="test-lg text-cyan-300 leading-relaxed">IIT, Madras</a> in Data Science and Applications.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, I enjoy exploring the latest technologies. Beyond tech, I love playing flute, guitar, singing & listening to music.
            </p>

            {/* View Resume Button */}
            <div className="pt-2">
              <a
                href="https://drive.google.com/file/d/1Db5rQn8SIH5-52_BKx_TlkywGQMl76xa/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-white font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                View Resume
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
