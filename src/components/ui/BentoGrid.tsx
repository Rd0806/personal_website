"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const experiences = [
    {
        title: "Undergraduate Research Intern",
        company: "Penn State University",
        period: "Oct 2025 - Present",
        desc: "Researching AI/ML solutions.",
        type: "experience",
    },
    {
        title: "CMPSC Grader",
        company: "Penn State College of Engineering",
        period: "Aug 2025 - Present",
        desc: "Grading for 400+ students in Intro to CS.",
        type: "experience",
    },
    {
        title: "IBM Campus Ambassador",
        company: "IBM",
        period: "Aug 2025 - Present",
        desc: "Representing IBM tech on campus.",
        type: "experience",
    },
];

const skills = [
    "Python", "Data Structures", "AI/ML", "React", "Next.js", "Tailwind CSS", "Java", "C++"
];

export default function BentoGrid() {
    return (
        <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(180px,auto)]">

                {/* Header Block */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="md:col-span-2 p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md relative overflow-hidden group"
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary opacity-50" />
                    <h2 className="text-3xl font-bold mb-2">Experience_Log</h2>
                    <p className="text-muted-foreground font-mono text-sm">~/rudra/career_history.json</p>
                    <div className="absolute bottom-4 right-4 text-xs font-mono text-white/20">READ_ONLY</div>
                </motion.div>

                {/* Skills Block */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="row-span-2 p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md relative overflow-hidden group hover:border-primary/30 transition-colors"
                >
                    <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-primary to-secondary opacity-20" />
                    <h3 className="text-xl font-bold mb-6">Tech_Stack</h3>
                    <div className="flex flex-wrap gap-2">
                        {skills.map((skill, i) => (
                            <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono hover:bg-primary/20 hover:border-primary/50 transition-all cursor-default">
                                {skill}
                            </span>
                        ))}
                    </div>
                </motion.div>

                {/* Experience Items */}
                {experiences.map((exp, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + (i * 0.1) }}
                        className={cn(
                            "p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md relative overflow-hidden group hover:bg-white/10 transition-all",
                            i === 0 ? "md:col-span-2" : ""
                        )}
                    >
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{exp.title}</h3>
                            <span className="text-xs font-mono text-muted-foreground bg-white/5 px-2 py-1 rounded">{exp.period}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{exp.company}</p>
                        <p className="text-sm opacity-80">{exp.desc}</p>
                    </motion.div>
                ))}

            </div>
        </section>
    );
}
