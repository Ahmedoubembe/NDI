'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Building from './Building';
import { VILLAGE_BUILDINGS } from '@/lib/constants';

export default function VillageMap() {
  const [viewMode, setViewMode] = useState<'map' | 'list'>('map');

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background with parallax layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        {/* Stars */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>

        {/* Clouds/Fog effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-indigo-900/50 to-transparent"
          animate={{
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 5,
            repeat: Infinity
          }}
        />
      </div>

      {/* Village Title */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10 text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
          🏛️ Le Village NIRD
        </h1>
        <p className="text-lg md:text-xl text-blue-200">
          Explorez le village de la résistance numérique
        </p>
      </motion.div>

      {/* View Mode Toggle */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        className="absolute top-8 right-8 z-10"
      >
        <button data-toggle-view="true"
          onClick={() => setViewMode(viewMode === 'map' ? 'list' : 'map')}
          className="bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-lg border border-white/20 hover:bg-white/20 transition-all"
        >
          {viewMode === 'map' ? '📋 Mode Liste' : '🗺️ Mode Carte'}
        </button>
      </motion.div>

      {/* Map View */}
      {viewMode === 'map' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative w-full h-full"
        >
          {/* Ground/Island */}
          <motion.div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[80%] h-[70%] rounded-t-full bg-gradient-to-t from-green-800 via-green-700 to-green-600 shadow-2xl"
            animate={{
              y: [0, -10, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {/* Village Buildings */}
            {VILLAGE_BUILDINGS.map((building, index) => (
              <motion.div
                key={building.id}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <Building {...building} />
              </motion.div>
            ))}

            {/* Decorative elements */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-20 bg-gradient-to-t from-amber-900/50 to-transparent rounded-t-full" />
          </motion.div>

          {/* Instructions */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-full border border-white/20"
          >
            ✨ Survolez et cliquez sur les bâtiments pour naviguer
          </motion.div>
        </motion.div>
      )}

      {/* List View */}
      {viewMode === 'list' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 flex items-center justify-center p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
            {VILLAGE_BUILDINGS.map((building, index) => (
              <motion.a
                key={building.id}
                href={building.route}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`bg-gradient-to-br ${building.color} p-6 rounded-xl shadow-xl border-2 border-white/20 backdrop-blur-sm`}
              >
                <div className="text-5xl mb-4">{building.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{building.name}</h3>
                <p className="text-white/80">{building.description}</p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
