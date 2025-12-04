'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import FadeIn from '@/components/animations/FadeIn';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { NIRD_PILLARS } from '@/lib/constants';

export default function NirdPage() {
  const [activePillar, setActivePillar] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-950 via-blue-900 to-purple-950 pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8 }}
              className="text-8xl mb-6"
            >
              ⚡
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Le Temple du Savoir NIRD
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto">
              Numérique Inclusif, Responsable et Durable
            </p>
          </div>
        </FadeIn>

        {/* Introduction */}
        <FadeIn delay={0.2}>
          <Card gradient="from-white/10 to-white/5" className="mb-16 max-w-4xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Qu'est-ce que NIRD ?
              </h2>
              <p className="text-lg text-gray-200 leading-relaxed">
                NIRD est une démarche qui vise à construire un numérique accessible à tous,
                respectueux de nos données et de notre planète. Face à la domination des géants
                du numérique, NIRD propose une alternative basée sur trois piliers fondamentaux.
              </p>
            </div>
          </Card>
        </FadeIn>

        {/* The 3 Pillars - Triangle Layout */}
        <FadeIn delay={0.4}>
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">
              🏛️ Les 3 Piliers de NIRD
            </h2>

            {/* Interactive Pillars */}
            <div className="relative max-w-6xl mx-auto">
              {/* Central connecting element */}
              <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-5xl z-0">
                🛡️
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {NIRD_PILLARS.map((pillar, index) => (
                  <motion.div
                    key={pillar.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="relative z-10"
                  >
                    <Card
                      gradient={activePillar === pillar.id ? pillar.color : 'from-white/10 to-white/5'}
                      hover={true}
                      onClick={() => setActivePillar(activePillar === pillar.id ? null : pillar.id)}
                    >
                      <motion.div
                        animate={{
                          scale: activePillar === pillar.id ? 1.1 : 1
                        }}
                        className="text-center"
                      >
                        <div className="text-6xl mb-4">{pillar.icon}</div>
                        <h3 className="text-3xl font-bold text-white mb-3">
                          {pillar.name}
                        </h3>
                        <p className="text-gray-200 text-lg mb-6">
                          {pillar.description}
                        </p>

                        {/* Values List */}
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{
                            height: activePillar === pillar.id ? 'auto' : 0,
                            opacity: activePillar === pillar.id ? 1 : 0
                          }}
                          className="overflow-hidden"
                        >
                          <div className="pt-6 border-t border-white/20">
                            <h4 className="text-white font-semibold mb-4">Valeurs clés :</h4>
                            <ul className="space-y-2">
                              {pillar.values.map((value, i) => (
                                <motion.li
                                  key={i}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.1 }}
                                  className="flex items-center gap-2 text-white"
                                >
                                  <span className="text-green-400">✓</span>
                                  <span>{value}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>

                        {activePillar !== pillar.id && (
                          <div className="text-blue-300 text-sm font-semibold mt-4">
                            Cliquez pour en savoir plus →
                          </div>
                        )}
                      </motion.div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Why NIRD? */}
        <FadeIn delay={0.6}>
          <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card gradient="from-green-900/50 to-green-950/50">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span>✓</span> Ce que NIRD apporte
              </h3>
              <ul className="space-y-3 text-gray-200">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Liberté face aux géants du numérique</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Protection de vos données personnelles</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Réduction de l'impact environnemental</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Accès au numérique pour tous</span>
                </li>
              </ul>
            </Card>

            <Card gradient="from-blue-900/50 to-blue-950/50">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span>🎯</span> Pour qui ?
              </h3>
              <ul className="space-y-3 text-gray-200">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">👨‍🎓</span>
                  <span>Élèves et étudiants</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">👨‍🏫</span>
                  <span>Enseignants et éducateurs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">👨‍👩‍👧‍👦</span>
                  <span>Familles</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">🏛️</span>
                  <span>Collectivités et organisations</span>
                </li>
              </ul>
            </Card>
          </div>
        </FadeIn>

        {/* Call to Action */}
        <FadeIn delay={0.8}>
          <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Prêt à passer à l'action ?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Découvrez les actions concrètes que vous pouvez mettre en place dès aujourd'hui
            </p>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => window.location.href = '/actions'}
            >
              Voir les actions →
            </Button>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
