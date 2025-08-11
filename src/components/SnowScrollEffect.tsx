"use client";

import { useEffect, useState } from 'react';

interface SnowScrollEffectProps {
  children: React.ReactNode;
}

interface Particle {
  left: number;
  delay: number;
  duration: number;
  opacity: number;
}

export default function SnowScrollEffect({ children }: SnowScrollEffectProps) {
  const [snowIntensity, setSnowIntensity] = useState(0);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = Math.min(currentScrollY / maxScroll, 1);
      setSnowIntensity(scrollProgress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initialize intensity on load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Regenerate particles whenever intensity changes
    const particleCount = Math.floor(snowIntensity * 60) + 15; // 15-75 particles
    const newParticles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        left: Math.random() * 100,
        delay: Math.random() * 10,
        duration: 12 + Math.random() * 8,
        opacity: 0.3 + Math.random() * 0.5,
      });
    }

    setParticles(newParticles);
  }, [snowIntensity]);

  return (
    <div className="relative">
      {/* Additional Snow Layer Overlays */}
      <div
        className="fixed inset-0 pointer-events-none z-10 transition-opacity duration-1000"
        style={{
          opacity: Math.min(snowIntensity * 0.3, 0.3),
          background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.1))',
        }}
      />

      {/* Additional Snow Particles */}
      <div className="fixed inset-0 pointer-events-none z-15">
        {particles.map((p, i) => (
          <div
            key={i}
            className="snow-particle"
            style={{
              left: `${p.left}%`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
              opacity: p.opacity,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20">{children}</div>
    </div>
  );
}
