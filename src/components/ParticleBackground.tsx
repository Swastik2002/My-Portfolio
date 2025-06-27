import { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<
    Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }>
  >([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const height = window.innerHeight; 
      const width = window.innerWidth;

      canvas.width = width;
      canvas.height = height;

      canvas.style.height = `${height}px`;
      canvas.style.width = `${width}px`;
    };

    // Delay initial resize to let DOM render
    setTimeout(() => {
      resizeCanvas();
      initializeParticles();
    }, 100);

    const initializeParticles = () => {
      const width = canvas.width;
      const height = canvas.height;

      particlesRef.current = [];

      const isMobile = window.innerWidth <= 768;
      const particleCount = isMobile ? 50 : 150;

      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 3 + 1.5,
          opacity: Math.random() * 0.5 + 0.3,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;

      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        ctx.save();
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(34, 211, 238, ${particle.opacity})`;
        ctx.shadowColor = `rgba(34, 211, 238, ${particle.opacity})`;
        ctx.shadowBlur = 50; // More blur = more glow
        ctx.fill();
        ctx.restore();

        particles.slice(index + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(34, 211, 238, ${0.5 * (1 - distance / 120)})`; // increased visibility
            ctx.lineWidth = 1.5; // increased line width
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      resizeCanvas();
      initializeParticles(); // Recalculate particles for new dimensions
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', resizeCanvas);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full pointer-events-none z-0"
      style={{ height: `${document.documentElement.scrollHeight}px` }}
    />
  );
};

export default ParticleBackground;
