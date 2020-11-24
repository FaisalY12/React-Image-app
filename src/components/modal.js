import React from 'react';
import { motion } from "framer-motion";

const Modal = (props) => {
    const {selectedImg, setSelectedImg} = props;

    const handleClick = ({target}) => {
        if(target.classList.contains('backdrop')) {
            setSelectedImg(null);
        }
    }

    return (
        <motion.div className="backdrop"
        onClick = {handleClick}
        initial={{opacity:0}}
        animate={{opacity:1}}
        >
            <motion.img src={selectedImg} alt=" enlarged"
            initial={{opacity:0, y:"+100vh"}}
            animate={{opacity:1, y: "0vh"}}
            transition={{delay: 1}} />
        </motion.div>
    )
}

export default Modal;