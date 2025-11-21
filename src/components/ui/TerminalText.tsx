'use client';

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useState } from 'react';

interface TerminalTextProps {
  text: string;
  className?: string;
}

export default function TerminalText({ text, className = '' }: TerminalTextProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) => text.slice(0, latest));
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const controls = animate(count, text.length, {
      type: 'tween',
      duration: 2,
      ease: 'easeInOut',
    });
    return controls.stop;
  }, [count, text.length]);

  useEffect(() => {
    const interval = setInterval(() => {
        setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className={className}>
      <motion.span>{displayText}</motion.span>
      <span className={`inline-block w-[1ch] h-[1.2em] bg-cyber-accent ml-1 align-middle ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
    </span>
  );
}
