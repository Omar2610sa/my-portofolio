'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Logo from '../Navbar/Logo';

export default function Loader() {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 90) return prev;
                return prev + Math.random() * 30;
            });
        }, 200);

        const timer = setTimeout(() => {
            setProgress(100);
            setTimeout(() => {
                setIsLoading(false);
            }, 300);
        }, 2000); // 2 ثواني

        return () => {
            clearInterval(interval);
            clearTimeout(timer);
        };
    }, []);

    return (
        <>
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                >
                    {/* Logo */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 1.2, opacity: 0 }}
                        transition={{
                            duration: 0.6,
                            ease: 'easeOut',
                        }}
                        className="mb-12"
                    >
                        <Logo />
                    </motion.div>

                    {/* Progress Bar */}
                    <div className="w-64 h-1 bg-gray-700 rounded-full overflow-hidden border border-border">
                        <motion.div
                            className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                        />
                    </div>

                    {/* Percentage */}
                    <motion.p
                        className="mt-4 text-sm text-gray-400"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        {Math.round(progress)}%
                    </motion.p>
                </motion.div>
            )}
        </>
    );
}