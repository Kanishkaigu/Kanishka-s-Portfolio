"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Show loading screen for 3.5 seconds
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3500);

        return () => clearTimeout(timer);
    }, []);



    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    key="loading-screen"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative flex flex-col items-center gap-6 px-4"
                    >
                        {/* Animated Logo/Icon Placeholder */}
                        <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ duration: 1, ease: "backOut" }}
                            className="w-16 h-16 md:w-20 md:h-20 border-4 border-primary rounded-xl flex items-center justify-center mb-4"
                        >
                            <motion.div
                                animate={{
                                    scale: [1, 1.2, 1],
                                    rotate: [0, 90, 180, 270, 360],
                                }}
                                transition={{
                                    duration: 3,
                                    ease: "linear",
                                    repeat: Infinity,
                                }}
                                className="w-8 h-8 bg-primary rounded-md"
                            />
                        </motion.div>

                        {/* First Line - Clarity from Complexity */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-bold text-center tracking-tight text-foreground"
                        >
                            {Array.from("Clarity from Complexity").map((char, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.3 + index * 0.03,
                                        type: "spring",
                                        stiffness: 100
                                    }}
                                    className="inline-block"
                                >
                                    {char === " " ? "\u00A0" : char}
                                </motion.span>
                            ))}
                        </motion.h1>

                        {/* Second Line - Build Innovate Scale */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.0 }}
                            className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center text-primary"
                        >
                            {['Build ', 'Innovate', ' Scale'].map((word, wordIndex) => (
                                <span key={wordIndex}>
                                    {Array.from(word).map((char, charIndex) => (
                                        <motion.span
                                            key={`word${wordIndex}-char${charIndex}`}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{
                                                duration: 0.4,
                                                delay: 1.2 + (wordIndex * 0.2) + (charIndex * 0.02),
                                                type: "spring",
                                                stiffness: 120
                                            }}
                                            className={`inline-block ${wordIndex === 1 ? 'font-bold' : ''}`}
                                        >
                                            {char === ' ' ? '\u00A0' : char}
                                        </motion.span>
                                    ))}
                                </span>
                            ))}
                        </motion.h2>

                        {/* Loading Bar */}
                        <motion.div
                            initial={{ width: 0, opacity: 0 }}
                            animate={{ width: "200px", opacity: 1 }}
                            transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
                            className="h-1 bg-muted mt-8 rounded-full overflow-hidden"
                        >
                            <motion.div
                                initial={{ x: "-100%" }}
                                animate={{ x: "0%" }}
                                transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
                                className="h-full bg-primary w-full"
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
