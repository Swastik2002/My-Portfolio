
const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "C++", level: 90, color: "from-red-400 to-red-600" },
        { name: "Java", level: 85, color: "from-orange-400 to-orange-600" },
        { name: "JavaScript", level: 92, color: "from-yellow-400 to-yellow-600" },
      ]
    },
    {
      title: "Frontend",
      skills: [
        { name: "ReactJS", level: 90, color: "from-blue-400 to-blue-600" },
        { name: "HTML5", level: 95, color: "from-red-400 to-red-600" },
        { name: "CSS3", level: 88, color: "from-blue-400 to-blue-600" },
        { name: "TailwindCSS", level: 85, color: "from-cyan-400 to-cyan-600" },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 85, color: "from-green-400 to-green-600" },
        { name: "Express.js", level: 82, color: "from-gray-400 to-gray-600" },
      ]
    },
    {
      title: "Database & Tools",
      skills: [
        { name: "SQLite", level: 80, color: "from-blue-400 to-blue-600" },
        { name: "PostgreSQL", level: 70, color: "from-blue-400 to-blue-600" },
        { name: "REST APIs", level: 88, color: "from-purple-400 to-purple-600" },
        { name: "Git", level: 90, color: "from-orange-400 to-orange-600" },
        { name: "GitHub", level: 90, color: "from-gray-400 to-gray-600" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300 transform hover:scale-105"
            >
              <h3 className="text-2xl font-bold text-cyan-400 mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-400 group-hover:text-cyan-400 transition-colors">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden">
                      <div
                        className={`bg-gradient-to-r ${skill.color} h-2.5 rounded-full transition-all duration-1000 ease-out transform origin-left hover:scale-x-105`}
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${categoryIndex * 100 + skillIndex * 50}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Icons */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-300">
            Technologies I Work With
          </h3>
          
          <div className="flex flex-wrap justify-center gap-6">
            {[
              "React", "Node.js", "JavaScript", "TypeScript", "TailwindCSS", 
              "Express", "SQLite", "Git", "GitHub", "REST API"
            ].map((tech, index) => (
              <div
                key={tech}
                className="bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-sm border border-gray-600/50 rounded-lg px-4 py-2 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-110 hover:rotate-3"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="text-gray-300 font-medium hover:text-cyan-400 transition-colors">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
