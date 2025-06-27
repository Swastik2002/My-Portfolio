import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaPython, FaJava } from 'react-icons/fa';
import { SiCplusplus, SiTailwindcss, SiMongodb, SiPostgresql, SiSqlite, SiTypescript, SiJavascript, SiVercel, SiRender, SiRailway, SiExpress, SiMysql } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "C++", icon: <SiCplusplus /> },
        { name: "Python", icon: <FaPython /> },
        { name: "Java", icon: <FaJava /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "TypeScript", icon: <SiTypescript /> }
      ]
    },
    {
      title: "Technologies",
      skills: [
        { name: "ReactJS", icon: <FaReact /> },
        { name: "NodeJS", icon: <FaNodeJs /> },
        { name: "ExpressJS", icon: <SiExpress /> },
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "TailwindCSS", icon: <SiTailwindcss /> },
        { name: "REST APIs", icon: <SiJavascript /> }
      ]
    },
    {
      title: "Database & Tools",
      skills: [
        { name: "MySQL", icon: <SiMysql /> },
        { name: "SQLite", icon: <SiSqlite /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "Vercel", icon: <SiVercel /> },
        { name: "Render", icon: <SiRender /> },
        { name: "Railway", icon: <SiRailway /> }
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

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300 transform hover:scale-105"
            >
              <h3 className="text-2xl font-bold text-cyan-400 mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-700/50 to-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-lg text-gray-300 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110 cursor-default"
                    style={{ animationDelay: `${categoryIndex * 100 + skillIndex * 50}ms` }}
                  >
                    <span className="text-lg">{skill.icon}</span>
                    <span className="font-medium text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
