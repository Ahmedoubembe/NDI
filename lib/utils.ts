import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getDifficultyColor(difficulty: string) {
  switch (difficulty) {
    case 'easy': return 'text-green-500';
    case 'medium': return 'text-orange-500';
    case 'hard': return 'text-red-500';
    default: return 'text-gray-500';
  }
}

export function getImpactColor(impact: string) {
  switch (impact) {
    case 'low': return 'bg-blue-500';
    case 'medium': return 'bg-yellow-500';
    case 'high': return 'bg-red-500';
    default: return 'bg-gray-500';
  }
}

export function calculateDistance(x1: number, y1: number, x2: number, y2: number) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}
