'use client';

import { use } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { mockCars } from '@/types/car';
import BookingForm from '@/components/booking/BookingForm';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default function BookingPage({ params }: { params: Promise<{ carId: string }> }) {
  const resolvedParams = use(params);
  const { t, language } = useLanguage();
  
  const car = mockCars.find(c => c.id === resolvedParams.carId);

  if (!car) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-bold font-display text-center mb-12">
        {t('booking.title')}
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Car Info */}
        <div>
          <div className="card sticky top-24">
            <div className="relative h-64 rounded-lg overflow-hidden mb-6">
              <Image
                src={car.image}
                alt={car.name}
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold font-display mb-2">{car.name}</h2>
            <p className="opacity-80 mb-4">{car.description[language]}</p>
            
            <div className="space-y-2">
              <div className="flex justify-between py-2 border-b" style={{ borderColor: 'var(--border-color)' }}>
                <span className="font-semibold">{t('cars.seats')}:</span>
                <span>{car.seats}</span>
              </div>
              <div className="flex justify-between py-2 border-b" style={{ borderColor: 'var(--border-color)' }}>
                <span className="font-semibold">{t('cars.transmission')}:</span>
                <span>{t(`cars.${car.transmission}`)}</span>
              </div>
              <div className="flex justify-between py-2 border-b" style={{ borderColor: 'var(--border-color)' }}>
                <span className="font-semibold">{t('cars.fuel')}:</span>
                <span>{t(`cars.${car.fuel}`)}</span>
              </div>
              <div className="flex justify-between py-2 text-xl font-bold text-primary">
                <span>Prezzo:</span>
                <span>€{car.price} / {t('cars.perDay')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Form */}
        <div className="card">
          <BookingForm carId={car.id} carPrice={car.price} />
        </div>
      </div>
    </div>
  );
}
