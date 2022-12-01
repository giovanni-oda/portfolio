import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

export const useFirebase = () => {
  const { apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId, measurementId } =
    useRuntimeConfig();

  const firebaseConfig = {
    apiKey,
    authDomain,
    projectId,
    storageBucket,
    messagingSenderId,
    appId,
    measurementId
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const firestore = getFirestore(firebaseApp);

  return {
    firebaseApp,
    firestore
  };
};
