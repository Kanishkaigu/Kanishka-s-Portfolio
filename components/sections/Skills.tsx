"use client";

import { motion } from "framer-motion";
import { Brain, Database, Server, BarChart } from "lucide-react";

const skillCategories = [
    {
        title: "ML, DL and AI",
        Icon: Brain,
        skills: [
            { name: "Python", icon: "/assets/skills/python-svgrepo-com.svg" },
            { name: "GenAI", icon: "/assets/skills/Gen AI.png" },
            { name: "Agentic AI", icon: "/assets/skills/Agentic AI.png" },

            { name: "PyTorch", icon: "/assets/skills/pytorch-icon.svg" },
            { name: "Keras", icon: "/assets/skills/Keras.svg" },
            { name: "Scikit-learn", icon: "/assets/skills/scikit-learn.svg" },
            { name: "NumPy", icon: "/assets/skills/NumPy.svg" },
            { name: "Hugging Face", icon: "/assets/skills/huggingface-color.svg" },
            { name: "NLP", icon: "/assets/skills/nlp.png" },
        ]
    },
    {
        title: "Cloud & Databases",
        Icon: Database,
        skills: [
            { name: "AWS", icon: "/assets/skills/AWS.png" },
            { name: "MySQL", icon: "/assets/skills/mysql-logo-svgrepo-com.svg" },

            { name: "Docker", icon: "/assets/skills/docker-svgrepo-com.svg" },
        ]
    },
    {
        title: "Backend, APIs & Web Frameworks",
        Icon: Server,
        skills: [
            { name: "FastAPI", icon: "/assets/skills/FastAPI.svg" },
            { name: "REST APIs", icon: "/assets/skills/REST API.png" },
            { name: "Airflow", icon: "/assets/skills/Apache Airflow.svg" },
            { name: "ETL Pipelines", icon: "/assets/skills/ETL.png" },
        ]
    },
    {
        title: "Data Visualization & BI",
        Icon: BarChart,
        skills: [
            { name: "Power BI", icon: "/assets/skills/PowerBI.svg" },
            { name: "Tableau", icon: "/assets/skills/Tableau.svg" },
            { name: "Pandas", icon: "/assets/skills/Pandas.svg" },
            { name: "Matplotlib", icon: "/assets/skills/Matplotlib.svg" },
            { name: "Seaborn", icon: "/assets/skills/Seaborn.svg" },
            { name: "Statistical Analysis", icon: "/assets/skills/Statistical Analysis.png" },
        ]
    }
];

export function Skills() {
    return (
        <section id="skills" className="py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl font-bold mb-12 text-center uppercase tracking-tight">
                        Technical <span className="text-primary">Stack</span>
                    </h2>
                </motion.div>

                <div className="space-y-16">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                        >
                            <div className="flex items-center gap-4 mb-8 border-b border-border pb-4">
                                <div className="w-16 h-16 rounded-xl overflow-hidden bg-muted/50 p-3 flex items-center justify-center">
                                    <category.Icon className="w-full h-full text-primary" />
                                </div>
                                <h3 className="text-2xl font-bold text-primary">
                                    {category.title}
                                </h3>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                                        className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all flex flex-col items-center justify-center gap-4 hover:shadow-lg hover:shadow-primary/10 group"
                                    >
                                        <div className="text-4xl group-hover:scale-110 transition-transform duration-300 flex items-center justify-center w-20 h-20">
                                            <img
                                                src={skill.icon}
                                                alt={skill.name}
                                                className="w-full h-full object-contain"
                                                onError={(e) => {
                                                    e.currentTarget.style.display = 'none';
                                                    e.currentTarget.parentElement!.innerText = '🔧'; // Fallback icon
                                                }}
                                            />
                                        </div>
                                        <span className="text-sm font-medium text-center text-muted-foreground group-hover:text-foreground transition-colors">
                                            {skill.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
