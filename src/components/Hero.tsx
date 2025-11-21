'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import TerminalText from '@/components/ui/TerminalText';
import { Download, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 lg:order-1"
        >
          <div className="font-mono text-cyber-accent mb-4 text-sm lg:text-base tracking-widest uppercase">
             &gt; INITIALIZING SYSTEM...
          </div>

          <h1 className="text-5xl lg:text-7xl font-sans font-bold tracking-tighter mb-6 leading-tight">
            RUDRA <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-600">
              DESAI
            </span>
          </h1>

          <div className="text-xl lg:text-2xl font-mono text-gray-400 mb-8 h-16">
            <span className="text-cyber-accent mr-2">$</span>
            <TerminalText text="Engineering the future with AI & Algorithms." />
          </div>

          <div className="flex flex-wrap gap-4">
             <a href="/Resume.pdf" download className="group relative px-6 py-3 bg-white text-black font-mono font-bold text-sm tracking-wider hover:bg-gray-200 transition-all clip-path-slant">
                <span className="flex items-center gap-2">
                    <Download size={18} />
                    DOWNLOAD_RESUME
                </span>
             </a>
             <div className="flex gap-4 items-center ml-4">
                <a href="https://github.com/rd0806" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/rudradesai08" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <Linkedin size={24} />
                </a>
                <a href="mailto:rudradesai0806@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                    <Mail size={24} />
                </a>
             </div>
          </div>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end relative"
        >
            <div className="relative w-64 h-64 lg:w-96 lg:h-96">
                {/* Decorative rings */}
                <div className="absolute inset-0 border border-cyber-glass-border rounded-full animate-spin-slow"></div>
                <div className="absolute -inset-4 border border-dashed border-gray-800 rounded-full animate-reverse-spin"></div>

                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/10 grayscale contrast-150 hover:grayscale-0 transition-all duration-700">
                    <Image
                        src="/profile.jpg"
                        alt="Rudra Desai"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Tech decorations */}
                <div className="absolute -right-8 top-1/4 bg-black/80 backdrop-blur-md border border-white/10 p-2 font-mono text-xs text-cyber-accent">
                    STATUS: ONLINE
                </div>
                <div className="absolute -left-4 bottom-1/4 bg-black/80 backdrop-blur-md border border-white/10 p-2 font-mono text-xs text-gray-400">
                    LOC: PENN STATE
                </div>
            </div>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-xs text-gray-500">SCROLL</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white to-transparent"></div>
      </motion.div>
    </section>
  );
}
