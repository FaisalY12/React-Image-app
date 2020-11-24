import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';
import { motion } from "framer-motion";


const ProcessBar = (props) => {
    const {file, setFile} = props;
    const {url, progress} = useStorage(file); 

    useEffect( () => {
        if(url) {
            setFile(null);
        }
    },[url, setFile])

    console.log(progress, url);



    return (
    <motion.div className="process-bar" 
    initial={{width:0}}
    animate={{width: progress + '%'}}
    ></motion.div>
    )
}

export default ProcessBar;