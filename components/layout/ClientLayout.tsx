'use client';

import { useState } from 'react';
import KeyboardGuide from '@/components/accessibility/KeyboardGuide';
import KeyboardShortcuts from '@/components/accessibility/KeyboardShortcuts';
import KeyboardHint from '@/components/accessibility/KeyboardHint';
import GuidedTour from '@/components/onboarding/GuidedTour';
import MiniMap from '@/components/navigation/MiniMap';

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [isKeyboardGuideOpen, setIsKeyboardGuideOpen] = useState(false);

  return (
    <>
      {children}
      <div data-keyboard-hint>
        <KeyboardHint onOpenGuide={() => setIsKeyboardGuideOpen(true)} />
      </div>
      <MiniMap />
      <KeyboardGuide
        isOpen={isKeyboardGuideOpen}
        onClose={() => setIsKeyboardGuideOpen(false)}
      />
      <KeyboardShortcuts onOpenGuide={() => setIsKeyboardGuideOpen(true)} />
      <GuidedTour onComplete={() => console.log('Tour completed!')} />
    </>
  );
}
