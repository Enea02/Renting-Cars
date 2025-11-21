'use client';

import { Car } from '@/types/car';
import { useLanguage } from '@/context/LanguageContext';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';
import { FiUsers, FiSettings, FiZap } from 'react-icons/fi';
import { motion } from 'framer-motion';

interface CarCardProps {
  car: Car;
  index?: number;
}

export default function CarCard({ car, index = 0 }: CarCardProps) {
  const { t, language } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div 
        className="relative overflow-hidden rounded-2xl transition-all duration-300 transform hover:-translate-y-2"
        style={{
          background: 'var(--bg-card)',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        {/* Glow Effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent-light rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
        
        <div className="relative bg-[var(--bg-card)] rounded-2xl overflow-hidden">
          {/* Image Container */}
          <div className="relative h-56 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
            <Image
              src={car.image}
              alt={car.name}
              fill
              className="object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            
            {/* Category Badge */}
            <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full text-sm font-semibold glass text-white">
              {t(`cars.filters.${car.category}`)}
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-2xl font-bold font-display mb-2">{car.name}</h3>
            <p className="opacity-70 mb-4">{car.description[language]}</p>

            {/* Specs */}
            <div className="flex items-center gap-4 mb-4 text-sm">
              <div className="flex items-center gap-1">
                <FiUsers className="text-primary" />
                <span>{car.seats} {t('cars.seats')}</span>
              </div>
              <div className="flex items-center gap-1">
                <FiSettings className="text-primary" />
                <span>{t(`cars.${car.transmission}`)}</span>
              </div>
              <div className="flex items-center gap-1">
                <FiZap className="text-primary" />
                <span>{t(`cars.${car.fuel}`)}</span>
              </div>
            </div>

            {/* Price and CTA */}
            <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: 'var(--border-color)' }}>
              <div>
                <span className="text-3xl font-bold text-primary">€{car.price}</span>
                <span className="text-sm opacity-70 ml-2">/ {t('cars.perDay')}</span>
              </div>
              <Link href={`/booking/${car.id}`}>
                <Button size="sm">
                  {t('common.bookNow')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
