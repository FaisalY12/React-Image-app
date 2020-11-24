import { useState, useEffect } from 'react';
import { appStorage, appFirestore, timestamp} from '../firebase/config'; //using storage to store file

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

  

    useEffect( ()=> {
    //root teferences
    const storageRef = appStorage.ref(file.name);
    const collectionRef = appFirestore.collection('images');
    //state change listeners 3 functions - observes progress, observes error, completion.
    storageRef.put(file).on('state_changed', (snapshot) => {
        let percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(percent);
    }, (error) => {
        setError(error);
    },  async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp();
        collectionRef.add({url:url, createdAt: createdAt });
        setUrl(url);
        });

    }, [file])
    return {url, error, progress}
}

export default useStorage;