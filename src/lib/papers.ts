import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { app } from '../firebase';

export interface Paper {
  id: string;
  title: string;
  link: string;
  conference: string;
}

const db = getFirestore(app);

export async function getPapers(): Promise<Paper[]> {
  try {
    const papersCollection = collection(db, 'papers');
    const papersSnapshot = await getDocs(papersCollection);
    const papers = papersSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Paper[];
    
    return papers;
  } catch (error) {
    console.error('Error fetching papers:', error);
    return [];
  }
} 