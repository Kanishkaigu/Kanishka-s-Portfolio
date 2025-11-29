"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download, Phone, MapPin } from "lucide-react";

export function Hero() {
    return (
        <section id="home" className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 flex justify-center"
                >
                    <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary shadow-2xl shadow-primary/50">
                        <img
                            src="/profile.jpg"
                            alt="Kanishka Sharma"
                            className="object-cover object-center w-full h-full"
                            style={{ objectPosition: 'center 30%' }}
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6 text-primary">
                        {Array.from("Clarity from Complexity").map((char, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.05, delay: index * 0.05 }}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
                        Certified Data Scientist & ML Engineer skilled in data analysis, predictive modeling, and MLOps. Expertise in Python, SQL, machine learning, and cloud deployment. Experienced in data preprocessing, statistical analysis, and feature engineering for AI solutions. Developed end-to-end ML pipelines using Docker, and FastAPI to drive business impact.
                    </p>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-8 uppercase">
                        Build <span className="text-primary">Innovate</span> Scale
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col items-center gap-8"
                >
                    <div className="flex flex-wrap gap-4 justify-center">
                        <a
                            href="/resume.pdf"
                            download
                            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-primary-foreground bg-primary rounded-full hover:bg-primary/90 transition-transform hover:scale-105 shadow-lg shadow-primary/25"
                        >
                            <Download className="mr-2 h-5 w-5" /> Download Resume
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
