"use client";

import { } from "lucide-react";

const services = [
    {
        title: "Data Analytics & Visualization",
        tagline: "Transforming raw data into actionable insights.",
        description: "I help businesses uncover hidden patterns and trends through advanced analytics and interactive dashboards using Power BI, Tableau, and Python libraries.",
        image: "/assets/services/data-analytics.png",
    },
    {
        title: "AI & Machine Learning Solutions",
        tagline: "Building intelligent models that predict and optimize.",
        description: "From predictive analytics to deep learning, I create AI solutions that solve real business problems using Python, Scikit-learn, TensorFlow, and PyTorch.",
        image: "/assets/services/ai-ml.png",
    },

    {
        title: "CRM Integration",
        tagline: "Seamless integration with leading CRM and ERP platforms.",
        description: "Expert integration services for LeadSquared, Salesforce, ERP systems, 4QT, and other platforms tailored for healthcare, real estate, educational businesses, and more.",
        image: "/assets/services/crm-integration.png",
    },
];

export function Services() {
    return (
        <section id="services" className="py-8 bg-muted/30">
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
                            className="bg-card rounded-xl border border-border hover:border-primary/50 transition-all group hover:shadow-lg hover:shadow-primary/10 overflow-hidden flex flex-col"
                        >
                            <div className="w-full h-48 overflow-hidden relative">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60"></div>
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                                <p className="text-sm text-primary font-semibold mb-3 italic">{service.tagline}</p>
                                <p className="text-muted-foreground leading-relaxed text-sm flex-1">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
