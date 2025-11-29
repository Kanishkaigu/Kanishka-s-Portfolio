"use client";

import { GraduationCap } from "lucide-react"; // Award icon is removed as it's not used

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

export function Education() {
    return (
        <section id="education" className="py-20 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold mb-12 text-center uppercase tracking-tight">
                    Academic <span className="text-primary">Journey</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {education.map((edu, index) => (
                        <div key={index} className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all flex flex-col h-full">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                                    <GraduationCap className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold leading-tight">{edu.degree}</h3>
                            </div>
                            <p className="text-foreground/80 text-sm flex-grow">
                                {edu.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}