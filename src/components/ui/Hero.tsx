"use client";

import { motion } from "framer-motion";
import ParticleGrid from "./ParticleGrid";
import { useEffect, useState } from "react";

export default function Hero() {
    const [text, setText] = useState("");
    const fullText = "Initializing Command Center...";
    const [showSubtext, setShowSubtext] = useState(false);

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setText(fullText.slice(0, i + 1));
            i++;
            if (i > fullText.length) {
                clearInterval(interval);
                setTimeout(() => setShowSubtext(true), 500);
            }
        }, 50);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-background">
            <ParticleGrid />

            <div className="z-10 text-center space-y-6 px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="font-mono text-primary text-sm md:text-base tracking-widest uppercase"
                >
                    {text}
                    <span className="animate-pulse">_</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="text-4xl md:text-8xl font-bold tracking-tighter text-foreground"
                >
                    RUDRA DESAI
                </motion.h1>

                {showSubtext && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="space-y-4"
                    >
                        <p className="text-xl md:text-2xl text-muted-foreground font-light">
                            Engineering the future with <span className="text-primary font-bold">AI & Algorithms</span>
                        </p>
                        <div className="flex justify-center gap-4 pt-8">
                            <a
                                href="#projects"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="px-8 py-3 border border-primary/50 text-primary hover:bg-primary/10 transition-all duration-300 rounded-sm font-mono text-sm uppercase tracking-wider cursor-pointer"
                            >
                                View Projects
                            </a>
                            <a
                                href="mailto:rudradesai0806@gmail.com"
                                className="px-8 py-3 border border-white/10 text-foreground hover:bg-white/5 transition-all duration-300 rounded-sm font-mono text-sm uppercase tracking-wider cursor-pointer"
                            >
                                Contact Me
                            </a>
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2, duration: 1 }}
                            className="flex justify-center gap-6 pt-4"
                        >
                            <a href="https://github.com/Rd0806" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                <span className="sr-only">GitHub</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                            </a>
                            <a href="https://www.linkedin.com/in/rudradesai08/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                <span className="sr-only">LinkedIn</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                            </a>
                            <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 font-mono text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /></svg>
                                RESUME
                            </a>
                        </motion.div>
                    </motion.div>
                )}
            </div>

            <div className="absolute bottom-10 left-10 font-mono text-xs text-white/20">
                <p>SYSTEM: ONLINE</p>
                <p>LOC: 40.7128° N, 74.0060° W</p>
            </div>
        </section>
    );
}
