"use client";

import { useEffect, useState } from "react";
import { ExternalLink, Github, Star, GitFork } from "lucide-react";
import Image from "next/image";

interface Repo {
    id: number;
    name: string;
    description: string;
    html_url: string;
    homepage: string;
    stargazers_count: number;
    forks_count: number;
    language: string;
}

export function Projects() {
    const [projects, setProjects] = useState<Repo[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                // Replace 'kanishkasharma' with your actual GitHub username if different
                const response = await fetch("https://api.github.com/users/Kanishkaigu/repos?sort=updated&per_page=6");
                if (!response.ok) throw new Error("Failed to fetch projects");
                const data = await response.json();
                setProjects(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    return (
        <section id="projects" className="py-20 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold mb-12 text-center uppercase tracking-tight">
                    Featured <span className="text-primary">Projects</span>
                </h2>

                {loading ? (
                    <div className="text-center text-muted-foreground">Loading projects from GitHub...</div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((repo) => {
                            // Generate image path from repo name
                            const imagePath = `/assets/projects/${repo.name.toLowerCase()}.png`;

                            // Clean up project name
                            const cleanName = repo.name.replace(/swiggy/i, '').replace(/-/g, ' ').trim();

                            // Check if language should be shown
                            const showLanguage = repo.language && !['Python', 'Jupyter Notebook'].includes(repo.language);

                            return (
                                <div
                                    key={repo.id}
                                    className="bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 flex flex-col h-full"
                                >
                                    {/* Project Thumbnail */}
                                    <div className="relative h-56 bg-secondary/20 overflow-hidden p-4 flex items-center justify-center">
                                        <img
                                            src={imagePath}
                                            alt={cleanName}
                                            className="w-full h-full object-contain shadow-md rounded-md"
                                            onError={(e) => {
                                                // Hide image and show gradient background if image doesn't exist
                                                e.currentTarget.style.display = 'none';
                                                e.currentTarget.parentElement!.classList.add('bg-gradient-to-br', 'from-primary/20', 'to-primary/5');
                                                e.currentTarget.parentElement!.classList.remove('p-4', 'bg-secondary/20');
                                            }}
                                        />
                                    </div>

                                    <div className="p-6 flex-1 flex flex-col">
                                        <div className="flex justify-between items-start mb-4 gap-4">
                                            <h3 className="text-xl font-bold leading-tight">{cleanName}</h3>
                                            {showLanguage && (
                                                <div className="flex-shrink-0 flex items-center gap-1 text-xs font-medium px-2 py-1 bg-secondary rounded-full">
                                                    {repo.language}
                                                </div>
                                            )}
                                        </div>

                                        <p className="text-muted-foreground mb-6 line-clamp-3 text-sm flex-1 leading-relaxed">
                                            {repo.description || "No description available for this project."}
                                        </p>

                                        <div className="flex gap-3 mt-auto pt-4 border-t border-border/50">
                                            <a
                                                href={repo.html_url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 flex items-center justify-center px-4 py-2.5 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/80 transition-all text-sm group"
                                            >
                                                <Github className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" /> Code
                                            </a>
                                            {repo.homepage && (
                                                <a
                                                    href={repo.homepage}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex-1 flex items-center justify-center px-4 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all text-sm group"
                                                >
                                                    <ExternalLink className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" /> Demo
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </section>
    );
}
