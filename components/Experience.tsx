"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export function Experience() {
    return (
        <section id="experience" className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
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
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative pl-8 pb-12 border-l-2 border-primary/30"
                    >
                        {/* Timeline dot */}
                        <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background"></div>

                        <div className="bg-card border border-border rounded-xl p-6 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
                            {/* Company and Role */}
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-foreground mb-2">
                                        Data Analyst
                                    </h3>
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

                            {/* Skills/Technologies */}
                            <div className="mt-6 flex flex-wrap gap-2">
                                {["Power BI", "SQL", "LeadSquared", "ETL", "Data Analysis", "Dashboard Design"].map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
