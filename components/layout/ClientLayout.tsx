'use client';

import { useState } from 'react';
import Header from './Header';
import KeyboardGuide from '@/components/accessibility/KeyboardGuide';
import KeyboardShortcuts from '@/components/accessibility/KeyboardShortcuts';
import KeyboardHint from '@/components/accessibility/KeyboardHint';

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [isKeyboardGuideOpen, setIsKeyboardGuideOpen] = useState(false);

  return (
    <>
      <Header />
      {children}
      <KeyboardHint onOpenGuide={() => setIsKeyboardGuideOpen(true)} />
      <KeyboardGuide
        isOpen={isKeyboardGuideOpen}
        onClose={() => setIsKeyboardGuideOpen(false)}
      />
      <KeyboardShortcuts onOpenGuide={() => setIsKeyboardGuideOpen(true)} />
    </>
  );
}
