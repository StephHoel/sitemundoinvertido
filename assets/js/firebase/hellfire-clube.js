import app from './app.js';
import { addDoc, collection, getFirestore, getDocs } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js';

export async function subscribeToHellfireClub(subscription){
   const db = getFirestore(app);
   const hellfireClubeCollection = collection(db, 'hellfire-clube');
   const docRef = await addDoc(hellfireClubeCollection, subscription);
   return docRef.id;
}

export async function getHellfireClubSubscriptions(){
   const db = getFirestore(app);
   const hellfireClubCollection = collection(db, 'hellfire-clube');
   const hellfireClubCollectionSnapshot = await getDocs(hellfireClubCollection);
   const subscriptions = hellfireClubCollectionSnapshot.docs.map(doc => doc.data());
   return subscriptions;
}