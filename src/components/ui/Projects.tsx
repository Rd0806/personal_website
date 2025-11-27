"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
        title: "Naik Website",
        desc: "A high-performance web experience built for Naik's Traditional Foods. Features modern animations and responsive design.",
        tags: ["Next.js", "React", "Tailwind CSS"],
        links: {
            demo: "https://naik-website.vercel.app",
            github: "https://github.com/Rd0806/Naik_Website"
        }
    },
    {
        title: "Expense Tracker",
        desc: "Smart financial tracking application with data visualization and real-time analytics.",
        tags: ["Python", "Data Analysis", "React"],
        links: {
            demo: "https://expensetracker-silk-two.vercel.app/",
            github: "https://github.com/Rd0806/expensetracker"
        }
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-12 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-primary flex items-center gap-4"
            >
                Project_Database <span className="text-xs font-mono text-muted-foreground mt-2">v.2.0</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {projects.map((project, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2 }}
                        className="group relative p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-500 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-xl md:text-2xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                                <div className="flex gap-4">
                                    <a href={project.links.github} className="text-muted-foreground hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                                        <Github size={20} />
                                    </a>
                                    <a href={project.links.demo} className="text-muted-foreground hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>

                            <p className="text-muted-foreground mb-6 h-auto md:h-12 text-sm md:text-base">{project.desc}</p>

                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, j) => (
                                    <span key={j} className="px-3 py-1 text-xs font-mono rounded-full bg-white/5 border border-white/10 text-primary/80">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
