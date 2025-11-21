'use client';

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Cpu, FileText, Award } from 'lucide-react';

const experiences = [
  {
    title: "Undergraduate Research Assistant",
    company: "Penn State College of IST",
    period: "Apr 2025 - July 2025",
    description: "Data cleaning and visualization using Pandas and Matplotlib to support research on technology-enhanced learning.",
    tags: ["Pandas", "Matplotlib", "Data Viz"]
  },
  {
    title: "CMPSC Grader",
    company: "Penn State College of Engineering",
    period: "Aug 2025 - Present",
    description: "Grade weekly programming assignments for 400+ students, providing feedback on Python code and data structures.",
    tags: ["Teaching", "Python", "Debugging"]
  },
  {
    title: "Undergraduate Research Intern",
    company: "Penn State University",
    period: "Oct 2025 - Present",
    description: "Researching AI/ML applications. Leveraging large educational datasets to drive insights.",
    tags: ["Python", "AI/ML", "Research"]
  }
];

const skills = [
  "Python", "Java", "C++", "HTML/CSS", "JavaScript", "React", "Next.js",
  "Tailwind CSS", "Git", "SQL", "Data Structures", "Algorithms",
  "Machine Learning", "Artificial Intelligence"
];

const certifications = [
    "AI For Everyone",
    "AI Foundations for Everyone",
    "Programming for Everybody (Python)",
    "Intro to Front-End Development",
    "What is Data Science?"
];

export default function BentoGrid() {
  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Title Card */}
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="md:col-span-3 p-8 border border-white/10 bg-white/5 backdrop-blur-sm rounded-none relative group overflow-hidden"
          >
             <div className="absolute top-0 left-0 bg-white/10 px-2 py-1 text-[10px] font-mono text-white">
                ~/rudra/overview.md
             </div>
             <h2 className="text-4xl font-sans font-bold mb-4">EXPERIENCE & SKILLS</h2>
             <p className="text-gray-400 max-w-2xl">
                A detailed log of my technical journey, academic achievements, and professional roles.
                Focused on Software Engineering, AI, and Data Science.
             </p>
          </motion.div>

          {/* Experience Column */}
          <div className="md:col-span-2 flex flex-col gap-6">
            {experiences.map((exp, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 border border-white/10 bg-black/40 hover:bg-white/5 transition-colors backdrop-blur-sm relative group"
                >
                    {/* Decorators */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Briefcase size={16} className="text-cyber-accent" />
                    </div>
                    <div className="absolute -left-[1px] top-6 w-[3px] h-8 bg-cyber-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                        <span className="font-mono text-xs text-gray-500">{exp.period}</span>
                    </div>
                    <p className="text-sm font-mono text-cyber-accent mb-3">{exp.company}</p>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                        {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag, tIndex) => (
                            <span key={tIndex} className="px-2 py-1 bg-white/10 text-[10px] font-mono rounded text-gray-300 border border-white/5">
                                {tag}
                            </span>
                        ))}
                    </div>
                </motion.div>
            ))}

            {/* View Full Archive Button */}
            <motion.a
                href="/Resume.pdf"
                download
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="group flex items-center justify-between p-6 border border-white/10 bg-white/5 hover:bg-white/10 transition-all cursor-pointer"
            >
                <span className="font-mono text-sm text-gray-300 group-hover:text-white transition-colors">
                    VIEW_FULL_ARCHIVE
                </span>
                <FileText className="text-gray-400 group-hover:text-white transition-colors" size={20} />
            </motion.a>
          </div>

          {/* Sidebar Column: Education & Skills */}
          <div className="md:col-span-1 grid grid-cols-1 gap-6 content-start">

             {/* Education */}
             <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-6 border border-white/10 bg-black/40 backdrop-blur-sm relative"
             >
                <div className="flex items-center gap-2 mb-4 text-cyber-accent">
                    <GraduationCap size={20} />
                    <h3 className="font-bold font-mono">EDUCATION</h3>
                </div>
                <div className="mb-4">
                    <h4 className="text-lg font-bold text-white">Penn State University</h4>
                    <p className="text-sm text-gray-400">B.S. Computer Science</p>
                    <p className="text-xs font-mono text-gray-500 mt-1">2025 - 2028 | GPA: 3.97</p>
                </div>
             </motion.div>

             {/* Skills */}
             <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-6 border border-white/10 bg-black/40 backdrop-blur-sm relative"
             >
                 <div className="flex items-center gap-2 mb-4 text-cyber-accent">
                    <Cpu size={20} />
                    <h3 className="font-bold font-mono">SKILLS_MATRIX</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                        <span key={index} className="px-3 py-1 bg-white/5 border border-white/10 text-xs font-mono hover:bg-white/20 transition-colors cursor-crosshair">
                            {skill}
                        </span>
                    ))}
                </div>
             </motion.div>

             {/* Certifications */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="p-6 border border-white/10 bg-black/40 backdrop-blur-sm relative overflow-hidden"
             >
                 <div className="flex items-center gap-2 mb-4 text-cyber-accent">
                    <Award size={20} />
                    <h3 className="font-bold font-mono">CERTIFICATIONS</h3>
                </div>
                <div className="flex flex-col gap-2">
                    {certifications.map((cert, index) => (
                         <div key={index} className="px-3 py-2 bg-white/5 border border-white/10 text-xs text-gray-300 font-mono rounded-sm whitespace-nowrap overflow-hidden text-ellipsis">
                            {cert}
                        </div>
                    ))}
                </div>
             </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
