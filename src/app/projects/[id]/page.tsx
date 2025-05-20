import { getProjects } from '../../../lib/projects';
import NavBar from '../../../components/NavBar';
import Footer from '../../../components/Footer';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ProjectImage from './ProjectImage';

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({
    id: project.id,
  }));
}

interface PageProps {
  params: {
    id: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function ProjectPage({ params }: PageProps) {
  const projects = await getProjects();
  const projectId = params.id;
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <main className="max-w-4xl mx-auto px-4 py-16">
        <Link href="/" className="text-blue-600 hover:text-blue-800 mb-8 inline-block">
          ← Back to Projects
        </Link>
        
        <article className="bg-white rounded-xl shadow-lg overflow-hidden">
          {project.demo && (
            <div className="relative w-full h-[500px]">
              <ProjectImage src={project.demo} alt={project.title} />
            </div>
          )}
          
          <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
            
            <div className="mb-6 flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="prose max-w-none">
              <p className="text-gray-600 text-lg leading-relaxed">
                {project.description}
              </p>
            </div>

            {project.repo && (
              <div className="mt-8">
                <a 
                  href={project.repo} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                >
                  View on GitHub →
                </a>
              </div>
            )}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
} 