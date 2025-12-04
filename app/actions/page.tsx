'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import FadeIn from '@/components/animations/FadeIn';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { ACTIONS } from '@/lib/constants';
import { getDifficultyColor } from '@/lib/utils';

export default function ActionsPage() {
  const [completedActions, setCompletedActions] = useState<string[]>([]);

  const toggleAction = (actionName: string) => {
    setCompletedActions(prev =>
      prev.includes(actionName)
        ? prev.filter(a => a !== actionName)
        : [...prev, actionName]
    );
  };

  const totalActions = ACTIONS.reduce((sum, cat) => sum + cat.items.length, 0);
  const completionRate = Math.round((completedActions.length / totalActions) * 100);

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-950 via-emerald-900 to-teal-950 pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="text-8xl mb-6"
            >
              ⚒️
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              La Forge des Actions
            </h1>
            <p className="text-xl md:text-2xl text-green-200 max-w-3xl mx-auto">
              Actions concrètes pour un numérique libre et durable
            </p>
          </div>
        </FadeIn>

        {/* Progress Bar */}
        <FadeIn delay={0.2}>
          <Card gradient="from-white/10 to-white/5" className="mb-12 max-w-3xl mx-auto">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Votre Progression
              </h3>
              <div className="relative w-full h-8 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${completionRate}%` }}
                  transition={{ duration: 0.5 }}
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-500 to-emerald-400 flex items-center justify-center"
                >
                  {completionRate > 10 && (
                    <span className="text-white font-bold text-sm">
                      {completionRate}%
                    </span>
                  )}
                </motion.div>
              </div>
              <p className="text-gray-300 mt-3">
                {completedActions.length} / {totalActions} actions complétées
              </p>
            </div>
          </Card>
        </FadeIn>

        {/* Actions by Category */}
        <div className="space-y-12">
          {ACTIONS.map((category, catIndex) => (
            <FadeIn key={category.category} delay={0.3 + catIndex * 0.1}>
              <div>
                <h2 className="text-4xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-5xl">{category.icon}</span>
                  {category.category}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((action, index) => {
                    const isCompleted = completedActions.includes(action.name);

                    return (
                      <motion.div
                        key={action.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Card
                          gradient={isCompleted ? 'from-green-600 to-emerald-600' : 'from-white/10 to-white/5'}
                          hover={true}
                          onClick={() => toggleAction(action.name)}
                        >
                          <div className="flex items-start justify-between mb-4">
                            <h3 className="text-xl font-bold text-white flex-1">
                              {action.name}
                            </h3>
                            <motion.button
                              whileTap={{ scale: 0.9 }}
                              className={`text-3xl ${isCompleted ? 'text-white' : 'text-gray-500'}`}
                            >
                              {isCompleted ? '✓' : '○'}
                            </motion.button>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <span className="text-gray-300 text-sm">Difficulté:</span>
                              <span className={`text-sm font-semibold ${getDifficultyColor(action.difficulty)}`}>
                                {action.difficulty === 'easy' ? 'Facile' : action.difficulty === 'medium' ? 'Moyenne' : 'Difficile'}
                              </span>
                            </div>

                            <div className="flex items-center gap-2">
                              <span className="text-gray-300 text-sm">Impact:</span>
                              <div className="flex gap-1">
                                {[...Array(3)].map((_, i) => (
                                  <div
                                    key={i}
                                    className={`w-3 h-3 rounded-full ${
                                      (action.impact === 'high' && i < 3) ||
                                      (action.impact === 'medium' && i < 2) ||
                                      (action.impact === 'low' && i < 1)
                                        ? 'bg-yellow-400'
                                        : 'bg-gray-600'
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>
                          </div>

                          {!isCompleted && (
                            <div className="mt-4 text-sm text-green-300">
                              Cliquez pour marquer comme complété
                            </div>
                          )}
                        </Card>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Motivational Section */}
        <FadeIn delay={0.8}>
          <div className="mt-16 text-center bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              {completionRate === 100
                ? '🎉 Félicitations, champion de NIRD !'
                : completionRate > 50
                ? '💪 Continue comme ça !'
                : '🚀 Chaque action compte !'}
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              {completionRate === 100
                ? 'Vous êtes un véritable résistant numérique. Partagez votre expérience avec la communauté !'
                : 'Chaque petit geste contribue à un numérique plus inclusif, responsable et durable.'}
            </p>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => window.location.href = '/community'}
            >
              Rejoindre la communauté →
            </Button>
          </div>
        </FadeIn>

        {/* Tips Section */}
        <FadeIn delay={1}>
          <div className="mt-12 max-w-4xl mx-auto">
            <Card gradient="from-blue-900/30 to-purple-900/30">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span>💡</span> Conseils pour bien débuter
              </h3>
              <ul className="space-y-3 text-gray-200">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">1.</span>
                  <span>Commencez par les actions "Faciles" pour prendre confiance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">2.</span>
                  <span>Priorisez les actions à "Impact Élevé" pour un maximum d'effet</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">3.</span>
                  <span>Partagez vos réussites avec votre entourage pour créer un effet domino</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">4.</span>
                  <span>Ne vous découragez pas : chaque action, même petite, fait la différence</span>
                </li>
              </ul>
            </Card>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
