"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-[#023E8A] hover:text-[#012a5a] transition-colors">
            Evan Luo
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-[#023E8A] hover:text-[#012a5a] transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <Link
              href="#publications"
              className="text-[#023E8A] hover:text-[#012a5a] transition-colors duration-200 font-medium"
            >
              Publications
            </Link>
            <a
              href="#contact"
              className="text-[#023E8A] hover:text-[#012a5a] transition-colors duration-200 font-medium"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#023E8A] hover:bg-[#023E8A]/10 transition-colors duration-200"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md rounded-lg shadow-lg mt-2 py-4">
            <div className="flex flex-col space-y-4 px-4">
              <Link
                href="/"
                className="text-[#023E8A] hover:text-[#012a5a] transition-colors duration-200 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="#publications"
                className="text-[#023E8A] hover:text-[#012a5a] transition-colors duration-200 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Publications
              </Link>
              <a
                href="#contact"
                className="text-[#023E8A] hover:text-[#012a5a] transition-colors duration-200 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}