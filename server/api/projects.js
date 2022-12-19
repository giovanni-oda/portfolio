import { db } from '../utils/firebase';

export default defineEventHandler(async (event) => {
  const projectsRef = db.collection('projects');
  const snapshot = await projectsRef.get();
  const projectsData = [];
  snapshot.forEach((doc) => {
    // console.log(doc.id, '=>', doc.data());
    projectsData.push({
      id: doc.id,
      ...doc.data()
    });
  });
  return projectsData;
});
