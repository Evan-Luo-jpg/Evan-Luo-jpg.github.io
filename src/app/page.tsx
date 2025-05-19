import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Home() {
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-xl font-semibold mb-2">Project 1</h3>
              <p className="text-gray-600">Description of your first project</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Node.js</span>
              </div>
              <div className="mt-4">
                <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">View Project →</a>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-xl font-semibold mb-2">Project 2</h3>
              <p className="text-gray-600">Description of your second project</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Next.js</span>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">TypeScript</span>
              </div>
              <div className="mt-4">
                <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">View Project →</a>
              </div>
            </div>
          </div>
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
