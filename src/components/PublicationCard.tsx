"use client";

import { useEffect, useRef, useState } from 'react';

interface PublicationCardProps {
  paper: {
    id: string;
    title: string;
    link: string;
    conference: string;
  };
  index: number;
}

export default function PublicationCard({ paper, index }: PublicationCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
        <h3 className="text-xl font-semibold mb-3 text-[#023E8A]">
          {paper.title}
        </h3>
        
        <div className="flex items-center mb-4">
          <span className="text-sm text-gray-600 bg-[#023E8A]/10 px-3 py-1 rounded-full border border-[#023E8A]/20">
            {paper.conference}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">📄</span>
            <span className="text-sm text-gray-600">Research Paper</span>
          </div>
          
          <a
            href={paper.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-[#023E8A] text-white rounded-lg hover:bg-[#012a5a] transition-colors duration-200 font-medium flex items-center space-x-2"
          >
            <span>Read Paper</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
} 