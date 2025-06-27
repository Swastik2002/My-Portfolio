import { Github, ArrowRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "TrustMed",
      description: "Full-stack hospital care platform built to digitize prescriptions and streamline doctor-patient-medicine management on a single system.",
      image: "/TrustMed_big.png",
      techStack: ["ReactJS", "Node.js", "ExpressJS", "SQLite", "JWT", "Vercel", "Render"],
      features: [
        "Role-Based User Access (Admin, Doctor, Patient)",
        "Upload and Digitize Prescriptions with Text Extraction",
        "Order Medicines with a Shopping Cart System",
        "Manage Doctors, Patients, Medicines and Orders"
      ],
      github: "https://github.com/Swastik2002/trustmed",
      demo: "https://swastik-trustmed.vercel.app/",
      gradient: "from-cyan-500/20 to-blue-500/20",
      borderGradient: "from-cyan-500 to-blue-500"
    },
    {
      title: "BlogSafe",
      description: "A full-stack blogging platform with real-time chat, file uploads, comment moderation, and user/admin roles.",
      image: "",
      techStack: ["ReactJS", "Node.js", "Express.js", "MongoDB"],
      features: ["Real-time Chat", "File Uploads", "User Authentication", "Admin Panel"],
      github: "https://github.com/Swastik2002",
      demo: "#",
      gradient: "from-green-500/20 to-emerald-500/20",
      borderGradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Answer Verification Tool",
      description: "Built during internship, integrates Google Gemini with ReactJS to validate student answers for teachers.",
      image: "",
      techStack: ["ReactJS", "Google Gemini API", "JavaScript", "AI Integration"],
      features: ["AI-Powered Validation", "Teacher Dashboard", "Automated Grading", "API Integration"],
      github: "https://github.com/Swastik2002",
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

        {/* Grid: 1 col on mobile, 3 cols on large */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`bg-gradient-to-br ${project.gradient} backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-opacity-100 hover:border-cyan-500/50 transition-all duration-500 transform hover:scale-[1.02] group flex flex-col`}
            >
              {/* Image Section */}
              <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-gray-700 to-gray-800">
                <div className="absolute inset-0 flex items-center justify-center text-center text-gray-400 transition-transform duration-500 group-hover:scale-110">
                  {project.image ? (
                    <img src={project.image} alt="Project Screenshot" className="w-full h-full object-cover" />
                  ) : (
                    <div>
                      <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-cyan-400">
                          {project.title?.substring(0, 2)}
                        </span>
                      </div>
                      <p className="text-sm">Project Screenshot</p>
                    </div>
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Details Section */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-2xl font-bold mb-2">
                    <span className={`bg-gradient-to-r ${project.borderGradient} bg-clip-text text-transparent`}>
                      {project.title}
                    </span>
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-cyan-400 font-semibold mb-2 text-sm">Key Features:</h4>
                    <ul className="text-gray-300 text-xs list-disc list-inside space-y-1">
                      {project.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-cyan-400 font-semibold mb-2 text-sm">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-800/50 border border-gray-600/50 rounded-full text-xs text-gray-300 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-600/50 rounded-lg text-sm text-gray-300 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-200 group"
                  >
                    <Github size={16} />
                    <span>View Code</span>
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.borderGradient} rounded-lg text-sm text-white hover:opacity-90 transition-all duration-200 group`}
                  >
                    <span>Live Demo</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* View All Projects Button */}
        <div className="mt-12 text-center">
          <a
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white text-lg font-semibold hover:opacity-90 transition-all duration-300"
          >
            View All Projects
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
