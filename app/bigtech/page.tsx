'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import FadeIn from '@/components/animations/FadeIn';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { BIG_TECH_ISSUES, TIMELINE_EVENTS } from '@/lib/constants';
import { getImpactColor } from '@/lib/utils';

export default function BigTechPage() {
  const [selectedIssue, setSelectedIssue] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-black pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="text-8xl mb-6"
            >
              🏰
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              La Tour des Géants
            </h1>
            <p className="text-xl md:text-2xl text-red-200 max-w-3xl mx-auto">
              Comprendre la domination des Big Tech et leurs impacts sur notre société
            </p>
          </div>
        </FadeIn>

        {/* Timeline */}
        <FadeIn delay={0.2}>
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              📅 L'Histoire de la Centralisation
            </h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-red-500 to-green-500" />

              <div className="space-y-8">
                {TIMELINE_EVENTS.map((event, index) => (
                  <motion.div
                    key={event.year}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex items-center ${
                      index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                    }`}
                  >
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                      <Card gradient="from-white/10 to-white/5">
                        <div className="text-2xl font-bold text-yellow-400 mb-2">
                          {event.year}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-1">
                          {event.title}
                        </h3>
                        <p className="text-gray-300">{event.description}</p>
                      </Card>
                    </div>
                    <div className="w-8 h-8 bg-white rounded-full border-4 border-red-500 z-10" />
                    <div className="w-1/2" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Issues Grid */}
        <FadeIn delay={0.4}>
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              ⚠️ Les Problèmes Majeurs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {BIG_TECH_ISSUES.map((issue, index) => (
                <motion.div
                  key={issue.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card
                    gradient="from-red-900/50 to-red-950/50"
                    hover={true}
                    onClick={() => setSelectedIssue(selectedIssue === issue.id ? null : issue.id)}
                  >
                    <div className="text-5xl mb-4">{issue.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {issue.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{issue.description}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-white text-sm">Impact:</span>
                      <span className={`px-3 py-1 rounded-full text-white text-sm font-semibold ${getImpactColor(issue.impact)}`}>
                        {issue.impact === 'high' ? 'Élevé' : issue.impact === 'medium' ? 'Moyen' : 'Faible'}
                      </span>
                    </div>

                    {selectedIssue === issue.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="mt-4 pt-4 border-t border-red-500"
                      >
                        <p className="text-gray-200 text-sm">
                          Cliquez pour explorer les solutions NIRD pour contrer ce problème.
                        </p>
                      </motion.div>
                    )}
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Call to Action */}
        <FadeIn delay={0.6}>
          <div className="text-center bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Il est temps de résister !
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Découvrez comment NIRD propose une alternative inclusive, responsable et durable
            </p>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => window.location.href = '/nird'}
            >
              Découvrir NIRD →
            </Button>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
