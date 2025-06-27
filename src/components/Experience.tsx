const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-blue-500"></div>
          
          {/* Experience Item - Protiviti */}
          <div className="relative flex items-start mb-12">
            <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full border-4 border-gray-900"></div>
            <div className="ml-16 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:border-cyan-500/30 transition-all duration-300 transform hover:scale-[1.02] w-full">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-2xl font-bold text-cyan-400 mb-2 md:mb-0">
                  Summer Internship
                </h3>
                <span className="text-blue-400 font-semibold bg-blue-500/20 px-3 py-1 rounded-full text-sm">
                  July 2024 - July 2024
                </span>
              </div>
              <h4 className="text-xl font-semibold text-gray-300 mb-2">
                Protiviti
              </h4>
              <p className="text-gray-400 mb-4 font-medium">
                Web Development Intern
              </p>
              <div className="space-y-4">
                <div>
                  <h5 className="text-lg font-semibold text-white mb-2">Project:</h5>
                  <p className="text-gray-300 mb-4">
                    Contributed to internal tool development, focusing on ReactJS and integration with backend services.
                  </p>
                </div>
                <div>
                  <h5 className="text-lg font-semibold text-white mb-2">Key Achievements:</h5>
                  <ul className="space-y-2">
                    <li className="flex items-start text-gray-300">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      Built frontend components using ReactJS and TailwindCSS
                    </li>
                    <li className="flex items-start text-gray-300">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      Collaborated with backend teams to consume REST APIs
                    </li>
                    <li className="flex items-start text-gray-300">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      Gained practical experience in enterprise-grade application development
                    </li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 pt-4">
                  {["ReactJS", "TailwindCSS", "REST API"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-sm text-cyan-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Experience Item - JIIT */}
          <div className="relative flex items-start mb-12">
            <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full border-4 border-gray-900"></div>
            <div className="ml-16 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:border-cyan-500/30 transition-all duration-300 transform hover:scale-[1.02] w-full">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-2xl font-bold text-cyan-400 mb-2 md:mb-0">
                  Summer Internship
                </h3>
                <span className="text-blue-400 font-semibold bg-blue-500/20 px-3 py-1 rounded-full text-sm">
                  June 2024 - July 2024
                </span>
              </div>
              <h4 className="text-xl font-semibold text-gray-300 mb-2">
                Jaypee Institute of Information Technology
              </h4>
              <p className="text-gray-400 mb-4 font-medium">
                Center of Excellence on AI for Education
              </p>
              <div className="space-y-4">
                <div>
                  <h5 className="text-lg font-semibold text-white mb-2">Project:</h5>
                  <p className="text-gray-300 mb-4">
                    Answer Verification using Google Gemini and ReactJS - Developed an AI-powered tool 
                    to help teachers validate student answers automatically, improving the grading process 
                    and educational assessment efficiency.
                  </p>
                </div>
                <div>
                  <h5 className="text-lg font-semibold text-white mb-2">Key Achievements:</h5>
                  <ul className="space-y-2">
                    <li className="flex items-start text-gray-300">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      Integrated Google Gemini API for intelligent answer validation
                    </li>
                    <li className="flex items-start text-gray-300">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      Built responsive user interface using ReactJS
                    </li>
                    <li className="flex items-start text-gray-300">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      Collaborated with Prof. Neetu Sardana on educational technology research
                    </li>
                    <li className="flex items-start text-gray-300">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      Gained hands-on experience in AI integration and educational software development
                    </li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 pt-4">
                  {["ReactJS", "Google Gemini API", "JavaScript", "AI Integration", "Educational Technology"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-sm text-cyan-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          

        </div>
      </div>
    </section>
  );
};

export default Experience;
