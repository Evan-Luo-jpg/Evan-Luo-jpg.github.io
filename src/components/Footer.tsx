export default function Footer() {
  return (
    <footer className="bg-[#023E8A] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <span className="mr-2">📧</span>
                <a 
                  href="mailto:evan_luo@brown.edu" 
                  className="hover:text-blue-200 transition-colors duration-200"
                >
                  evan_luo@brown.edu
                </a>
              </p>
              <p className="flex items-center">
                <span className="mr-2">📍</span>
                <span>Providence, RI</span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a 
                href="#projects" 
                className="block hover:text-blue-200 transition-colors duration-200"
              >
                Projects
              </a>
              <a 
                href="/publications" 
                className="block hover:text-blue-200 transition-colors duration-200"
              >
                Publications
              </a>
              <a 
                href="#contact" 
                className="block hover:text-blue-200 transition-colors duration-200"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect</h3>
            <div className="space-y-2">
              <a 
                href="https://github.com/Evan-Luo-jpg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center hover:text-blue-200 transition-colors duration-200"
              >
                <span className="mr-2">🐙</span>
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/evan-luo-48a755261/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center hover:text-blue-200 transition-colors duration-200"
              >
                <span className="mr-2">💼</span>
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-sm text-white/80">
            © 2024 Evan Luo. Built with ❄️ and Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}