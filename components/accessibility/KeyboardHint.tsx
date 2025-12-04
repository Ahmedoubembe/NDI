'use client';

import { motion } from 'framer-motion';

interface KeyboardHintProps {
  onOpenGuide: () => void;
}

export default function KeyboardHint({ onOpenGuide }: KeyboardHintProps) {
  const quickShortcuts = [
    { key: '?', label: 'Aide' },
    { key: '1-5', label: 'Navigation' },
    { key: 'M', label: 'Vue' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-40"
    >
      {/* Badge cliquable */}
      <motion.button
        onClick={onOpenGuide}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-2xl shadow-2xl border-2 border-white/30 overflow-hidden backdrop-blur-sm"
        aria-label="Voir le guide complet des raccourcis clavier"
      >
        {/* Header du badge */}
        <div className="px-4 py-2 bg-white/10 border-b border-white/20 flex items-center gap-2">
          <span className="text-2xl">⌨️</span>
          <span className="text-white font-bold text-sm">Raccourcis</span>
        </div>

        {/* Liste des raccourcis */}
        <div className="px-4 py-3 space-y-2">
          {quickShortcuts.map((shortcut, index) => (
            <motion.div
              key={shortcut.key}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 + index * 0.1 }}
              className="flex items-center justify-between gap-3 text-sm"
            >
              <kbd className="px-2 py-1 bg-white/20 text-white rounded font-mono text-xs min-w-[2.5rem] text-center border border-white/30">
                {shortcut.key}
              </kbd>
              <span className="text-white/90 text-xs">{shortcut.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Footer du badge */}
        <div className="px-4 py-2 bg-white/10 border-t border-white/20">
          <p className="text-white/70 text-xs text-center">
            Cliquez pour voir tout
          </p>
        </div>
      </motion.button>

      {/* Pulse animation */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500 to-pink-500 opacity-30 -z-10"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
}
