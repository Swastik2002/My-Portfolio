
import { Github, ArrowRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "BlogSafe",
      description: "A full-stack blogging platform with real-time chat, file uploads, comment moderation, and user/admin roles.",
      image: "/api/placeholder/600/400",
      techStack: ["ReactJS", "Node.js", "Express.js", "Socket.IO", "MongoDB"],
      features: ["Real-time Chat", "File Uploads", "User Authentication", "Admin Panel"],
      github: "https://github.com/swastikgarg04",
      demo: "#",
      gradient: "from-cyan-500/20 to-blue-500/20",
      borderGradient: "from-cyan-500 to-blue-500"
    },
    {
      title: "TrustMed",
      description: "A health-tech platform for medicine trust verification with SQLite backend, deployed via Vercel and Railway.",
      image: "/api/placeholder/600/400",
      techStack: ["ReactJS", "SQLite", "Node.js", "Vercel", "Railway"],
      features: ["Medicine Verification", "Trust Score", "Database Integration", "Cloud Deployment"],
      github: "https://github.com/swastikgarg04",
      demo: "#",
      gradient: "from-green-500/20 to-emerald-500/20",
      borderGradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Answer Verification Tool",
      description: "Built during internship, integrates Google Gemini with ReactJS to validate student answers for teachers.",
      image: "/api/placeholder/600/400",
      techStack: ["ReactJS", "Google Gemini API", "JavaScript", "AI Integration"],
      features: ["AI-Powered Validation", "Teacher Dashboard", "Automated Grading", "API Integration"],
      github: "https://github.com/swastikgarg04",
      demo: "#",
      gradient: "from-purple-500/20 to-pink-500/20",
      borderGradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development and AI integration.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`bg-gradient-to-br ${project.gradient} backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-opacity-100 hover:border-cyan-500/50 transition-all duration-500 transform hover:scale-[1.02] group`}
            >
              <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Project Image */}
                <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-cyan-400">
                          {project.title.substring(0, 2)}
                        </span>
                      </div>
                      <p className="text-sm">Project Screenshot</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Project Details */}
                <div className={`p-8 flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <h3 className="text-3xl font-bold mb-4">
                    <span className={`bg-gradient-to-r ${project.borderGradient} bg-clip-text text-transparent`}>
                      {project.title}
                    </span>
                  </h3>
                  
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-cyan-400 font-semibold mb-3">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature) => (
                        <div key={feature} className="flex items-center text-gray-300 text-sm">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-cyan-400 font-semibold mb-3">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-800/50 border border-gray-600/50 rounded-full text-sm text-gray-300 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 px-6 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-gray-300 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-200 group"
                    >
                      <Github size={20} />
                      <span>View Code</span>
                    </a>
                    
                    <a
                      href={project.demo}
                      className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${project.borderGradient} rounded-lg text-white hover:opacity-90 transition-all duration-200 group`}
                    >
                      <span>Live Demo</span>
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
