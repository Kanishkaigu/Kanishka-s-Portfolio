"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Show loading screen for 2.5 seconds
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    if (!isLoading) return null;

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    key="loading-screen"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-[#B09E80]"
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative flex flex-col items-center"
                    >
                        {/* Brand Logo with floating animation */}
                        <motion.div
                            className="relative w-64 h-64 md:w-80 md:h-80"
                            animate={{
                                y: [-10, 10, -10],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <img
                                src="/assets/brand-logo.png"
                                alt="KanalytiQ Logo"
                                className="w-full h-full object-contain drop-shadow-2xl"
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
