'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            {isVisible && (
                <motion.button
                    onClick={scrollToTop}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-primary hover:bg-primary/90 text-white flex items-center justify-center shadow-lg transition-all hover:scale-110"
                    aria-label="Scroll to top"
                >
                    <ArrowUp className="w-6 h-6" />
                </motion.button>
            )}
        </>
    );
}