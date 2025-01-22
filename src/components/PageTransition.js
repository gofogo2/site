import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

export default function PageTransition({ children }) {
    const location = useLocation();

    const pageVariants = {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 0 // 즉시 사라짐
            }
        }
    };

    const pageTransition = {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1] // 부드러운 이징
    };

    return (
        <div className="bg-black w-full h-full">
            <AnimatePresence mode="wait">
                <motion.div
                    key={location.pathname}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={pageVariants}
                    transition={pageTransition}
                    className="w-full h-full"
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </div>
    );
} 