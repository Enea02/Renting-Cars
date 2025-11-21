'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { mockCars } from '@/types/car';
import CarGrid from '@/components/cars/CarGrid';
import CarFilter from '@/components/cars/CarFilter';

export default function CarsPage() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredCars = selectedCategory === 'all'
    ? mockCars
    : mockCars.filter(car => car.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">
          {t('cars.title')}
        </h1>
        <p className="text-lg opacity-80 max-w-2xl mx-auto">
          Scegli tra la nostra ampia selezione di veicoli premium
        </p>
      </div>

      <CarFilter 
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <CarGrid cars={filteredCars} />
    </div>
  );
}
