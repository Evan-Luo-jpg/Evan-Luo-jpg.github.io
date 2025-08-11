"use client";

import SnowReveal from './SnowReveal';
import { Paper } from '../lib/papers';

interface PublicationsProps {
  papers: Paper[];
}

export default function Publications({ papers }: PublicationsProps) {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SnowReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#023E8A] mb-6 fade-in-up">
              Publications
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto fade-in-up" style={{ animationDelay: '0.3s' }}>
              Research contributions and academic publications
            </p>
          </div>
        </SnowReveal>

        <div className="space-y-8">
          {papers.map((paper) => (
            <SnowReveal key={paper.id}>
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
            </SnowReveal>
          ))}
        </div>
      </div>
    </section>
  );
} 