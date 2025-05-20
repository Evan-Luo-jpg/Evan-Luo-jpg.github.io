import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { app } from '../firebase';

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  repo?: string;
  demo?: string;
}

const db = getFirestore(app);

export async function getProjects(): Promise<Project[]> {
  try {
    const projectsCollection = collection(db, 'projects');
    const projectsSnapshot = await getDocs(projectsCollection);
    const projects = projectsSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Project[];
    
    return projects;
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
} 