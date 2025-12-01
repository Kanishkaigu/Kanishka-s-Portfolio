"use client";

import { motion, AnimatePresence } from "framer-motion";

import Link from "next/link";
import { ArrowRight, Download, Phone, MapPin, X } from "lucide-react";
import { useState } from "react";

export function Hero() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
                    {/* Left Column - Text Content (3 columns) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-3 space-y-8"
                    >
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight" style={{ color: '#B09E80' }}>
                                <span className="block md:inline-block">
                                    {Array.from("Clarity from").map((char, index) => (
                                        <motion.span
                                            key={`part1-${index}`}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{
                                                duration: 0.5,
                                                delay: index * 0.05,
                                                type: "spring",
                                                stiffness: 100
                                            }}
                                            className="inline-block"
                                        >
                                            {char === " " ? "\u00A0" : char}
                                        </motion.span>
                                    ))}
                                </span>
                                <span className="hidden md:inline-block">&nbsp;</span>
                                <span className="block md:inline-block">
                                    {Array.from("Complexity").map((char, index) => (
                                        <motion.span
                                            key={`part2-${index}`}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{
                                                duration: 0.5,
                                                delay: (index + 12) * 0.05, // Delay starts after "Clarity from"
                                                type: "spring",
                                                stiffness: 100
                                            }}
                                            className="inline-block"
                                        >
                                            {char === " " ? "\u00A0" : char}
                                        </motion.span>
                                    ))}
                                </span>
                            </h1>

                            <h2 className="text-2xl md:text-3xl font-semibold">
                                {['Build ', 'Innovate', ' Scale'].map((word, wordIndex) => (
                                    <span key={wordIndex}>
                                        {Array.from(word).map((char, charIndex) => (
                                            <motion.span
                                                key={`word${wordIndex}-char${charIndex}`}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{
                                                    duration: 0.4,
                                                    delay: 1.2 + (wordIndex * 0.3) + (charIndex * 0.03),
                                                    type: "spring",
                                                    stiffness: 120
                                                }}
                                                className={`inline-block ${wordIndex === 1
                                                    ? 'text-primary font-bold'
                                                    : 'text-foreground/80'
                                                    }`}
                                            >
                                                {char === ' ' ? '\u00A0' : char}
                                            </motion.span>
                                        ))}
                                    </span>
                                ))}
                            </h2>
                        </div>

                        <div className="h-1 w-20 bg-primary rounded-full"></div>

                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                            Data Analyst at <span className="font-semibold text-foreground">Tevatiya Services</span> with proven expertise in transforming complex data into actionable business insights. Specialized in developing Customer Insights Dashboards using Power BI and SQL, achieving a <span className="font-semibold text-primary">13.5% improvement</span> in customer retention.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <a
                                href="/resume.pdf"
                                download
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-primary-foreground bg-primary rounded-full hover:bg-primary/90 transition-all hover:scale-105 hover:shadow-xl shadow-lg shadow-primary/25"
                            >
                                <Download className="mr-2 h-5 w-5" /> Download Resume
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Column - Profile Picture (2 columns) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-2 flex justify-center lg:justify-end"
                    >
                        <div className="relative group cursor-pointer" onClick={() => setIsModalOpen(true)}>
                            <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-2xl group-hover:bg-primary/30 transition-all"></div>
                            <div className="relative w-72 h-96 md:w-80 md:h-[28rem] rounded-3xl overflow-hidden border-4 border-primary/30 shadow-2xl group-hover:scale-[1.02] transition-transform duration-300">
                                <img
                                    src="/profile.jpg"
                                    alt="Kanishka Sharma"
                                    className="object-cover object-center w-full h-full"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                                    <span className="opacity-0 group-hover:opacity-100 text-white font-semibold bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm transition-opacity">
                                        View Profile
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Profile Popup Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
                        onClick={() => setIsModalOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="relative max-w-lg w-full bg-card rounded-2xl overflow-hidden shadow-2xl border border-border"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors z-10"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="relative h-[400px] w-full">
                                <img
                                    src="/profile-popup.jpg"
                                    alt="Kanishka Sharma"
                                    className="w-full h-full object-contain object-center bg-black/90"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                                    <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">
                                        "Clarity from Complexity"
                                    </h3>
                                    <p className="text-white/80 font-medium">Kanishka</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
