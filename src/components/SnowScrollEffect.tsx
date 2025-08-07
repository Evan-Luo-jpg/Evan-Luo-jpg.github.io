"use client";

import { useEffect, useState } from 'react';

interface SnowScrollEffectProps {
  children: React.ReactNode;
}

export default function SnowScrollEffect({ children }: SnowScrollEffectProps) {
  const [snowIntensity, setSnowIntensity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Calculate snow intensity based on scroll position
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = Math.min(currentScrollY / maxScroll, 1);
      setSnowIntensity(scrollProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Generate additional snow particles based on intensity
  const generateSnowParticles = () => {
    const particles = [];
    const particleCount = Math.floor(snowIntensity * 60) + 15; // 15-75 particles
    
    for (let i = 0; i < particleCount; i++) {
      const left = Math.random() * 100;
      const animationDelay = Math.random() * 10;
      const animationDuration = 12 + Math.random() * 8; // 12-20 seconds
      
      particles.push(
        <div
          key={i}
          className="snow-particle"
          style={{
            left: `${left}%`,
            animationDelay: `${animationDelay}s`,
            animationDuration: `${animationDuration}s`,
            opacity: 0.3 + Math.random() * 0.5,
          }}
        />
      );
    }
    
    return particles;
  };

  return (
    <div className="relative">
      {/* Additional Snow Layer Overlays */}
      <div 
        className="fixed inset-0 pointer-events-none z-10 transition-opacity duration-1000"
        style={{ 
          opacity: Math.min(snowIntensity * 0.3, 0.3),
          background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.1))'
        }}
      />
      
      {/* Additional Snow Particles */}
      <div className="fixed inset-0 pointer-events-none z-15">
        {generateSnowParticles()}
      </div>
      
      {/* Content */}
      <div className="relative z-20">
        {children}
      </div>
    </div>
  );
} 