"use client";

import { useState } from "react";
import { Send, Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import emailjs from '@emailjs/browser';

export function Contact() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        const formElement = e.target as HTMLFormElement;

        try {
            // Send email using EmailJS
            await emailjs.sendForm(
                'service_uk2qbti',      // Service ID
                'template_swc5ipl',     // Template ID
                formElement,
                'jntIX5okCrd1whDGq'     // Public Key
            );

            setStatus("success");
            formElement.reset();

            // Reset success message after 3 seconds
            setTimeout(() => {
                setStatus("idle");
            }, 3000);
        } catch (error) {
            console.error('EmailJS Error:', error);
            alert("Failed to send message. Please try again or contact me directly via email.");
            setStatus("idle");
        }
    };

    return (
        <section id="contact" className="py-20 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Send Message Form */}
                    <div className="bg-card p-8 rounded-xl border border-border">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                <Send className="h-6 w-6 text-primary" />
                            </div>
                            <h2 className="text-3xl font-bold">Send Message</h2>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-muted-foreground">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-input bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-muted-foreground">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-input bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium mb-2 text-muted-foreground">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-input bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                                    placeholder="Project Inquiry"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2 text-muted-foreground">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-lg border border-input bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === "submitting" || status === "success"}
                                className="w-full flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-all disabled:opacity-50 shadow-lg shadow-primary/25"
                            >
                                {status === "submitting" ? (
                                    "Sending..."
                                ) : status === "success" ? (
                                    "Sent!"
                                ) : (
                                    <>
                                        <Send className="h-5 w-5" />
                                        Send Message
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="bg-card p-8 rounded-xl border border-border space-y-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                <Phone className="h-6 w-6 text-primary" />
                            </div>
                            <h2 className="text-3xl font-bold">Contact Info</h2>
                        </div>

                        <p className="text-muted-foreground leading-relaxed">
                            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 rounded-lg">
                                    <Mail className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground mb-1">Mail me at</p>
                                    <a
                                        href="https://mail.google.com/mail/?view=cm&fs=1&to=kanishkasharma399@gmail.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-lg font-semibold hover:text-primary transition-colors"
                                    >
                                        kanishkasharma399@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 rounded-lg">
                                    <Phone className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground mb-1">Call me at</p>
                                    <a href="tel:+917042233425" className="text-lg font-semibold hover:text-primary transition-colors">
                                        +91 7042233425
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 rounded-lg">
                                    <MapPin className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground mb-1">Location</p>
                                    <a
                                        href="https://www.google.com/maps/place/Gurugram,+Haryana"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-lg font-semibold hover:text-primary transition-colors cursor-pointer"
                                    >
                                        Gurugram, Haryana, India
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6 border-t border-border">
                            <h3 className="text-xl font-bold mb-4">Connect with me</h3>
                            <div className="flex gap-4">
                                <a
                                    href="https://www.linkedin.com/in/kanishkasharma1998/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-primary/10 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all"
                                >
                                    <Linkedin className="h-6 w-6" />
                                </a>
                                <a
                                    href="https://github.com/Kanishkaigu"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-primary/10 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all"
                                >
                                    <Github className="h-6 w-6" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
