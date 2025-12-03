"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Briefcase, Calendar, MapPin } from "lucide-react";

const education = [
    {
        degree: "Credit Linked Program - Data Science & Machine Learning - IIT Guwahati",
        description: "Advanced certification in Data Science and Machine Learning from one of India's premier technical institutes. Focus on practical applications of AI and statistical modeling.",
    },
    {
        degree: "MS in Mathematics with Computer Science",
        description: "Graduate studies combining advanced mathematics with computer science principles. Specialized in computational methods and algorithmic problem-solving.",

    },
    {
        degree: "BS in Statistics",
        description: "Undergraduate foundation in statistical theory, probability, and data analysis. Strong emphasis on quantitative reasoning and analytical thinking.",
    }
];

export function Qualifications() {
    const [activeTab, setActiveTab] = useState<"education" | "experience">("experience");

    useEffect(() => {
        // Listen for hash changes
        const handleHashChange = () => {
            // Small delay to ensure hash is updated
            setTimeout(() => {
                const hash = window.location.hash;
                if (hash.includes("education")) {
                    setActiveTab("education");
                } else if (hash.includes("experience")) {
                    setActiveTab("experience");
                }
            }, 100);
        };

        // Check initial hash
        handleHashChange();

        // Listen for hash changes
        window.addEventListener("hashchange", handleHashChange);

        return () => {
            window.removeEventListener("hashchange", handleHashChange);
        };
    }, []);

    return (
        <section id="qualifications" className="py-8 bg-background">
            {/* Hidden anchor points for navigation */}
            <div id="qualifications-experience" style={{ position: 'absolute', top: '-80px' }}></div>
            <div id="qualifications-education" style={{ position: 'absolute', top: '-80px' }}></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold mb-4 uppercase tracking-tight">
                        My <span className="text-primary">Journey</span>
                    </h2>

                    <div className="flex justify-center gap-4 mt-8">
                        <button
                            onClick={() => setActiveTab("experience")}
                            className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all ${activeTab === "experience"
                                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105"
                                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                                }`}
                        >
                            <Briefcase className="w-4 h-4" /> Experience
                        </button>
                        <button
                            onClick={() => setActiveTab("education")}
                            className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all ${activeTab === "education"
                                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105"
                                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                                }`}
                        >
                            <GraduationCap className="w-4 h-4" /> Education
                        </button>
                    </div>
                </motion.div>

                <div className="max-w-4xl mx-auto min-h-[400px]">
                    <AnimatePresence mode="wait">
                        {activeTab === "experience" ? (
                            <motion.div
                                key="experience"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.3 }}
                                className="relative pl-8 border-l-2 border-primary/30 space-y-12"
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background"></div>

                                <div className="bg-card border border-border rounded-xl p-6 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group">
                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                        <div>
                                            <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                                Data Analyst
                                            </h3>
                                            <p className="text-lg font-semibold text-muted-foreground mb-2">
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

                                    <div className="space-y-3">
                                        <div className="flex gap-3">
                                            <div className="flex-shrink-0 mt-1">
                                                <div className="w-2 h-2 rounded-full bg-primary"></div>
                                            </div>
                                            <p className="text-muted-foreground leading-relaxed">
                                                Developed a <span className="text-foreground font-medium">Customer Insights Dashboard</span> using Power BI and SQL, which identified key behavior patterns and directly contributed to a <span className="text-primary font-semibold">13.5% quarterly improvement</span> in customer retention.
                                            </p>
                                        </div>
                                        <div className="flex gap-3">
                                            <div className="flex-shrink-0 mt-1">
                                                <div className="w-2 h-2 rounded-full bg-primary"></div>
                                            </div>
                                            <p className="text-muted-foreground leading-relaxed">
                                                Designed and implemented <span className="text-foreground font-medium">automation workflows in LeadSquared</span>, enhancing task efficiency and reducing average lead response time. Created dashboards and reports to track sales performance and customer leads.
                                            </p>
                                        </div>
                                        <div className="flex gap-3">
                                            <div className="flex-shrink-0 mt-1">
                                                <div className="w-2 h-2 rounded-full bg-primary"></div>
                                            </div>
                                            <p className="text-muted-foreground leading-relaxed">
                                                Authored and optimized complex <span className="text-foreground font-medium">SQL queries and ETL processes</span> to support ad-hoc data requests, improving overall operational effectiveness by <span className="text-primary font-semibold">10%</span>.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mt-6 flex flex-wrap gap-2">
                                        {["Power BI", "SQL", "LeadSquared", "ETL", "Data Analysis", "Dashboard Design"].map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="education"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="space-y-6"
                            >
                                {education.map((edu, index) => (
                                    <div
                                        key={index}
                                        className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all shadow-sm hover:shadow-md group flex gap-4"
                                    >
                                        <div className="p-3 bg-primary/10 rounded-lg shrink-0 h-fit group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                            <GraduationCap className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold leading-tight mb-2 group-hover:text-primary transition-colors">{edu.degree}</h3>
                                            <p className="text-muted-foreground text-sm leading-relaxed">
                                                {edu.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
