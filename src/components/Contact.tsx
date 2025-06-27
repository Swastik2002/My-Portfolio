import { Mail, Github, Linkedin, Youtube } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();

  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=swastikmanoj28@gmail.com",
      target: "_blank",
      color: "from-cyan-500 to-blue-500",
      hoverColor: "hover:from-cyan-600 hover:to-blue-700",
      description: "swastikmanoj28@gmail.com"
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/Swastik2002",
      color: "from-gray-600 to-gray-800",
      hoverColor: "hover:from-gray-700 hover:to-gray-900",
      description: "github.com/Swastik2002"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/swastik-garg-111099249/",
      color: "from-blue-600 to-blue-800",
      hoverColor: "hover:from-blue-700 hover:to-blue-900",
      description: "Let's connect professionally"
    },
    {
      name: "YouTube",
      icon: Youtube,
      href: "https://www.youtube.com/@SwastikGarg",
      color: "from-red-600 to-red-800",
      hoverColor: "hover:from-red-700 hover:to-red-900",
      description: "Check out Music Channel"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities and interesting projects. <br />
            Let's connect and discuss how we can work together!
          </p>
        </div>

        <div className="text-center mb-12">
          <p className="text-gray-300 text-lg mb-8">
            Whether you have a project in mind, want to collaborate, or just want to say hello, <br />
            feel free to reach out through any of these platforms:
          </p>
        </div>

        {/* Social Media Links */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target={social.name !== "Email" ? "_blank" : undefined}
              rel={social.name !== "Email" ? "noopener noreferrer" : undefined}
              className={`group block p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:border-cyan-500/50 transition-all duration-500 transform hover:scale-110 hover:rotate-3`}
              style={{
                transform: 'perspective(1000px)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) rotateY(10deg) rotateX(5deg) scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)';
              }}
            >
              <div className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${social.color} ${social.hoverColor} rounded-full flex items-center justify-center group-hover:scale-125 transition-all duration-300 shadow-lg group-hover:shadow-2xl`}>
                  <social.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {social.name}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {social.description}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-gray-700/50">
          <p className="text-gray-400">
            Designed & Built by Swastik Garg
             {/* • © 2025 All rights reserved */}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
