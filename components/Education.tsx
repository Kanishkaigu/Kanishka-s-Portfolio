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
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold mb-16 text-center uppercase tracking-tight">
                    Academic <span className="text-primary">Journey</span>
                </h2>

                <div className="relative space-y-12">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block"></div>

                    {education.map((edu, index) => (
                        <div key={index} className={`relative flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                            {/* Content Card */}
                            <div className="flex-1 w-full">
                                <div className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all shadow-sm hover:shadow-md group">
                                    <div className="flex items-start gap-4 mb-3">
                                        <div className="p-3 bg-primary/10 rounded-lg shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                            <GraduationCap className="h-6 w-6" />
                                        </div>
                                        <h3 className="text-lg font-bold leading-tight">{edu.degree}</h3>
                                    </div>
                                    <p className="text-muted-foreground text-sm leading-relaxed pl-[3.25rem]">
                                        {edu.description}
                                    </p>
                                </div>
                            </div>

                            {/* Timeline Dot */}
                            <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 border-4 border-background shadow-sm z-10 hidden md:block"></div>

                            {/* Empty Space for alignment */}
                            <div className="flex-1 w-full hidden md:block"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}