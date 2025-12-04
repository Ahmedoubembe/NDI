'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

interface KeyboardGuideProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function KeyboardGuide({ isOpen, onClose }: KeyboardGuideProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  const shortcuts = [
    {
      category: '🗺️ Navigation Principale',
      items: [
        { keys: ['1'], description: 'Aller à l\'accueil (Village)' },
        { keys: ['2'], description: 'Aller à Big Tech' },
        { keys: ['3'], description: 'Aller à NIRD' },
        { keys: ['4'], description: 'Aller aux Actions' },
        { keys: ['5'], description: 'Aller à la Communauté' },
      ]
    },
    {
      category: '⌨️ Navigation dans le Village',
      items: [
        { keys: ['Tab'], description: 'Naviguer entre les bâtiments' },
        { keys: ['Enter', 'Espace'], description: 'Entrer dans un bâtiment' },
        { keys: ['↑', '↓', '←', '→'], description: 'Déplacer la vue (futur)' },
      ]
    },
    {
      category: '🎯 Actions',
      items: [
        { keys: ['M'], description: 'Basculer mode Carte/Liste' },
        { keys: ['Espace'], description: 'Marquer une action comme complétée' },
        { keys: ['Enter'], description: 'Valider / Ouvrir un élément' },
      ]
    },
    {
      category: '❓ Aide & Accessibilité',
      items: [
        { keys: ['?', 'Shift + /'], description: 'Ouvrir ce guide' },
        { keys: ['Esc'], description: 'Fermer ce guide / Modal' },
        { keys: ['Tab'], description: 'Naviguer entre les éléments' },
        { keys: ['Shift + Tab'], description: 'Navigation arrière' },
      ]
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={onClose}
          >
            <div
              className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border-2 border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-6 border-b border-white/20">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">
                      ⌨️ Guide de Navigation Clavier
                    </h2>
                    <p className="text-blue-100">
                      Utilisez votre clavier pour une navigation rapide et accessible
                    </p>
                  </div>
                  <button
                    onClick={onClose}
                    className="text-white hover:bg-white/20 rounded-lg p-2 transition-all"
                    aria-label="Fermer le guide"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 space-y-8">
                {shortcuts.map((section, index) => (
                  <motion.div
                    key={section.category}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                      {section.category}
                    </h3>
                    <div className="space-y-3">
                      {section.items.map((shortcut, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + idx * 0.05 }}
                          className="flex items-center justify-between bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-all"
                        >
                          <span className="text-gray-200 flex-1">
                            {shortcut.description}
                          </span>
                          <div className="flex gap-2">
                            {shortcut.keys.map((key, keyIdx) => (
                              <kbd
                                key={keyIdx}
                                className="px-3 py-1.5 bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-lg shadow-lg border border-gray-600 font-mono text-sm min-w-[2.5rem] text-center"
                              >
                                {key}
                              </kbd>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}

                {/* Tips */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-gradient-to-r from-green-600/30 to-emerald-600/30 rounded-lg p-6 border border-green-400/30"
                >
                  <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    💡 Astuce
                  </h4>
                  <p className="text-gray-200">
                    La plupart des éléments interactifs peuvent être activés avec <kbd className="px-2 py-1 bg-gray-800 rounded text-sm mx-1">Enter</kbd> ou <kbd className="px-2 py-1 bg-gray-800 rounded text-sm mx-1">Espace</kbd>.
                    Utilisez <kbd className="px-2 py-1 bg-gray-800 rounded text-sm mx-1">Tab</kbd> pour naviguer entre les éléments et voir le focus visuel.
                  </p>
                </motion.div>
              </div>

              {/* Footer */}
              <div className="sticky bottom-0 bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 border-t border-white/20">
                <div className="flex items-center justify-between">
                  <p className="text-white/80 text-sm">
                    Appuyez sur <kbd className="px-2 py-1 bg-white/20 rounded text-sm mx-1">Esc</kbd> pour fermer ce guide
                  </p>
                  <button
                    onClick={onClose}
                    className="bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-all"
                  >
                    Compris !
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
