import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

export const app = initializeApp({
  credential: cert('./firebase-admin-sdk-private-key.json')
});

export const db = getFirestore();
