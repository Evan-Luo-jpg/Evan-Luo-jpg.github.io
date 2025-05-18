export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">© {new Date().getFullYear()} Evan Luo. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com/Evan-Luo-jpg" className="text-gray-400 hover:text-white transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/evan-luo-48a755261/" className="text-gray-400 hover:text-white transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}