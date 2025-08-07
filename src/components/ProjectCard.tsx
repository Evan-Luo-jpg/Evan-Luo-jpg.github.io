"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  repo?: string;
  demo?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isEven = index % 2 === 0;

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

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="relative frosted-glass rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group">
        <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
          {/* Image Section */}
          {project.demo && (
            <div className="lg:w-2/5 h-40 lg:h-48 relative overflow-hidden">
              <Image
                src={project.demo}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = 'https://via.placeholder.com/400x300?text=Project+Image';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          )}

          {/* Content Section */}
          <div className="lg:w-3/5 p-4 lg:p-5 flex flex-col justify-center relative z-20">
            <h3 className="text-lg lg:text-xl font-semibold mb-2 text-[#023E8A]">
              {project.title}
            </h3>
            <p className="text-gray-700 mb-3 leading-relaxed text-sm lg:text-base line-clamp-3">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-1 mb-3">
              {project.technologies.slice(0, 3).map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-2 py-1 bg-[#023E8A]/10 text-[#023E8A] rounded-full text-xs font-medium border border-[#023E8A]/20 hover:bg-[#023E8A]/20 transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                  +{project.technologies.length - 3} more
                </span>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 flex-wrap">
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 bg-[#023E8A] text-white rounded-lg hover:bg-[#012a5a] transition-colors duration-200 font-medium flex items-center space-x-1 text-sm"
                >
                  <span>View Code</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 