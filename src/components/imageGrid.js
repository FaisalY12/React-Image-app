import React from 'react';
import useFirestore from '../hooks/useFirestore'
import { motion } from "framer-motion";

const ImageGrid = (props) => {
    const {setSelectedImg} = props;
    const { docs } = useFirestore('images');

    return (
     <div className="img-grid">
         {docs && docs.map(doc => (
             <motion.div className="img-wrap" key={doc.id}
             onClick = {() => setSelectedImg(doc.url)}
             layout
             whileHover={{opacity: 1, scale: 1.05}}
             motion={{}}>
                 <motion.img src={doc.url} alt="uploaded"
                 initial={{opacity: 0}}
                 animate={{opacity: 1}}
                 transition ={{delay:1}} />
             </motion.div>
         ))}
    </div>
    )
}

export default ImageGrid;