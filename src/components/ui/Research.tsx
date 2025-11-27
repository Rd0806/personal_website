"use client";

import { motion } from "framer-motion";

const research = [
    {
        role: "Undergraduate Research Intern",
        lab: "Tourism & Leisure Lab",
        institution: "University Park, PA",
        period: "10/25 – Present",
        points: [
            "Conducted qualitative research including interviews, transcription, thematic coding, and analysis, contributing to the study of cultural heritage experiences in virtual environments.",
            "Investigated the intersection of fanship and tourism in digital spaces, focusing on virtual reality walking tours of UNESCO World Heritage sites."
        ]
    },
    {
        role: "Undergraduate Research Assistant",
        lab: "College Of Information Sciences and Technology",
        institution: "University Park, PA",
        period: "05/25 – 08/25",
        points: [
            "Cleaned and analyzed large educational datasets using Python and Excel to support research on technology-enhanced learning, ensuring data integrity across multiple phases of a study.",
            "Collaborated with a multidisciplinary research team to identify key performance indicators and visualize trends using Pandas, Matplotlib, and Excel."
        ]
    }
];

export default function Research() {
    return (
        <section className="py-12 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-primary flex items-center gap-4"
            >
                Research_Log <span className="text-xs font-mono text-muted-foreground mt-2">ACTIVE_PROTOCOLS</span>
            </motion.h2>

            <div className="space-y-6 md:space-y-8">
                {research.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2 }}
                        className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all"
                    >
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                            <div>
                                <h3 className="text-lg md:text-xl font-bold text-foreground">{item.role}</h3>
                                <p className="text-primary font-mono text-sm">{item.lab}</p>
                            </div>
                            <div className="text-left md:text-right">
                                <p className="text-sm text-muted-foreground">{item.institution}</p>
                                <p className="text-xs font-mono text-muted-foreground/80 bg-white/5 inline-block px-2 py-1 rounded mt-1">{item.period}</p>
                            </div>
                        </div>

                        <ul className="space-y-2">
                            {item.points.map((point, j) => (
                                <li key={j} className="text-muted-foreground text-sm flex items-start gap-2">
                                    <span className="text-primary mt-1">▹</span>
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
