'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

interface KeyboardShortcutsProps {
  onOpenGuide: () => void;
}

export default function KeyboardShortcuts({ onOpenGuide }: KeyboardShortcutsProps) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Ignore si on est dans un input/textarea
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement ||
        e.target instanceof HTMLSelectElement
      ) {
        return;
      }

      // Navigation principale (1-5)
      switch (e.key) {
        case '1':
          router.push('/');
          break;
        case '2':
          router.push('/bigtech');
          break;
        case '3':
          router.push('/nird');
          break;
        case '4':
          router.push('/actions');
          break;
        case '5':
          router.push('/community');
          break;
        case '?':
        case '/':
          if (e.shiftKey) {
            e.preventDefault();
            onOpenGuide();
          }
          break;
        case 'm':
        case 'M':
          // Basculer mode carte/liste (si on est sur la page d'accueil)
          if (pathname === '/') {
            const toggleButton = document.querySelector('[data-toggle-view]') as HTMLButtonElement;
            if (toggleButton) {
              toggleButton.click();
            }
          }
          break;
      }

      // Navigation par flèches (futur)
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
        // TODO: Implémenter la navigation par flèches dans le village
        // Pour l'instant, on laisse le comportement par défaut
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [router, pathname, onOpenGuide]);

  return null; // Ce composant ne rend rien
}
