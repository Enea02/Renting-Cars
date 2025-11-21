'use client';

import { useLanguage } from '@/context/LanguageContext';
import { Car } from '@/types/car';

interface CarFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CarFilter({ selectedCategory, onCategoryChange }: CarFilterProps) {
  const { t } = useLanguage();

  const categories = [
    'all',
    'sedan',
    'suv',
    'sport',
    'electric',
    'van',
    'compact'
  ];

  return (
    <div className="flex flex-wrap gap-4 justify-center mb-12">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
            selectedCategory === category
              ? 'bg-primary text-white shadow-lg'
              : 'bg-[var(--bg-card)] hover:bg-primary/10'
          }`}
        >
          {t(`cars.filters.${category}`)}
        </button>
      ))}
    </div>
  );
}
