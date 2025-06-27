import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "../components/Navigation";
import ParticleBackground from "../components/ParticleBackground";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden relative">
      <ParticleBackground />
      <div className="relative z-10">
        <Navigation />

        <div className="flex flex-col items-center justify-center text-center mt-52 px-4">
          <h1 className="text-6xl font-bold text-cyan-500 mb-4">404</h1>
          <p className="text-2xl text-gray-300 mb-6">
            Oops! The page you're looking for doesn't exist.
          </p>

          <a
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2 bg-gray-800 border border-gray-600/50 rounded-lg text-cyan-400 hover:bg-gray-700 hover:text-cyan-300 transition-all duration-200"
          >
            <ArrowLeft size={18} />
            <span className="text-sm font-medium">Return to Home</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
