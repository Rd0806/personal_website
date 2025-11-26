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
                    className="text-5xl md:text-8xl font-bold tracking-tighter text-foreground"
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
                            Creative Technologist <span className="text-primary mx-2">•</span> Frontend Engineer
                        </p>
                        <div className="flex justify-center gap-4 pt-8">
                            <button className="px-8 py-3 border border-primary/50 text-primary hover:bg-primary/10 transition-all duration-300 rounded-sm font-mono text-sm uppercase tracking-wider">
                                View Projects
                            </button>
                            <button className="px-8 py-3 border border-white/10 text-foreground hover:bg-white/5 transition-all duration-300 rounded-sm font-mono text-sm uppercase tracking-wider">
                                Contact Me
                            </button>
                        </div>
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
