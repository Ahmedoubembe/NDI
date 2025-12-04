'use client';

import { useState } from 'react';
import Header from './Header';
import KeyboardGuide from '@/components/accessibility/KeyboardGuide';
import KeyboardShortcuts from '@/components/accessibility/KeyboardShortcuts';

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [isKeyboardGuideOpen, setIsKeyboardGuideOpen] = useState(false);

  return (
    <>
      <Header onOpenKeyboardGuide={() => setIsKeyboardGuideOpen(true)} />
      {children}
      <KeyboardGuide
        isOpen={isKeyboardGuideOpen}
        onClose={() => setIsKeyboardGuideOpen(false)}
      />
      <KeyboardShortcuts onOpenGuide={() => setIsKeyboardGuideOpen(true)} />
    </>
  );
}
