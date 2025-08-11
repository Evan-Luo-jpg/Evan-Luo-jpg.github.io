"use client";

import { useState, useEffect, useRef } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import Publications from '../components/Publications';
import Snowfall from '../components/Snowfall';
import SnowScrollEffect from '../components/SnowScrollEffect';
import { getProjects } from '../lib/projects';
import { getPapers, Paper } from '../lib/papers';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  repo?: string;
  demo?: string;
}

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [papers, setPapers] = useState<Paper[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [projectsData, papersData] = await Promise.all([
          getProjects(),
          getPapers()
        ]);
        setProjects(projectsData);
        setPapers(papersData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollProgress = scrollY / (documentHeight - windowHeight);
      
      // Update background position based on scroll
      const backgroundPosition = scrollProgress * 300; // 300vh total background height
      document.documentElement.style.setProperty('--scroll-bg-position', `${backgroundPosition}vh`);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#eaf5fd]" style={{ '--scroll-bg-position': '0vh' } as React.CSSProperties}>
      <Snowfall />
      <SnowScrollEffect>
        <NavBar />
        
        <Hero onScrollToProjects={scrollToProjects} />
        
        <main>
          {/* Projects Section */}
          <section ref={projectsRef} className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-[#023E8A] mb-6 fade-in-up">
                  Featured Projects
                </h2>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto fade-in-up" style={{ animationDelay: '0.3s' }}>
                  A collection of innovative solutions and creative endeavors, each crafted with precision and passion
                </p>
              </div>

              {loading ? (
                <div className="flex justify-center items-center min-h-[400px]">
                  <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#023E8A]"></div>
                </div>
              ) : error ? (
                <div className="text-center text-red-600 bg-white/70 backdrop-blur-sm rounded-2xl p-8">
                  <h3 className="text-xl font-semibold mb-2">Error Loading Projects</h3>
                  <p>{error}</p>
                </div>
              ) : projects.length === 0 ? (
                <div className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-8">
                  <h3 className="text-xl font-semibold mb-2 text-[#023E8A]">No Projects Yet</h3>
                  <p className="text-gray-600">Projects will appear here as they become available.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {projects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* Publications Section */}
          <section id="publications" className="py-20 px-4 bg-white/10 backdrop-blur-sm">
            <Publications papers={papers} />
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-20 px-4 bg-white/10 backdrop-blur-sm">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-[#023E8A] mb-6 fade-in-up">
                Get in Touch
              </h2>
              <p className="text-xl text-gray-700 mb-12 fade-in-up" style={{ animationDelay: '0.3s' }}>
                Ready to collaborate on something amazing? Let&apos;s connect!
              </p>
              
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-4xl mb-4">📧</div>
                    <h3 className="text-xl font-semibold mb-2 text-[#023E8A]">Email</h3>
                    <a 
                      href="mailto:evan_luo@brown.edu" 
                      className="text-gray-700 hover:text-[#023E8A] transition-colors duration-200"
                    >
                      evan_luo@brown.edu
                    </a>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-4xl mb-4">📍</div>
                    <h3 className="text-xl font-semibold mb-2 text-[#023E8A]">Location</h3>
                    <p className="text-gray-700">Providence, RI</p>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="flex justify-center space-x-6">
                    <a 
                      href="https://github.com/Evan-Luo-jpg" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-6 py-3 bg-[#023E8A] text-white rounded-lg hover:bg-[#012a5a] transition-colors duration-200"
                    >
                      <span>🐙</span>
                      <span>GitHub</span>
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/evan-luo-48a755261/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-6 py-3 border border-[#023E8A] text-[#023E8A] rounded-lg hover:bg-[#023E8A]/10 transition-colors duration-200"
                    >
                      <span>💼</span>
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </SnowScrollEffect>
    </div>
  );
}
