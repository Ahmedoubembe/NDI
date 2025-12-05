'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface GuidedTourProps {
  onComplete: () => void;
}

interface TourStep {
  id: string;
  title: string;
  description: string;
  spotlightSelector?: string;
  position: 'center' | 'top' | 'bottom' | 'left' | 'right';
}

const TOUR_STEPS: TourStep[] = [
  {
    id: 'welcome',
    title: '🏛️ Bienvenue au Village NIRD !',
    description: 'Découvrez une nouvelle façon d\'explorer le numérique responsable. Cliquez sur les bâtiments pour naviguer.',
    position: 'center'
  },
  {
    id: 'keyboard',
    title: '⌨️ Utilisez les Raccourcis',
    description: 'Touches 1-5 pour naviguer rapidement entre les sections. Touche ? pour voir tous les raccourcis.',
    spotlightSelector: '[data-keyboard-hint]',
    position: 'right'
  },
  {
    id: 'toggle',
    title: '📋 Préférez une Liste ?',
    description: 'Basculez en mode liste avec la touche M ou ce bouton pour une navigation plus classique.',
    spotlightSelector: '[data-toggle-view]',
    position: 'bottom'
  },
  {
    id: 'explore',
    title: '✨ C\'est Parti !',
    description: 'Vous êtes prêt à explorer le village. Amusez-vous bien et découvrez NIRD !',
    position: 'center'
  }
];

export default function GuidedTour({ onComplete }: GuidedTourProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [spotlightPosition, setSpotlightPosition] = useState({ x: 0, y: 0, width: 0, height: 0 });

  useEffect(() => {
    // Check if user has seen the tour
    const hasSeenTour = localStorage.getItem('nird_tour_completed');
    if (!hasSeenTour) {
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const step = TOUR_STEPS[currentStep];
    if (step.spotlightSelector) {
      const element = document.querySelector(step.spotlightSelector);
      if (element) {
        const rect = element.getBoundingClientRect();
        setSpotlightPosition({
          x: rect.left,
          y: rect.top,
          width: rect.width,
          height: rect.height
        });
      }
    }
  }, [currentStep, isVisible]);

  const handleNext = () => {
    if (currentStep < TOUR_STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      completeTour();
    }
  };

  const handleSkip = () => {
    completeTour();
  };

  const completeTour = () => {
    localStorage.setItem('nird_tour_completed', 'true');
    setIsVisible(false);
    onComplete();
  };

  const step = TOUR_STEPS[currentStep];

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-[100]"
            onClick={handleSkip}
          />

          {/* Spotlight */}
          {step.spotlightSelector && (
            <motion.div
              className="fixed z-[101] pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                x: spotlightPosition.x - 8,
                y: spotlightPosition.y - 8,
                width: spotlightPosition.width + 16,
                height: spotlightPosition.height + 16
              }}
              transition={{ type: 'spring', stiffness: 100 }}
            >
              <div className="w-full h-full rounded-xl border-4 border-yellow-400 shadow-[0_0_0_9999px_rgba(0,0,0,0.7),0_0_20px_rgba(250,204,21,0.5)]" />
            </motion.div>
          )}

          {/* Tour Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className={`fixed z-[102] ${getPositionClasses(step.position)}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-2xl shadow-2xl p-8 max-w-md border-2 border-white/30">
              {/* Progress */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-2">
                  {TOUR_STEPS.map((_, index) => (
                    <div
                      key={index}
                      className={`h-2 rounded-full transition-all ${
                        index === currentStep
                          ? 'w-8 bg-white'
                          : index < currentStep
                          ? 'w-2 bg-white/70'
                          : 'w-2 bg-white/30'
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={handleSkip}
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  Passer
                </button>
              </div>

              {/* Content */}
              <h3 className="text-3xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                {step.description}
              </p>

              {/* Actions */}
              <div className="flex items-center justify-between">
                <div className="text-white/70 text-sm">
                  {currentStep + 1} / {TOUR_STEPS.length}
                </div>
                <button
                  onClick={handleNext}
                  className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg"
                >
                  {currentStep < TOUR_STEPS.length - 1 ? 'Suivant →' : 'Commencer !'}
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function getPositionClasses(position: TourStep['position']): string {
  switch (position) {
    case 'center':
      return 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2';
    case 'top':
      return 'top-24 left-1/2 transform -translate-x-1/2';
    case 'bottom':
      return 'bottom-24 left-1/2 transform -translate-x-1/2';
    case 'left':
      return 'top-1/2 left-24 transform -translate-y-1/2';
    case 'right':
      return 'top-1/2 right-24 transform -translate-y-1/2';
  }
}
