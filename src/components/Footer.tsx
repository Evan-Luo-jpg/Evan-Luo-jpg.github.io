export default function Footer() {
  return (
    <footer className="bg-[#fdf6e3] border-t-2 border-[#2c3e50] py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-4">
            <a href="https://github.com/Evan-Luo-jpg" className="text-[#2c3e50] hover:text-[#1a252f] transition-colors relative group">
              <span className="relative z-10">GitHub</span>
              <div className="absolute -top-2 -left-2 -right-2 -bottom-2 bg-[#fdf6e3] opacity-0 group-hover:opacity-100 transition-opacity border-2 border-[#2c3e50] transform rotate-1"></div>
            </a>
            <a href="https://www.linkedin.com/in/evan-luo-48a755261/" className="text-[#2c3e50] hover:text-[#1a252f] transition-colors relative group">
              <span className="relative z-10">LinkedIn</span>
              <div className="absolute -top-2 -left-2 -right-2 -bottom-2 bg-[#fdf6e3] opacity-0 group-hover:opacity-100 transition-opacity border-2 border-[#2c3e50] transform -rotate-1"></div>
            </a>
          </div>
          <p className="text-[#2c3e50] text-sm">© {new Date().getFullYear()} Evan Luo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}