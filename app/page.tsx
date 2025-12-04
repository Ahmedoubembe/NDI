'use client';

import VillageMap from '@/components/village/VillageMap';
import FadeIn from '@/components/animations/FadeIn';

export default function Home() {
  return (
    <main className="min-h-screen">
      <FadeIn>
        <VillageMap />
      </FadeIn>
    </main>
  );
}
