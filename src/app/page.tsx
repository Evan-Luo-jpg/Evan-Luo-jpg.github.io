"use client";

import { useEffect, useState } from 'react';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { getProjects, Project } from "../lib/projects";
import Link from 'next/link';


export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const fetchedProjects = await getProjects();
        setProjects(fetchedProjects);
      } catch (err) {
        setError('Failed to load projects');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <NavBar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-4xl mx-auto text-center relative">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-fade-in">
            Evan Luo
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-gray-600 animate-fade-in-delay">
            Software Engineer & Researcher
          </p>
          <div className="mt-8 flex justify-center gap-4 animate-fade-in-delay-2">
            <a href="#projects" className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
              View Projects
            </a>
            <a href="#contact" className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-colors">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
          {loading ? (
            <div className="flex justify-center items-center min-h-[200px]">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : error ? (
            <div className="text-center text-red-600">
              {error}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  {project.demo && (
                    <Link href={`/projects/${project.id}`} className="block w-full h-72 group">
                      <div className="w-full h-full relative overflow-hidden">
                        <img 
                          src={project.demo} 
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          onError={(e) => {
                            e.currentTarget.src = 'https://via.placeholder.com/300x200?text=Not+Found';
                          }}
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                          <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                            View Details
                          </span>
                        </div>
                      </div>
                    </Link>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-600">{project.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
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
                          className="text-blue-600 hover:text-blue-800 font-medium"
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
      </section>

      {/* Papers Section */}
      <section id="papers" className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Research Papers</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold mb-2">Paper Title 1</h3>
              <p className="text-gray-600 mb-2">Authors: Evan Luo, Co-author</p>
              <p className="text-gray-600">Published in: Journal/Conference Name</p>
              <div className="mt-4">
                <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Read Paper →</a>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold mb-2">Paper Title 2</h3>
              <p className="text-gray-600 mb-2">Authors: Evan Luo, Co-author</p>
              <p className="text-gray-600">Published in: Journal/Conference Name</p>
              <div className="mt-4">
                <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Read Paper →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-gray-600 mb-6 text-center">Feel free to reach out to me at:</p>
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-2">
                <span className="text-2xl">📧</span>
                <a href="mailto:evan_luo@brown.edu" className="text-blue-600 hover:text-blue-800">evan_luo@brown.edu</a>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <a href="https://github.com/Evan-Luo-jpg" className="text-gray-600 hover:text-gray-900 transition-colors">
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/evan-luo-48a755261/" className="text-gray-600 hover:text-gray-900 transition-colors">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
