"use client";

import { GraduationCap } from "lucide-react";

const education = [
    {
        degree: "Credit Linked Program in Data Science - IIT Guwahati",
        description: "Advanced postgraduate certification from one of India's leading technical institutes, emphasizing practical applications of AI, statistical modeling, and data-driven problem-solving. Gained hands-on experience with modern machine learning and deep learning techniques, analytical tools, and real-world project implementation.",
    },
    {
        degree: "M.S. in Mathematics with Computer Science",
        description: "Postgraduate program combining advanced mathematical theory with fundamental computer science principles. Developed strong proficiency in computational methods, algorithmic problem-solving, and analytical modeling.",
    },
    {
        degree: "B.S. in Statistics",
        description: "Undergraduate degree focused on statistical theory, probability, and data analysis. Built a solid foundation in quantitative methods, analytical reasoning, and data-driven decision-making.",
    }
];

export function Education() {
    return (
        <section id="education" className="py-6 md:py-8 bg-muted/30">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center uppercase tracking-tight">
                    Academic <span className="text-primary">Journey</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {education.map((edu, index) => (
                        <div
                            key={index}
                            className="bg-card p-4 rounded-lg border border-border hover:border-primary/50 transition-all shadow-sm hover:shadow-md group"
                        >
                            <div className="flex items-start gap-3 mb-2">
                                <div className="p-2 bg-primary/10 rounded-lg shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                    <GraduationCap className="h-5 w-5" />
                                </div>
                                <h3 className="text-sm md:text-base font-bold leading-tight">{edu.degree}</h3>
                            </div>
                            <p className="text-muted-foreground text-xs leading-relaxed">
                                {edu.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}