import React from 'react';
import { motion } from 'framer-motion';

const AnimatedComponent = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            Hello, Framer Motion!
        </motion.div>
    );
};

export default AnimatedComponent;