"use client";

import { BarChart3, Brain, Rocket, Sparkles, Globe, TrendingUp } from "lucide-react";

const services = [
    {
        title: "Data Analytics & Visualization",
        tagline: "Transforming raw data into actionable insights.",
        description: "I help businesses uncover hidden patterns and trends through advanced analytics and interactive dashboards using Power BI, Tableau, and Python libraries.",
        image: "/assets/skills/Data Analytics & Visualization.png",
    },
    {
        title: "AI & Machine Learning Solutions",
        tagline: "Building intelligent models that predict and optimize.",
        description: "From predictive analytics to deep learning, I create AI solutions that solve real business problems using Python, Scikit-learn, TensorFlow, and PyTorch.",
        image: "/assets/skills/AI & Machine Learning Solutions.png",
    },

    {
        title: "CRM Integration",
        tagline: "Seamless integration with leading CRM and ERP platforms.",
        description: "Expert integration services for LeadSquared, Salesforce, ERP systems, 4QT, and other platforms tailored for healthcare, real estate, educational businesses, and more.",
        image: "/assets/skills/CRM Integration.png",
    },
];

export function Services() {
    return (
        <section id="services" className="py-20 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold mb-4 text-center uppercase tracking-tight">
                    What I <span className="text-primary">Offer</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Comprehensive solutions to transform your business with data-driven insights and cutting-edge AI technology
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div
                            key={service.title}
                            className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-all group hover:shadow-lg hover:shadow-primary/10"
                        >
                            <div className="w-20 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all overflow-hidden p-2">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-contain group-hover:brightness-0 group-hover:invert transition-all"
                                />
                            </div>
                            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                            <p className="text-sm text-primary font-semibold mb-3 italic">{service.tagline}</p>
                            <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
