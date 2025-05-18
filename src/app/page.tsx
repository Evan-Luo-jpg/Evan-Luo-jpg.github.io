import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Your Name
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Software Engineer & Researcher
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project cards will be dynamically loaded from Firebase */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Project 1</h3>
              <p className="text-gray-600">Description of your first project</p>
              <div className="mt-4 flex gap-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">React</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">Node.js</span>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Project 2</h3>
              <p className="text-gray-600">Description of your second project</p>
              <div className="mt-4 flex gap-2">
                <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Next.js</span>
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">TypeScript</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Papers Section */}
      <section id="papers" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Research Papers</h2>
          <div className="space-y-6">
            {/* Paper entries will be dynamically loaded from Firebase */}
            <div className="border-b pb-6">
              <h3 className="text-xl font-semibold mb-2">Paper Title 1</h3>
              <p className="text-gray-600 mb-2">Authors: Your Name, Co-author</p>
              <p className="text-gray-600">Published in: Journal/Conference Name</p>
            </div>
            <div className="border-b pb-6">
              <h3 className="text-xl font-semibold mb-2">Paper Title 2</h3>
              <p className="text-gray-600 mb-2">Authors: Your Name, Co-author</p>
              <p className="text-gray-600">Published in: Journal/Conference Name</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Contact</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-600 mb-4">Feel free to reach out to me at:</p>
            <div className="space-y-2">
              <p className="text-gray-800">📧 your.email@example.com</p>
              <p className="text-gray-800">🔗 <a href="https://github.com/yourusername" className="text-blue-600 hover:underline">GitHub</a></p>
              <p className="text-gray-800">🔗 <a href="https://linkedin.com/in/yourusername" className="text-blue-600 hover:underline">LinkedIn</a></p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
