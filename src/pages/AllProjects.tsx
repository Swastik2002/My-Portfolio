import { useEffect } from 'react';
import { Github, ArrowRight, ArrowLeft } from 'lucide-react';
import Navigation from '../components/Navigation';

const AllProjects = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  const allProjects = [
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
    },
    {
      title: "Weather App",
      description: "A responsive weather application with location-based forecasts and interactive maps.",
      image: "/api/placeholder/600/400",
      techStack: ["ReactJS", "Weather API", "CSS3", "JavaScript"],
      features: ["Real-time Weather", "Location Search", "5-Day Forecast", "Responsive Design"],
      github: "https://github.com/swastikgarg04",
      demo: "#",
      gradient: "from-blue-500/20 to-indigo-500/20",
      borderGradient: "from-blue-500 to-indigo-500"
    },
    {
      title: "Task Manager",
      description: "A productivity app for managing tasks with drag-and-drop functionality and team collaboration.",
      image: "/api/placeholder/600/400",
      techStack: ["ReactJS", "Redux", "Node.js", "MongoDB"],
      features: ["Drag & Drop", "Team Collaboration", "Due Dates", "Priority Levels"],
      github: "https://github.com/swastikgarg04",
      demo: "#",
      gradient: "from-orange-500/20 to-red-500/20",
      borderGradient: "from-orange-500 to-red-500"
    },
    {
      title: "E-Commerce Store",
      description: "A full-featured online store with payment integration and inventory management.",
      image: "/api/placeholder/600/400",
      techStack: ["ReactJS", "Stripe API", "Node.js", "PostgreSQL"],
      features: ["Payment Processing", "Inventory Management", "User Reviews", "Shopping Cart"],
      github: "https://github.com/swastikgarg04",
      demo: "#",
      gradient: "from-pink-500/20 to-rose-500/20",
      borderGradient: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Particle Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <Navigation />
      
      <div className="relative z-10 pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-6 transition-colors duration-200"
            >
              <ArrowLeft size={20} />
              Back to Home
            </button>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                All Projects
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Explore my complete portfolio of projects showcasing various technologies and skills.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {allProjects.map((project, index) => (
              <div
                key={project.title}
                className={`bg-gradient-to-br ${project.gradient} backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-opacity-100 hover:border-cyan-500/50 transition-all duration-500 transform hover:scale-[1.02] group`}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <div className="text-center text-gray-400">
                      <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-cyan-400">
                          {project.title.substring(0, 2)}
                        </span>
                      </div>
                      <p className="text-sm">Project Screenshot</p>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">
                    <span className={`bg-gradient-to-r ${project.borderGradient} bg-clip-text text-transparent`}>
                      {project.title}
                    </span>
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-cyan-400 font-semibold mb-2">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {project.features.map((feature) => (
                        <div key={feature} className="flex items-center text-gray-300 text-sm">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <h4 className="text-cyan-400 font-semibold mb-2">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-800/50 border border-gray-600/50 rounded-full text-xs text-gray-300 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-600/50 rounded-lg text-gray-300 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-200 text-sm"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                    
                    <a
                      href={project.demo}
                      className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.borderGradient} rounded-lg text-white hover:opacity-90 transition-all duration-200 text-sm`}
                    >
                      <span>Demo</span>
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
