import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getFunctions } from 'firebase/functions';
import { getStorage } from 'firebase/storage';

export const useFirebase = async () => {
  // const { apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId, measurementId } =
  //   useRuntimeConfig();

  const config = useRuntimeConfig();

  const firebaseConfig = {
    apiKey: config.public.apiKey,
    authDomain: config.public.authDomain,
    projectId: config.public.projectId,
    storageBucket: config.public.storageBucket,
    messagingSenderId: config.public.messagingSenderId,
    appId: config.public.appId,
    measurementId: config.public.measurementId
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const analytics = getAnalytics(firebaseApp);
  const auth = getAuth(firebaseApp);
  const db = getFirestore(firebaseApp);
  const functions = getFunctions(firebaseApp);
  const storage = getStorage(firebaseApp);

  return { analytics, auth, db, functions, storage };
};
