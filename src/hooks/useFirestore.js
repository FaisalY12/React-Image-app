import { useEffect, useState } from 'react';
import { appFirestore} from '../firebase/config';

const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const unsub = appFirestore.collection(collection)
        .orderBy('createdAt', 'desc')
        .onSnapshot((snap) => {
            let documents = [];
            snap.forEach(doc => {
                documents.push({...doc.data(), id: doc.id});
            });
            setDocs(documents);
        });

        return () => unsub(); // clean up function
        
    }, [collection])

    return { docs };
}

export default useFirestore;
