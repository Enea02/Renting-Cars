'use client';

import { Car } from '@/types/car';
import CarCard from './CarCard';

interface CarGridProps {
  cars: Car[];
}

export default function CarGrid({ cars }: CarGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {cars.map((car, index) => (
        <CarCard key={car.id} car={car} index={index} />
      ))}
    </div>
  );
}
