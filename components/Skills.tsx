"use client";

import { motion } from "framer-motion";

const skillCategories = [
    {
        title: "Machine Learning, NLP & DL Libraries",
        image: "/assets/skills/Machine Learning, NLP & DL Libraries.png",
        skills: [
            { name: "Python", icon: "/assets/skills/Python.png" },
            { name: "GenAI", icon: "/assets/skills/GenAI.png" },
            { name: "Agentic AI", icon: "/assets/skills/Agentic AI.png" },
            { name: "Machine Learning", icon: "/assets/skills/machine learning.png" },
            { name: "Deep Learning", icon: "/assets/skills/Deep learning.png" },
            { name: "PyTorch", icon: "/assets/skills/PyTorch.png" },
            { name: "Keras", icon: "/assets/skills/Keras.png" },
            { name: "Scikit-learn", icon: "/assets/skills/Scikit-learn.png" },
            { name: "NumPy", icon: "/assets/skills/NumPy.png" },
            { name: "Hugging Face", icon: "/assets/skills/Hugging Face.png" },
            { name: "NLP", icon: "/assets/skills/NLP.jpg" },
        ]
    },
    {
        title: "Cloud & Databases",
        image: "/assets/skills/ Cloud & Databases.png",
        skills: [
            { name: "AWS", icon: "/assets/skills/aws.png" },
            { name: "MySQL", icon: "/assets/skills/MySQL.png" },
            { name: "MS SQL Server", icon: "/assets/skills/MySQL Workbench.png" },
            { name: "Docker", icon: "/assets/skills/Docker.png" },
        ]
    },
    {
        title: "Backend, APIs & Web Frameworks",
        image: "/assets/skills/Backend, APIs & Web Frameworks.png",
        skills: [
            { name: "FastAPI", icon: "/assets/skills/FastAPI.png" },
            { name: "REST APIs", icon: "/assets/skills/RestAPI.png" },
            { name: "Airflow", icon: "/assets/skills/Airflow.png" },
            { name: "ETL Pipelines", icon: "/assets/skills/ETL.png" },
        ]
    },
    {
        title: "Data Visualization & BI",
        image: "/assets/skills/Data Visualization & BI.png",
        skills: [
            { name: "Power BI", icon: "/assets/skills/PowerBI.png" },
            { name: "Tableau", icon: "/assets/skills/Tableu.png" },
            { name: "Pandas", icon: "/assets/skills/pandas.png" },
            { name: "Matplotlib", icon: "/assets/skills/Matplotlib.png" },
            { name: "Seaborn", icon: "/assets/skills/seaborn.png" },
            { name: "Statistical Analysis", icon: "/assets/skills/Statistical Analysis.png" },
        ]
    }
];

export function Skills() {
    return (
        <section id="skills" className="py-20">
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
                                <div className="w-16 h-16 rounded-xl overflow-hidden bg-muted/50 p-2">
                                    <img
                                        src={category.image}
                                        alt={category.title}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <h3 className="text-2xl font-bold text-primary">
                                    {category.title}
                                </h3>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                                        className="bg-card p-4 rounded-xl border border-border hover:border-primary/50 transition-all flex flex-col items-center justify-center gap-3 hover:shadow-lg hover:shadow-primary/10 group"
                                    >
                                        <div className="text-4xl group-hover:scale-110 transition-transform duration-300 flex items-center justify-center w-12 h-12">
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
