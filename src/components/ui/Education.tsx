"use client";

import { motion } from "framer-motion";

export default function Education() {
    return (
        <section className="py-24 px-4 md:px-8 max-w-4xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-12 text-primary"
            >
                Education_Path
            </motion.h2>

            <div className="relative border-l border-white/10 ml-4 md:ml-0 space-y-12">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative pl-8 md:pl-12"
                >
                    <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-primary rounded-full shadow-[0_0_10px_rgba(0,240,255,0.8)]" />
                    <h3 className="text-xl font-bold">Penn State University</h3>
                    <p className="text-muted-foreground font-mono text-sm mb-2">Bachelor's in Computer Science • 2025 - 2028</p>
                    <p className="text-sm opacity-80 max-w-2xl">
                        Sophomore with 3.97 GPA. Focusing on AI/ML and Software Engineering.
                        <br />
                        Relevant Coursework: Data Structures, Algorithms, Python, AI Foundations.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="relative pl-8 md:pl-12"
                >
                    <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-white/20 rounded-full" />
                    <h3 className="text-xl font-bold">SGM Shiroiya English School</h3>
                    <p className="text-muted-foreground font-mono text-sm mb-2">Class 12 • 2014 - 2024</p>
                </motion.div>
            </div>
        </section>
    );
}
