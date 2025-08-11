"use client";

import Image from 'next/image';

interface HeroProps {
  onScrollToProjects: () => void;
}

export default function Hero({ onScrollToProjects }: HeroProps) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Light Blue Color */}
      <div className="absolute inset-0 z-0">
        {/* Very subtle overlay */}
        <div className="absolute inset-0 z-5" />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center text-white px-4">
        <h1 className="text-6xl md:text-8xl text-[#023E8A] font-bold mb-6 fade-in-up text-shadow-lg">
          Evan Luo
        </h1>
        <p className="text-2xl md:text-3xl mb-8 font-light fade-in-up text-shadow text-gray-700" style={{ animationDelay: '0.3s' }}>
          Code on the Slopes
        </p>
        <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto fade-in-up text-shadow text-gray-700"  style={{ animationDelay: '0.6s' }}>
          Software Engineer &amp; Researcher crafting elegant solutions in the digital wilderness
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up" style={{ animationDelay: '0.9s' }}>
          <button
            onClick={onScrollToProjects}
            className="px-8 py-4 btn-primary rounded-2xl text-white font-medium transition-all duration-300 hover:scale-105 text-shadow"
          >
            View Projects
          </button>
          <a
            href="#contact"
            className="px-8 py-4 btn-secondary rounded-2xl border border-[#023E8A] text-[#023E8A] font-medium transition-all duration-300 hover:scale-105 text-shadow"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
} 