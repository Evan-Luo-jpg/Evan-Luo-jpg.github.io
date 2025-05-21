"use client";

import { useEffect, useState } from 'react';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { getProjects, Project } from "../lib/projects";
import Image from 'next/image';
import { getPapers, Paper} from "../lib/papers"

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [papers, setPapers] = useState<Paper[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [fetchedProjects, fetchedPapers] = await Promise.all([
          getProjects(),
          getPapers()
        ]);
        setProjects(fetchedProjects);
        setPapers(fetchedPapers);
      } catch (err) {
        setError('Failed to load data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-[#fdf6e3]">
      <NavBar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 relative">
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-0 top-0 bottom-0 w-8 border-r-2 border-[#2c3e50]"></div>
          <div className="pl-12">
            <h1 className="text-6xl md:text-8xl font-bold text-[#2c3e50] animate-fade-in">
              Evan Luo
            </h1>
            <p className="mt-6 text-2xl md:text-3xl text-[#2c3e50] animate-fade-in-delay">
              Software Engineer & Researcher
            </p>
            <div className="mt-8 flex gap-4 animate-fade-in-delay-2">
              <a href="#projects" className="px-6 py-3 bg-[#2c3e50] text-white rounded-none hover:bg-[#1a252f] transition-colors shadow-lg hover:shadow-xl border-2 border-[#2c3e50]">
                View Projects
              </a>
              <a href="#contact" className="px-6 py-3 border-2 border-[#2c3e50] text-[#2c3e50] rounded-none hover:bg-[#fdf6e3] transition-colors">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4">
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-0 top-0 bottom-0 w-8 border-r-2 border-[#2c3e50]"></div>
          <div className="pl-12">
            <h2 className="text-4xl font-bold mb-8 text-[#2c3e50]">Featured Projects</h2>
            {loading ? (
              <div className="flex justify-center items-center min-h-[200px]">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2c3e50]"></div>
              </div>
            ) : error ? (
              <div className="text-center text-red-600">
                {error}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project) => (
                  <div key={project.id} className="bg-white rounded-none shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-[#2c3e50]">
                    {project.demo && (
                      <div className="w-full h-72 relative overflow-hidden">
                        <Image
                          src={project.demo} 
                          alt={project.title}
                          width={800}
                          height={400}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          onError={(e) => {
                            e.currentTarget.src = 'https://via.placeholder.com/300x200?text=Not+Found';
                          }}
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className="text-2xl font-semibold mb-2 text-[#2c3e50]">{project.title}</h3>
                      <p className="text-[#2c3e50]">{project.description}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <span 
                            key={index}
                            className="px-3 py-1 bg-[#fdf6e3] text-[#2c3e50] rounded-none text-sm border border-[#2c3e50]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      {project.repo && (
                        <div className="mt-4">
                          <a 
                            href={project.repo} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-[#2c3e50] hover:text-[#1a252f] font-medium"
                          >
                            View Project →
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Papers Section */}
      <section id="papers" className="py-16 px-4 bg-[#faf3e0]">
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-0 top-0 bottom-0 w-8 border-r-2 border-[#2c3e50]"></div>
          <div className="pl-12">
            <h2 className="text-4xl font-bold mb-8 text-[#2c3e50]">Research Papers</h2>
            {loading ? (
              <div className="flex justify-center items-center min-h-[200px]">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2c3e50]"></div>
              </div>
            ) : error ? (
              <div className="text-center text-red-600">
                {error}
              </div>
            ) : (
              <div className="space-y-6">
                {papers.map((paper) => (
                  <div key={paper.id} className="bg-white rounded-none shadow-lg p-6 hover:shadow-xl transition-all duration-300 border-2 border-[#2c3e50]">
                    <h3 className="text-2xl font-semibold mb-2 text-[#2c3e50]">{paper.title}</h3>
                    <p className="text-[#2c3e50] mb-2">{paper.conference}</p>
                    {paper.link && (
                      <div className="mt-4">
                        <a 
                          href={paper.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-[#2c3e50] hover:text-[#1a252f] font-medium"
                        >
                          Read Paper →
                        </a>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-0 top-0 bottom-0 w-8 border-r-2 border-[#2c3e50]"></div>
          <div className="pl-12">
            <h2 className="text-4xl font-bold mb-8 text-[#2c3e50]">Get in Touch</h2>
            <div className="bg-white rounded-none shadow-lg p-8 border-2 border-[#2c3e50]">
              <p className="text-[#2c3e50] mb-6 text-center">Feel free to reach out to me at:</p>
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-2xl">📧</span>
                  <a href="mailto:evan_luo@brown.edu" className="text-[#2c3e50] hover:text-[#1a252f]">
                    evan_luo@brown.edu
                  </a>
                </div>
                <div className="flex items-center justify-center space-x-4">
                  <a href="https://github.com/Evan-Luo-jpg" className="text-[#2c3e50] hover:text-[#1a252f] transition-colors">
                    GitHub
                  </a>
                  <a href="https://www.linkedin.com/in/evan-luo-48a755261/" className="text-[#2c3e50] hover:text-[#1a252f] transition-colors">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
