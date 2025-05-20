// src/components/ProjectList.tsx
"use client";

import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

type Project = {
  title: string;
  description: string;
  repo: string;
  demo?: string;
};

export default function ProjectList() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const snapshot = await getDocs(collection(db, 'projects'));
      const data = snapshot.docs.map(doc => doc.data() as Project);
      setProjects(data);
    };

    fetchProjects();
  }, []);

  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, idx) => (
        <div key={idx} className="border rounded-2xl shadow p-6">
          <h2 className="text-xl font-bold mb-2">{project.title}</h2>
          <p className="mb-2">{project.description}</p>
          <div className="flex gap-4">
            <a href={project.repo} target="_blank" className="text-blue-500">GitHub</a>
            {project.demo && <a href={project.demo} target="_blank" className="text-blue-500">Live Demo</a>}
          </div>
        </div>
      ))}
    </div>
  );
}
