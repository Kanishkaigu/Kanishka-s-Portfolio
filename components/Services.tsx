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
        title: "MLOps & Model Deployment",
        tagline: "Taking AI models from experiment to enterprise-scale production.",
        description: "End-to-end MLOps solutions including model containerization, CI/CD pipelines, and monitoring using Docker, Kubernetes, and FastAPI.",
        image: "/assets/skills/MLOps & Model Deployment.png",
    },
    {
        title: "Generative AI & AI Automation",
        tagline: "Creating intelligent systems that generate content and automate workflows.",
        description: "Generative AI solutions for content creation, code generation, and intelligent automation tools that enhance productivity and creativity.",
        image: "/assets/skills/Generative AI & AI Automation.png",
    },
    {
        title: "Web Development & AI Integration",
        tagline: "Building modern web applications enhanced with AI capabilities.",
        description: "Full-stack web development with seamless AI integration using React, Node.js, FastAPI, and cloud technologies for intelligent user experiences.",
        image: "/assets/skills/Web Development & AI Integration.png",
    },
    {
        title: "Startup Builder",
        tagline: "Building innovative tech startups from concept to launch.",
        description: "End-to-end startup development services including ideation, MVP development, and scaling strategies for tech ventures.",
        image: "/assets/skills/Startup Builder.png",
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
