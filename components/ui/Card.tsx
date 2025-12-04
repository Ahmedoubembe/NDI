'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  gradient?: string;
  hover?: boolean;
  onClick?: () => void;
}

export default function Card({
  children,
  className,
  gradient = 'from-white to-gray-50',
  hover = true,
  onClick
}: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
      className={cn(
        'rounded-xl p-6 shadow-lg bg-gradient-to-br backdrop-blur-sm border border-gray-200',
        gradient,
        onClick && 'cursor-pointer',
        className
      )}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
