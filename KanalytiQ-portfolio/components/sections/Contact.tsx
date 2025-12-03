"use client";

import { useState, useEffect } from "react";
import { Send, Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import emailjs from '@emailjs/browser';

export function Contact() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setMounted(true), 0);
        return () => clearTimeout(timer);
    }, []);

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
        <section id="contact" className="py-8 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {!mounted ? (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-[600px]">
                        {/* Loading placeholder */}
                    </div>
                ) : (
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
                                            autoComplete="name"
                                            suppressHydrationWarning
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
                                            autoComplete="email"
                                            suppressHydrationWarning
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
                                        autoComplete="off"
                                        suppressHydrationWarning
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
                                        autoComplete="off"
                                        suppressHydrationWarning
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
                                I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your visions.
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
                                <div className="flex gap-4 mb-8">
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
                                    <a
                                        href="https://wa.me/917042233425"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-primary/10 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all group"
                                        aria-label="Chat on WhatsApp"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="h-6 w-6 group-hover:text-white"
                                        >
                                            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
