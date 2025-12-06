"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

export function Experience() {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    // 5. Skill Stagger Variants
    const skillContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.05,
            },
        },
    };

    const skillItemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
    };

    const DigitalDataCircuit = () => {
        return (
            <div className="absolute inset-0 z-0 overflow-hidden opacity-20 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(250, 189, 35, 0.2)" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />

                    {/* Horizontal Data Streams */}
                    {Array.from({ length: 5 }).map((_, i) => (
                        <motion.rect
                            key={`h-${i}`}
                            width="10"
                            height="0.5"
                            fill="#FABD23"
                            x="-10"
                            y={10 + i * 20} // Align with grid lines
                            animate={{
                                x: [0, 110],
                                opacity: [0, 1, 0]
                            }}
                            transition={{
                                duration: 5 + Math.random() * 5,
                                repeat: Infinity,
                                ease: "linear",
                                delay: i * 1.5
                            }}
                        />
                    ))}

                    {/* Vertical Data Streams */}
                    {Array.from({ length: 8 }).map((_, i) => (
                        <motion.rect
                            key={`v-${i}`}
                            width="0.5"
                            height="10"
                            fill="#FABD23"
                            x={10 + i * 20} // Align with grid lines
                            y="-10"
                            animate={{
                                y: [0, 110],
                                opacity: [0, 1, 0]
                            }}
                            transition={{
                                duration: 7 + Math.random() * 5,
                                repeat: Infinity,
                                ease: "linear",
                                delay: i * 1
                            }}
                        />
                    ))}
                </svg>
            </div>
        );
    };



    return (
        <section id="experience" className="py-20 bg-background overflow-hidden relative">
            {/* Dynamic Background Animation */}
            <DigitalDataCircuit />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-0"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Work <span className="text-primary">Experience</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Professional journey and key achievements
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <div className="relative pl-8 pb-12">
                        {/* 1. Circuit Line Draw Animation */}
                        <motion.div
                            initial={{ height: 0 }}
                            whileInView={{ height: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="absolute left-0 top-0 w-[2px] bg-gradient-to-b from-primary/80 via-primary/40 to-transparent"
                        />

                        {/* 2. Radar Pulse Animation */}
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10"
                        >
                            <motion.div
                                animate={{
                                    boxShadow: [
                                        "0 0 0 0px rgba(250, 189, 35, 0.7)",
                                        "0 0 0 20px rgba(250, 189, 35, 0)",
                                    ],
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    repeatType: "loop",
                                }}
                                className="w-full h-full rounded-full"
                            />
                        </motion.div>

                        {/* 3. Holographic Card Hover */}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="relative group bg-card border border-border rounded-xl p-6 transition-all duration-300 overflow-hidden"
                            whileHover={{
                                scale: 1.01,
                                boxShadow: "0 0 20px rgba(var(--primary-rgb), 0.15)",
                                borderColor: "rgba(var(--primary-rgb), 0.5)",
                            }}
                        >
                            {/* Holographic Sheen Effect */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12"
                                initial={{ x: "-100%" }}
                                whileHover={{ x: "200%" }}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                            />

                            {/* Company and Role */}
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4 relative z-10">
                                <div>
                                    {/* 4. Decoding Text Effect (Simulated with clip-path reveal) */}
                                    <motion.h3
                                        initial={{ clipPath: "inset(0 100% 0 0)" }}
                                        whileInView={{ clipPath: "inset(0 0 0 0)" }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: 0.2, ease: "linear" }}
                                        className="text-2xl font-bold text-foreground mb-2 inline-block"
                                    >
                                        Data Analyst
                                    </motion.h3>
                                    <p className="text-lg font-semibold text-primary mb-2">
                                        Tevatiya Services Private Limited
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4" />
                                        <span>July 2025 – Present</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4" />
                                        <span>Uttar Pradesh</span>
                                    </div>
                                </div>
                            </div>

                            {/* Achievements */}
                            <div className="space-y-3 relative z-10">
                                <motion.div variants={itemVariants} className="flex gap-3">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                                    </div>
                                    <div className="text-muted-foreground leading-relaxed">
                                        Developed a <span className="text-foreground font-medium">Customer Insights Dashboard</span> using Power BI and SQL, which identified key behavior patterns and directly contributed to a <span className="text-primary font-semibold">13.5% quarterly improvement</span> in customer retention.
                                    </div>
                                </motion.div>
                                <motion.div variants={itemVariants} className="flex gap-3">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                                    </div>
                                    <div className="text-muted-foreground leading-relaxed">
                                        Designed and implemented <span className="text-foreground font-medium">automation workflows in LeadSquared</span>, enhancing task efficiency and reducing average lead response time. Created dashboards and reports to track sales performance and customer leads.
                                    </div>
                                </motion.div>
                                <motion.div variants={itemVariants} className="flex gap-3">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Authored and optimized complex <span className="text-foreground font-medium">SQL queries and ETL processes</span> to support ad-hoc data requests, improving overall operational effectiveness by <span className="text-primary font-semibold">10%</span>.
                                    </p>
                                </motion.div>
                            </div>

                            {/* Skills/Technologies */}
                            <motion.div
                                variants={skillContainerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="mt-6 flex flex-wrap gap-2 relative z-10"
                            >
                                {["Power BI", "SQL", "LeadSquared", "ETL", "Data Analysis", "Dashboard Design"].map((skill) => (
                                    <motion.span
                                        key={skill}
                                        variants={skillItemVariants}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium cursor-default border border-transparent hover:border-primary/20 transition-colors"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
