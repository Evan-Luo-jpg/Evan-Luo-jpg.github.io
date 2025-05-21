"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-[#fdf6e3] border-b-2 border-[#2c3e50]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-[#2c3e50] hover:text-[#1a252f] transition-colors">
              EL
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#projects" className="text-[#2c3e50] hover:text-[#1a252f] transition-colors relative group">
              <span className="relative z-10">Projects</span>
              <div className="absolute -top-2 -left-2 -right-2 -bottom-2 bg-[#fdf6e3] opacity-0 group-hover:opacity-100 transition-opacity border-2 border-[#2c3e50] transform rotate-1"></div>
            </Link>
            <Link href="#papers" className="text-[#2c3e50] hover:text-[#1a252f] transition-colors relative group">
              <span className="relative z-10">Papers</span>
              <div className="absolute -top-2 -left-2 -right-2 -bottom-2 bg-[#fdf6e3] opacity-0 group-hover:opacity-100 transition-opacity border-2 border-[#2c3e50] transform -rotate-1"></div>
            </Link>
            <Link href="#contact" className="text-[#2c3e50] hover:text-[#1a252f] transition-colors relative group">
              <span className="relative z-10">Contact</span>
              <div className="absolute -top-2 -left-2 -right-2 -bottom-2 bg-[#fdf6e3] opacity-0 group-hover:opacity-100 transition-opacity border-2 border-[#2c3e50] transform rotate-1"></div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#2c3e50] hover:text-[#1a252f] focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#fdf6e3] border-t-2 border-[#2c3e50]">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="#projects" className="block px-3 py-2 text-[#2c3e50] hover:text-[#1a252f] transition-colors">
              Projects
            </Link>
            <Link href="#papers" className="block px-3 py-2 text-[#2c3e50] hover:text-[#1a252f] transition-colors">
              Papers
            </Link>
            <Link href="#contact" className="block px-3 py-2 text-[#2c3e50] hover:text-[#1a252f] transition-colors">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}