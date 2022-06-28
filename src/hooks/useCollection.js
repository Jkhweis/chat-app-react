import { useState, useEffect } from 'react';
import { db } from '../firebase/config';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';

export const useCollection = (messages) => {
  const [documents, setDocuments] = useState(null);

  useEffect(() => {
    const colRef = collection(db, 'messages');
    const q = query(colRef, orderBy('createdAt', 'asc'));

    const unsub = onSnapshot(q, (snapshot) => {
      let results = [];
      snapshot.docs.forEach((doc) => {
        results.push({ id: doc.id, ...doc.data() });
      });
      setDocuments(results);
    });

    return () => unsub();
  }, [messages]);

  return { documents };
};

//    query(colRef, where('text', '==', 'Play GoldenEye 007'));
