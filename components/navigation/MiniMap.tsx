'use client';

import { motion } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { VILLAGE_BUILDINGS } from '@/lib/constants';

export default function MiniMap() {
  const pathname = usePathname();
  const router = useRouter();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="fixed bottom-24 left-6 z-30"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5 }}
    >
      <motion.div
        className="bg-gradient-to-br from-indigo-900/90 to-purple-900/90 backdrop-blur-md rounded-xl shadow-2xl border-2 border-white/20 overflow-hidden"
        animate={{
          width: isExpanded ? 200 : 120,
          height: isExpanded ? 160 : 100,
          opacity: isExpanded ? 1 : 0.6
        }}
      >
        {/* Header */}
        <div className="bg-white/10 px-3 py-2 border-b border-white/20">
          <p className="text-white text-xs font-semibold">🗺️ Mini-Carte</p>
        </div>

        {/* Map Content */}
        <div className="relative p-3 h-full">
          {/* Simplified Village */}
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {/* Island */}
            <ellipse
              cx="50"
              cy="70"
              rx="45"
              ry="25"
              fill="rgba(34, 197, 94, 0.3)"
              stroke="rgba(255, 255, 255, 0.3)"
              strokeWidth="1"
            />

            {/* Buildings */}
            {VILLAGE_BUILDINGS.map((building) => {
              const isActive = pathname === building.route;
              return (
                <g key={building.id}>
                  <motion.circle
                    cx={building.position.x}
                    cy={building.position.y}
                    r={isActive ? "8" : "5"}
                    fill={isActive ? "white" : "rgba(255, 255, 255, 0.5)"}
                    stroke="rgba(255, 255, 255, 0.8)"
                    strokeWidth="1"
                    className="cursor-pointer"
                    onClick={() => router.push(building.route)}
                    whileHover={{ scale: 1.3 }}
                    animate={isActive ? {
                      scale: [1, 1.2, 1],
                      opacity: [1, 0.7, 1]
                    } : {}}
                    transition={{
                      duration: 1.5,
                      repeat: isActive ? Infinity : 0
                    }}
                  />
                  {isExpanded && (
                    <text
                      x={building.position.x}
                      y={building.position.y - 12}
                      fontSize="6"
                      fill="white"
                      textAnchor="middle"
                      className="pointer-events-none"
                    >
                      {building.icon}
                    </text>
                  )}
                </g>
              );
            })}
          </svg>
        </div>
      </motion.div>
    </motion.div>
  );
}
