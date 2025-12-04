'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface BuildingProps {
  id: string;
  name: string;
  description: string;
  icon: string;
  route: string;
  position: { x: number; y: number };
  color: string;
}

export default function Building({
  name,
  description,
  icon,
  route,
  position,
  color
}: BuildingProps) {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="absolute cursor-pointer"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: 'translate(-50%, -50%)'
      }}
      whileHover={{ scale: 1.2, zIndex: 50 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => router.push(route)}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Building Icon */}
      <motion.div
        className={`relative w-20 h-20 md:w-32 md:h-32 rounded-2xl bg-gradient-to-br ${color} shadow-2xl flex items-center justify-center text-4xl md:text-6xl border-4 border-white`}
        animate={{
          boxShadow: isHovered
            ? '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
            : '0 10px 25px -5px rgba(0, 0, 0, 0.3)'
        }}
      >
        {icon}

        {/* Pulse animation */}
        <motion.div
          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${color} opacity-50`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          y: isHovered ? 0 : 10
        }}
        className="absolute top-full mt-4 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-xl p-4 min-w-[200px] border-2 border-gray-200"
      >
        <h3 className="font-bold text-lg text-gray-800 mb-1">{name}</h3>
        <p className="text-sm text-gray-600">{description}</p>
        <div className="mt-2 text-xs text-blue-600 font-semibold">
          Cliquez pour explorer →
        </div>
      </motion.div>

      {/* Connection lines (optional) */}
      <motion.div
        className="absolute bottom-0 left-1/2 w-0.5 h-8 bg-gradient-to-b from-white to-transparent"
        animate={{
          opacity: [0.3, 0.7, 0.3]
        }}
        transition={{
          duration: 2,
          repeat: Infinity
        }}
      />
    </motion.div>
  );
}
