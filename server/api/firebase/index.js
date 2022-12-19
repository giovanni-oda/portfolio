// import { initializeApp } from 'firebase/app';

export default defineEventHandler(async (event) => {
  //   const config = useRuntimeConfig();
  //   const firebaseConfig = {
  //     apiKey: config.public.apiKey,
  //     authDomain: config.public.authDomain,
  //     projectId: config.public.projectId,
  //     storageBucket: config.public.storageBucket,
  //     messagingSenderId: config.public.messagingSenderId,
  //     appId: config.public.appId,
  //     measurementId: config.public.measurementId
  //   };

  //   const firebaseApp = initializeApp(firebaseConfig);

  //   console.log('firebaseApp 1', firebaseApp);
  console.log('firebaseApp 1');

  return { teste: 'teste' };
});
